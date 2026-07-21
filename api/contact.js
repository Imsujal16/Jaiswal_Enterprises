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
  
  let html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px; color: #18181b;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <div style="background-color: #d85c27; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Enquiry Received</h1>
          <p style="color: #ffedd5; margin: 6px 0 0 0; font-size: 15px;">Pawan Enterprise Website</p>
        </div>
        <div style="padding: 32px 24px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <tbody>
  `;

  for (const [key, value] of Object.entries(data)) {
    // Ignore internal keys used by web3forms if any are leftover
    if (['access_key', 'subject', 'from_name'].includes(key)) continue;
    
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    
    // Plain text building
    text += `${formattedKey}: ${value}\n`;

    // HTML building
    const displayValue = value ? String(value).replace(/\n/g, '<br>') : '<span style="color: #9ca3af; font-style: italic;">Not provided</span>';
    html += `
              <tr style="border-bottom: 1px solid #e4e4e7;">
                <td style="padding: 12px 0; font-weight: 600; color: #52525b; width: 35%; vertical-align: top;">${formattedKey}</td>
                <td style="padding: 12px 0; color: #27272a; vertical-align: top;">${displayValue}</td>
              </tr>
    `;
  }

  html += `
            </tbody>
          </table>
        </div>
        <div style="background-color: #fafafa; padding: 16px 24px; text-align: center; border-top: 1px solid #e4e4e7;">
          <p style="margin: 0; font-size: 13px; color: #71717a;">This email was sent securely from your Vercel website.</p>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${data.name || 'Website Contact Form'}" <${user}>`,
      to: user, // Sends to yourself
      replyTo: data.email || undefined,
      subject: subject,
      text: text,
      html: html,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
