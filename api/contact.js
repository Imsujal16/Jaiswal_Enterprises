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

  // Smart production routing based on division
  const isFuel = subject.includes('Pawan Filling Station');
  const recipientEmail = isFuel
    ? 'anuragjaiswal182@gmail.com'
    : 'pawansethji9595@gmail.com';

  // ─── BUILD PLAIN TEXT ────────────────────────────────────────
  let text = `NEW ENQUIRY NOTIFICATION — PAWAN ENTERPRISE\n`;
  text += `===========================================\n\n`;
  for (const [key, value] of Object.entries(data)) {
    if (['access_key', 'subject', 'from_name'].includes(key)) continue;
    const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    text += `${label}: ${value}\n`;
  }

  // ─── HELPER: BUILD GROUPED DOCKET ROWS ───────────────────────
  function buildGroupedRows(data, theme) {
    const isBricks = theme === 'bricks';
    
    // Theme Tokens
    const borderCol  = isBricks ? '#222222' : '#182436';
    const labelCol   = isBricks ? '#999999' : '#8B9BB4';
    const rowBg      = '#121212';
    const hlRowBg    = isBricks ? '#1A120B' : '#0B1728';
    const accentCol  = isBricks ? '#CC5500' : '#0066FF';
    const sectionBg  = isBricks ? '#181818' : '#0F1622';
    const sectionTxt = isBricks ? '#D05C08' : '#388BFD';

    const contactKeys = ['name', 'company', 'phone', 'email', 'contact_name', 'phone_number', 'mobile'];
    
    const contactEntries = [];
    const specEntries = [];

    for (const [key, value] of Object.entries(data)) {
      if (['access_key', 'subject', 'from_name'].includes(key)) continue;
      const entry = { key, value };
      if (contactKeys.includes(key.toLowerCase())) {
        contactEntries.push(entry);
      } else {
        specEntries.push(entry);
      }
    }

    function renderRow(key, value, isHighlight = false) {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const displayValue = value
        ? String(value).replace(/\n/g, '<br>')
        : '<span style="color:#555555;font-style:italic;">Not provided</span>';
      
      const currentBg = isHighlight ? hlRowBg : rowBg;
      const leftBorder = isHighlight ? `border-left:3px solid ${accentCol};` : '';

      return `
        <tr>
          <td bgcolor="${currentBg}" style="padding:14px 20px;border-bottom:1px solid ${borderCol};width:36%;vertical-align:top;background-color:${currentBg};${leftBorder}">
            <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${labelCol};">${label}</span>
          </td>
          <td bgcolor="${currentBg}" style="padding:14px 20px;border-bottom:1px solid ${borderCol};vertical-align:top;background-color:${currentBg};word-break:break-word;">
            <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;color:#FFFFFF;line-height:1.4;">${displayValue}</span>
          </td>
        </tr>`;
    }

    let html = '';

    // SECTION 1: CLIENT IDENTIFICATION
    if (contactEntries.length > 0) {
      html += `
        <tr>
          <td colspan="2" bgcolor="${sectionBg}" style="padding:10px 20px;border-bottom:1px solid ${borderCol};background-color:${sectionBg};">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-size:0;line-height:0;width:12px;">
                  <div style="width:4px;height:12px;background-color:${accentCol};display:inline-block;"></div>
                </td>
                <td>
                  <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:${sectionTxt};">01 &middot; CONTACT DETAILS</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
      contactEntries.forEach(({ key, value }) => {
        html += renderRow(key, value, false);
      });
    }

    // SECTION 2: SPECIFICATIONS & REQUIREMENTS
    if (specEntries.length > 0) {
      html += `
        <tr>
          <td colspan="2" bgcolor="${sectionBg}" style="padding:10px 20px;border-bottom:1px solid ${borderCol};border-top:1px solid ${borderCol};background-color:${sectionBg};">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-size:0;line-height:0;width:12px;">
                  <div style="width:4px;height:12px;background-color:${accentCol};display:inline-block;"></div>
                </td>
                <td>
                  <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:${sectionTxt};">02 &middot; ORDER REQUIREMENTS</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
      specEntries.forEach(({ key, value }) => {
        const isHl = ['grade', 'fuel_type', 'volume', 'daily_volume'].includes(key.toLowerCase());
        html += renderRow(key, value, isHl);
      });
    }

    return html;
  }

  // ─── TEMPLATE 1: GRAMIN BRICK FIELD ─────────────────────────
  function bricksTemplate() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Enquiry — Gramin Brick Field</title>
</head>
<body bgcolor="#080808" style="margin:0;padding:0;background-color:#080808;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#080808" style="background-color:#080808;padding:32px 12px;">
    <tr>
      <td align="center">
        <!-- CARD CONTAINER -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212" style="max-width:600px;width:100%;background-color:#121212;border:1px solid #282828;border-radius:4px;overflow:hidden;">

          <!-- TOP ACCENT STRIPE -->
          <tr>
            <td bgcolor="#CC5500" style="height:5px;background-color:#CC5500;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- HEADER BLOCK -->
          <tr>
            <td bgcolor="#161616" style="padding:28px 24px 22px 24px;border-bottom:1px solid #282828;background-color:#161616;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="top">
                    <p style="margin:0 0 6px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#CC5500;">PAWAN ENTERPRISE &middot; OFFICIAL TRANSMISSION</p>
                    <h1 style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.01em;color:#FFFFFF;line-height:1.25;">NEW CUSTOMER ENQUIRY</h1>
                    <p style="margin:4px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#999999;">Gramin Brick Field &middot; High-Fired Brick Orders</p>
                  </td>
                  <td align="right" valign="top" style="padding-top:2px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="#221208" style="background-color:#221208;border:1px solid #CC5500;padding:6px 12px;border-radius:2px;">
                          <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.18em;color:#FF6A00;text-transform:uppercase;">BRICK FIELD</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DOCKET CONTENT ROWS -->
          <tr>
            <td bgcolor="#121212" style="background-color:#121212;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildGroupedRows(data, 'bricks')}
              </table>
            </td>
          </tr>

          <!-- FOOTER BLOCK -->
          <tr>
            <td bgcolor="#0A0A0A" style="padding:22px 24px;border-top:1px solid #282828;background-color:#0A0A0A;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;color:#666666;letter-spacing:0.12em;text-transform:uppercase;">AUTOMATED TRANSMISSION &middot; PAWAN ENTERPRISE SECURE SERVER</p>
                    <p style="margin:5px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;color:#555555;">Gramin Brick Field &middot; Hakuha Kokhipur, Aliganj, Sultanpur, UP</p>
                  </td>
                  <td align="right" valign="middle">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="#CC5500" style="width:10px;height:10px;background-color:#CC5500;font-size:0;border-radius:1px;">&nbsp;</td>
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

  // ─── TEMPLATE 2: PAWAN FILLING STATION ──────────────────────
  function fuelTemplate() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Enquiry — Pawan Filling Station</title>
</head>
<body bgcolor="#06090E" style="margin:0;padding:0;background-color:#06090E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#06090E" style="background-color:#06090E;padding:32px 12px;">
    <tr>
      <td align="center">
        <!-- CARD CONTAINER -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#101722" style="max-width:600px;width:100%;background-color:#101722;border:1px solid #1E2D4A;border-radius:4px;overflow:hidden;">

          <!-- TOP ACCENT STRIPE: HP BLUE + HP RED -->
          <tr>
            <td bgcolor="#101722" style="font-size:0;line-height:0;background-color:#101722;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="#0033A0" style="height:5px;background-color:#0033A0;width:88%;font-size:0;line-height:0;">&nbsp;</td>
                  <td bgcolor="#E3000F" style="height:5px;background-color:#E3000F;width:12%;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- HEADER BLOCK -->
          <tr>
            <td bgcolor="#0D1525" style="padding:28px 24px 22px 24px;border-bottom:1px solid #1E2D4A;background-color:#0D1525;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="top">
                    <p style="margin:0 0 6px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:#388BFD;">PAWAN ENTERPRISE &middot; OFFICIAL TRANSMISSION</p>
                    <h1 style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.01em;color:#FFFFFF;line-height:1.25;">NEW CUSTOMER ENQUIRY</h1>
                    <p style="margin:4px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;color:#8B9BB4;">Pawan Filling Station &middot; Official HP Pump & Commercial Accounts</p>
                  </td>
                  <td align="right" valign="top" style="padding-top:2px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td bgcolor="#0A1C3E" style="background-color:#0A1C3E;border:1px solid #0040C8;padding:6px 12px;border-radius:2px;">
                          <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:800;letter-spacing:0.18em;color:#58A6FF;text-transform:uppercase;">HP FUEL</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DOCKET CONTENT ROWS -->
          <tr>
            <td bgcolor="#101722" style="background-color:#101722;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${buildGroupedRows(data, 'fuel')}
              </table>
            </td>
          </tr>

          <!-- FOOTER BLOCK -->
          <tr>
            <td bgcolor="#080D16" style="padding:22px 24px;border-top:1px solid #1E2D4A;background-color:#080D16;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;color:#5D6D82;letter-spacing:0.12em;text-transform:uppercase;">AUTOMATED TRANSMISSION &middot; PAWAN ENTERPRISE SECURE SERVER</p>
                    <p style="margin:5px 0 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;color:#4B596E;">Pawan Filling Station &middot; Kurwar Road, Aliganj, Sultanpur, UP &middot; 24 Hrs</p>
                  </td>
                  <td align="right" valign="middle">
                    <table cellpadding="0" cellspacing="3" border="0">
                      <tr>
                        <td bgcolor="#0033A0" style="width:8px;height:8px;background-color:#0033A0;font-size:0;border-radius:1px;">&nbsp;</td>
                        <td bgcolor="#E3000F" style="width:8px;height:8px;background-color:#E3000F;font-size:0;border-radius:1px;">&nbsp;</td>
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
      from: `"Pawan Enterprise Website" <${user}>`,
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
