import jwt from "jsonwebtoken";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const token = query.token;

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Missing token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // or public key if RS256
    console.log(decoded);
    // valid token
    return { message: "JWT valid", user: decoded };
  } catch (err) {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid or expired token",
    });
  }
});
