import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return res.status(500).json({ success: false, error: 'Server misconfiguration: Email credentials missing.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const data = req.body;
  const subject = data.subject || 'New Enquiry from Website';

  // Route to the correct inbox based on which page submitted
  // TODO: Uncomment these lines to enable smart routing in production
  // const isFuel   = subject.includes('Pawan Filling Station');
  // const isBricks = subject.includes('Gramin Brick Field');
  // const recipientEmail = isFuel
  //   ? 'anuragjaiswal182@gmail.com'
  //   : 'pawansethji9595@gmail.com';

  // For testing, route all emails to the authenticated testing email account
  const isFuel = subject.includes('Pawan Filling Station'); // Kept for template selection
  const recipientEmail = user;

  // ─── BUILD PLAIN TEXT ────────────────────────────────────────
  let text = `You received a new enquiry:\n\n`;
  for (const [key, value] of Object.entries(data)) {
    if (['access_key', 'subject', 'from_name'].includes(key)) continue;
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    text += `${label}: ${value}\n`;
  }

  // ─── SHARED ROW BUILDER ──────────────────────────────────────
  function buildRows(data) {
    let rows = '';
    for (const [key, value] of Object.entries(data)) {
      if (['access_key', 'subject', 'from_name'].includes(key)) continue;
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const displayValue = value
        ? String(value).replace(/\n/g, '<br>')
        : '<span style="color:#555555;font-style:italic;">Not provided</span>';
      rows += `
        <tr>
          <td bgcolor="#121212" style="padding:14px 20px;border-bottom:1px solid #222222;width:38%;vertical-align:top;background-color:#121212;">
            <span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#888888;">${label}</span>
          </td>
          <td bgcolor="#121212" style="padding:14px 20px;border-bottom:1px solid #222222;vertical-align:top;background-color:#121212;">
            <span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:500;color:#FFFFFF;">${displayValue}</span>
          </td>
        </tr>`;
    }
    return rows;
  }

  // ─── TEMPLATE 1: GRAMIN BRICK FIELD ─────────────────────────
  function bricksTemplate() {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Enquiry — Gramin Brick Field</title></head>
<body bgcolor="#0A0A0A" style="margin:0;padding:0;background-color:#0A0A0A;font-family:Helvetica Neue,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0A0A0A" style="background-color:#0A0A0A;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="max-width:600px;width:100%;background-color:#121212;border:1px solid #222222;">

          <!-- TOP ACCENT BAR -->
          <tr>
            <td bgcolor="#CC5500" style="height:4px;background-color:#CC5500;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td bgcolor="#121212" style="padding:32px 28px 24px 28px;border-bottom:1px solid #222222;background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#CC5500;">PAWAN ENTERPRISE &middot; TRANSMISSION</p>
                    <h1 style="margin:0;font-family:Helvetica Neue,Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:0.04em;color:#FFFFFF;line-height:1.2;">NEW ENQUIRY &mdash; GRAMIN BRICK FIELD</h1>
                  </td>
                  <td align="right" valign="top" style="padding-top:4px;">
                    <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#1A0E07" style="background-color:#1A0E07;border:1px solid #CC5500;padding:6px 12px;">
                      <span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#CC5500;">BRICK FIELD</span>
                    </td></tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DOCKET ROWS -->
          <tr>
            <td bgcolor="#121212" style="background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildRows(data)}
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td bgcolor="#0E0E0E" style="padding:20px 28px;border-top:1px solid #222222;background-color:#0E0E0E;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;color:#555555;letter-spacing:0.05em;">AUTOMATED TRANSMISSION FROM PAWAN ENTERPRISE SECURE SERVER</p>
                    <p style="margin:6px 0 0 0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;color:#444444;">Gramin Brick Field &middot; Hakuha Kokhipur, Aliganj, Sultanpur, UP</p>
                  </td>
                  <td align="right" valign="middle">
                    <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#CC5500" style="width:8px;height:8px;background-color:#CC5500;font-size:0;">&nbsp;</td></tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  // ─── TEMPLATE 2: PAWAN FILLING STATION ──────────────────────
  function fuelTemplate() {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Enquiry — Pawan Filling Station</title></head>
<body bgcolor="#0A0A0A" style="margin:0;padding:0;background-color:#0A0A0A;font-family:Helvetica Neue,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0A0A0A" style="background-color:#0A0A0A;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="max-width:600px;width:100%;background-color:#121212;border:1px solid #1A2A4A;">

          <!-- TOP ACCENT BAR: HP Blue + Red split -->
          <tr>
            <td bgcolor="#121212" style="font-size:0;line-height:0;background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#0033A0" style="height:4px;background-color:#0033A0;width:90%;font-size:0;line-height:0;">&nbsp;</td>
                  <td bgcolor="#E3000F" style="height:4px;background-color:#E3000F;width:10%;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td bgcolor="#121212" style="padding:32px 28px 24px 28px;border-bottom:1px solid #1A2A4A;background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#0066CC;">PAWAN ENTERPRISE &middot; TRANSMISSION</p>
                    <h1 style="margin:0;font-family:Helvetica Neue,Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:0.04em;color:#FFFFFF;line-height:1.2;">NEW ENQUIRY &mdash; PAWAN FILLING STATION</h1>
                  </td>
                  <td align="right" valign="top" style="padding-top:4px;">
                    <table cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="#00153A" style="background-color:#00153A;border:1px solid #0033A0;padding:6px 12px;">
                      <span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#4D99FF;">HP FUEL</span>
                    </td></tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DOCKET ROWS -->
          <tr>
            <td bgcolor="#121212" style="background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildRows(data)}
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td bgcolor="#0A0E16" style="padding:20px 28px;border-top:1px solid #1A2A4A;background-color:#0A0E16;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;color:#555555;letter-spacing:0.05em;">AUTOMATED TRANSMISSION FROM PAWAN ENTERPRISE SECURE SERVER</p>
                    <p style="margin:6px 0 0 0;font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;color:#444444;">Pawan Filling Station &middot; Kurwar Road, Aliganj, Sultanpur, UP &middot; 24 Hrs</p>
                  </td>
                  <td align="right" valign="middle">
                    <table cellpadding="0" cellspacing="2" border="0">
                      <tr>
                        <td bgcolor="#0033A0" style="width:8px;height:8px;background-color:#0033A0;font-size:0;">&nbsp;</td>
                        <td bgcolor="#E3000F" style="width:8px;height:8px;background-color:#E3000F;font-size:0;">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  // ─── SELECT TEMPLATE ─────────────────────────────────────────
  const html = isFuel ? fuelTemplate() : bricksTemplate();

  // ─── SEND ────────────────────────────────────────────────────
  try {
    await transporter.sendMail({
      from: `"Jaiswal Enterprises Website" <${user}>`,
      to: recipientEmail,
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
