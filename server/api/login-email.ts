import { createMagicLink } from "../utils/magiclink";
import { transporter } from "../utils/mailer";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.token) {
    throw createError({
      statusCode: 422,
      statusMessage: "Token not provided.",
    });
  }

  const res = await verifyTurnstileToken(body.token);
  console.log(res);
  if (!res.success) {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid turnstile",
    });
  }
  const { email } = body;
  console.log(body);
  if (!email)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing email",
    });
  //~~ send email via node mailer
  const link = createMagicLink(email!);
  // send email via nodemailer
  console.log(`Magic link for ${email}: ${link}`);
  await transporter.sendMail({
    to: email,
    from: `Artophage <${process.env.SMTP_FROM}>`,
    subject: "Your Magic Login Link",
    html: `<p>Click <a href="${link}">here</a> to login. This link is valid for 15 minutes.</p>`,
  });
  return { message: "Magic link sent" };
});
