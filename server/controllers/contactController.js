import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import { createTransporter } from '../config/mailer.js';
import Message from '../models/Message.js';

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactMessage(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }

  const { name, email, subject, message } = req.body;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;

  let emailStatus = 'sent';
  let emailError = null;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: receiver,
      replyTo: email,
      subject: subject?.trim() ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      text: `You received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Subject: ${subject || '(no subject)'}

Message:
${message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#111;">New portfolio contact message</h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 12px;">
            <tr><td style="padding:6px 0; color:#666; width:100px;">Name</td><td style="padding:6px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="padding:6px 0; color:#666;">Email</td><td style="padding:6px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:6px 0; color:#666;">Subject</td><td style="padding:6px 0;">${escapeHtml(subject || '(no subject)')}</td></tr>
          </table>
          <div style="margin-top:16px; padding:16px; background:#f5f5f5; border-radius:8px; white-space:pre-wrap; line-height:1.6;">
            ${escapeHtml(message)}
          </div>
          <p style="color:#999; font-size:12px; margin-top:20px;">Sent automatically from your portfolio contact form.</p>
        </div>
      `,
    });
  } catch (err) {
    emailStatus = 'failed';
    emailError = err;
    console.error('❌ Failed to send contact email:', err.message);
  }

  // Persist the message if MongoDB is connected, regardless of email outcome
  if (mongoose.connection.readyState === 1) {
    try {
      await Message.create({
        name,
        email,
        subject,
        message,
        ip: req.ip,
        emailStatus,
      });
    } catch (dbErr) {
      console.error('❌ Failed to save message to database:', dbErr.message);
    }
  }

  if (emailStatus === 'failed') {
    return res.status(502).json({
      success: false,
      message:
        emailError?.message?.includes('not configured')
          ? 'Email service is not configured on the server yet.'
          : 'Your message was received but the email notification could not be sent. Please try again shortly.',
    });
  }

  return res.status(200).json({
    success: true,
    message: `Thanks, ${name.split(' ')[0]}! Your message has been sent — I'll reply soon.`,
  });
}
