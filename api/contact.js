import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // The email we are sending to and from (authenticated via Google App Password)
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return res.status(500).json({ success: false, error: 'Server misconfiguration: Email credentials missing.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const data = req.body;
  const subject = data.subject || 'New Enquiry from Website';
  
  // Format the body by iterating through the JSON properties
  let text = `You received a new enquiry:\n\n`;
  for (const [key, value] of Object.entries(data)) {
    // Ignore internal keys used by web3forms if any are leftover
    if (['access_key', 'subject', 'from_name'].includes(key)) continue;
    text += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
  }

  try {
    await transporter.sendMail({
      from: `"${data.name || 'Website Contact Form'}" <${user}>`,
      to: user, // Sends to yourself
      replyTo: data.email || undefined,
      subject: subject,
      text: text,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
