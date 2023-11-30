import { Resend } from "resend";

const resend = new Resend("re_LJTiJPum_7BUhdpnRwQBD34r6KAuBJEeK");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "fatehghribi27@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
