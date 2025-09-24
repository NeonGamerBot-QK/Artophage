import { createMagicLink } from "../utils/magiclink";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;
  if (!email)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing email",
    });
  // send email via node mailer
  const link = createMagicLink(email!)
});
