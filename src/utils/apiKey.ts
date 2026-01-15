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

  console.log(`📧 Attempting to send email to: ${to} (Subject: ${subject})`);
  try {
    const result = await emailApi.sendTransacEmail(email);
    console.log(`✅ Email sent successfully to ${to}. MessageId: ${result.body?.messageId || 'N/A'}`);
    return result;
  } catch (error: any) {
    console.error(`❌ Failed to send email to ${to}:`, error.response?.body || error.message);
    throw error;
  }
};
