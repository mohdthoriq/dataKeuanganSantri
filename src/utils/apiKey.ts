import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";
import config from "./env";

const emailApi = new TransactionalEmailsApi();
emailApi.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  config.BREVO_API_KEY!
);

type SendEmailParams = {
  to: string;
  subject: string;
  html?: string;
  text?: string;
};

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
}: SendEmailParams) => {
  const email = new SendSmtpEmail();

  if (!config.SENDER_EMAIL) {
      throw new Error("SENDER_EMAIL is not defined in .env");
  }

  email.subject = subject;
  email.sender = {
    name: config.SENDER_NAME || "Keuangan Santri",
    email: config.SENDER_EMAIL!,
  };
  email.replyTo = {
    email: config.SENDER_EMAIL // ✅ verified email
  };
  email.to = [{ email: to }];

  if (html) email.htmlContent = html;
  if (text) email.textContent = text;

  return emailApi.sendTransacEmail(email);
};
