import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const pg = usePostgres();
  const token = query.token;

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Missing token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // or public key if RS256
    console.log(decoded);
    const user = await pg`select * from users where email = ${decoded.email}`;
    // valid token
    if (!user) {
      // create a user
      pg`CREATE `;
    }
    return { message: "JWT valid", user: decoded };
  } catch (err) {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid or expired token",
    });
  }
});
