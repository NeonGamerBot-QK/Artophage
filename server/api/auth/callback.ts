import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const pg = usePostgres();
  const token = query.token;
  const cookie = getCookie(event, "session");
  if (cookie) {
    if (jwt.verify(cookie, process.env.JWT_SECRET)) {
      return sendRedirect(event, "/dashboard");
    }
  }
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Missing token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // or public key if RS256
    const user = (
      await pg`select * from users where email = ${decoded.email}`
    )[0];
    // valid token
    // console.log(user, decoded)
    if (!user) {
      // create a user
      pg`INSERT into users (email) values (${decoded.email});`.then(
        console.log,
      );
    }
    const sessionToken = jwt.sign(
      { email: decoded.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      },
    );
    setCookie(event, "session", sessionToken, {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });
    return sendRedirect(event, "/dashboard");
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid or expired token",
    });
  }
});
