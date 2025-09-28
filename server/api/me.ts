import jwt from "jsonwebtoken";
export default eventHandler(async (event) => {
    const cookie = getCookie(event, "session");
    console.log(cookie)
    if (!cookie) {
        throw createError({ statusCode: 401, statusMessage: "Not authenticated 0" });
    }
    const sess = jwt.verify(cookie, process.env.JWT_SECRET);
    if (!sess) {
        throw createError({ statusCode: 401, statusMessage: "Not authenticated 1" });
    }
    const pg = usePostgres();
    const user = (await pg`select * from users where email = ${sess.email}`)[0];
    if (!user) {
        throw createError({ statusCode: 401, statusMessage: "Not authenticated 2" });
    }
    return user;
})