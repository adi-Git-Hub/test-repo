const getOTPTemplate = (otp, type) => {
  const titles = {
    verification: 'Verify Your Email',
    forgotPassword: 'Reset Your Password',
  };

  const messages = {
    verification: 'Thank you for joining Soliva. Please use the following OTP to verify your email address. This OTP is valid for 10 minutes.',
    forgotPassword: 'We received a request to reset your password. Please use the following OTP to proceed. This OTP is valid for 10 minutes.',
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #4f46e5; margin: 0;">Soliva</h1>
      </div>
      <h2 style="color: #333;">${titles[type]}</h2>
      <p style="color: #555; line-height: 1.5;">${messages[type]}</p>
      <div style="text-align: center; margin: 30px 0;">
        <div style="display: inline-block; padding: 15px 30px; background-color: #f3f4f6; border-radius: 8px; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #111827;">
          ${otp}
        </div>
      </div>
      <p style="color: #777; font-size: 12px; text-align: center;">
        If you did not request this, please ignore this email or contact support if you have concerns.
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">
        &copy; 2026 Soliva Guard. All rights reserved.
      </p>
    </div>
  `;
};

const getWelcomeTemplate = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #4f46e5; margin: 0;">Soliva</h1>
      </div>
      <h2 style="color: #333;">Welcome to Soliva, ${name}!</h2>
      <p style="color: #555; line-height: 1.5;">
        We are thrilled to have you as part of our community. Your account is now verified and ready to use.
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.FRONTEND_URL}" style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Start Shopping
        </a>
      </div>
      <p style="color: #555; line-height: 1.5;">
        If you have any questions, feel free to reply to this email or visit our help center.
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">
        &copy; 2026 Soliva Guard. All rights reserved.
      </p>
    </div>
  `;
};

const getPasswordChangedTemplate = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #4f46e5; margin: 0;">Soliva</h1>
      </div>
      <h2 style="color: #333;">Password Changed Successfully</h2>
      <p style="color: #555; line-height: 1.5;">
        Hi ${name},<br/><br/>
        This is a confirmation that the password for your Soliva account has just been changed.
      </p>
      <p style="color: #555; line-height: 1.5;">
        If you made this change, you can safely ignore this email. If you did not make this change, please contact our support team immediately.
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="color: #999; font-size: 11px; text-align: center;">
        &copy; 2026 Soliva Guard. All rights reserved.
      </p>
    </div>
  `;
};

const getOrderConfirmationTemplate = ({ customerName, orderId, orderItems, totalPrice, shippingInfo }) => {
  const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:5173').split(',')[0].trim();

  const itemRows = (orderItems || []).map((item) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid rgba(58,42,34,0.06);">
        <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td width="60" style="vertical-align:top;">
            <div style="width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#F0F4FF,#DBEAFE);overflow:hidden;">
              ${item.image ? `<img src="${item.image}" alt="${item.name}" width="56" height="56" style="display:block;object-fit:cover;border-radius:14px;" />` : ''}
            </div>
          </td>
          <td style="padding-left:16px;vertical-align:middle;">
            <p style="margin:0;font-family:'Georgia',serif;font-size:15px;color:#3a2a22;font-weight:500;">${item.name}</p>
            <p style="margin:4px 0 0;font-family:'Helvetica Neue',sans-serif;font-size:12px;color:#a08f84;letter-spacing:0.5px;">Qty: ${item.quantity}</p>
          </td>
          <td style="text-align:right;vertical-align:middle;">
            <p style="margin:0;font-family:'JetBrains Mono',monospace;font-size:14px;color:#3a2a22;font-weight:500;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
          </td>
        </tr></table>
      </td>
    </tr>
  `).join('');

  const shortOrderId = String(orderId).slice(-8).toUpperCase();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmed — SOLIVA</title>
</head>
<body style="margin:0;padding:0;background-color:#f7f3ee;font-family:'Helvetica Neue','Segoe UI',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Outer wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f7f3ee;">
    <tr><td align="center" style="padding:40px 16px 60px;">

      <!-- Email container -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="580" style="max-width:580px;width:100%;">

        <!-- Brand header -->
        <tr><td style="padding:0 0 40px;text-align:center;">
          <p style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:28px;font-weight:400;color:#3a2a22;letter-spacing:4px;">SOLIVA</p>
          <p style="margin:6px 0 0;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#a08f84;letter-spacing:3px;text-transform:uppercase;">Soul · Light · You</p>
        </td></tr>

        <!-- Main card -->
        <tr><td>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(180deg,#ffffff,#fffdf9);border-radius:24px;border:1px solid rgba(58,42,34,0.06);box-shadow:0 8px 40px -12px rgba(58,42,34,0.08);">

            <!-- Amber accent bar -->
            <tr><td style="height:3px;border-radius:24px 24px 0 0;background:linear-gradient(90deg,rgba(245,130,13,0.15),rgba(245,130,13,0.4),rgba(245,130,13,0.15));"></td></tr>

            <!-- Card content -->
            <tr><td style="padding:44px 40px 48px;">

              <!-- Thank you header -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr><td style="text-align:center;padding-bottom:36px;">
                  <!-- Check icon circle -->
                  <div style="display:inline-block;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,rgba(245,130,13,0.08),rgba(245,130,13,0.16));text-align:center;line-height:56px;">
                    <span style="font-size:24px;">✓</span>
                  </div>
                  <h1 style="margin:20px 0 0;font-family:'Georgia','Times New Roman',serif;font-size:24px;font-weight:400;color:#3a2a22;letter-spacing:-0.3px;line-height:1.3;">
                    Thank You For Choosing SOLIVA
                  </h1>
                  <p style="margin:8px 0 0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#a08f84;letter-spacing:0.3px;">
                    Order #${shortOrderId}
                  </p>
                </td></tr>
              </table>

              <!-- Greeting -->
              <p style="margin:0 0 6px;font-family:'Helvetica Neue',sans-serif;font-size:15px;color:#3a2a22;line-height:1.7;">
                Hi ${customerName},
              </p>
              <p style="margin:0 0 28px;font-family:'Helvetica Neue',sans-serif;font-size:15px;color:#7b6a5f;line-height:1.7;">
                Your payment has been successfully processed and your order is now confirmed. We're preparing your order with care — you'll receive shipping updates shortly.
              </p>

              <!-- Order status -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(135deg,#fdfbf7,#f9f5ef);border-radius:16px;border:1px solid rgba(58,42,34,0.04);margin-bottom:32px;">
                <tr><td style="padding:24px 28px;">
                  <p style="margin:0 0 16px;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#a08f84;letter-spacing:2.5px;text-transform:uppercase;font-weight:600;">Order Status</p>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                      <td style="padding:6px 0;font-family:'Helvetica Neue',sans-serif;font-size:14px;color:#3a2a22;">
                        <span style="color:#f5820d;">✓</span>&nbsp;&nbsp;Payment Successful
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;font-family:'Helvetica Neue',sans-serif;font-size:14px;color:#3a2a22;">
                        <span style="color:#f5820d;">✓</span>&nbsp;&nbsp;Order Confirmed
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;font-family:'Helvetica Neue',sans-serif;font-size:14px;color:#a08f84;">
                        <span style="color:#a08f84;">⏳</span>&nbsp;&nbsp;Preparing for Dispatch
                      </td>
                    </tr>
                  </table>
                </td></tr>
              </table>

              <!-- Soft divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(58,42,34,0.08),transparent);margin:0 0 28px;"></div>

              <!-- Order items -->
              <p style="margin:0 0 16px;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#a08f84;letter-spacing:2.5px;text-transform:uppercase;font-weight:600;">Your Order</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${itemRows}
              </table>

              <!-- Total -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:20px;">
                <tr>
                  <td style="padding:16px 0 0;border-top:1px solid rgba(58,42,34,0.06);">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="font-family:'Helvetica Neue',sans-serif;font-size:12px;color:#a08f84;letter-spacing:1px;text-transform:uppercase;">Shipping</td>
                        <td style="text-align:right;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#f5820d;font-weight:500;letter-spacing:1px;text-transform:uppercase;">Free</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;">Total</td>
                        <td style="text-align:right;font-family:'Georgia','Times New Roman',serif;font-size:26px;color:#3a2a22;letter-spacing:-0.5px;">₹${totalPrice.toLocaleString('en-IN')}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${shippingInfo ? `
              <!-- Shipping address -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(58,42,34,0.08),transparent);margin:28px 0;"></div>
              <p style="margin:0 0 8px;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#a08f84;letter-spacing:2.5px;text-transform:uppercase;font-weight:600;">Delivering To</p>
              <p style="margin:0;font-family:'Helvetica Neue',sans-serif;font-size:14px;color:#7b6a5f;line-height:1.7;">
                ${shippingInfo.address}<br/>
                ${shippingInfo.city}, ${shippingInfo.state} — ${shippingInfo.pinCode}<br/>
                ${shippingInfo.country}
              </p>
              ` : ''}

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(58,42,34,0.08),transparent);margin:32px 0;"></div>

              <!-- Why SOLIVA -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr><td style="text-align:center;padding-bottom:20px;">
                  <p style="margin:0 0 6px;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#a08f84;letter-spacing:2.5px;text-transform:uppercase;font-weight:600;">Why SOLIVA</p>
                  <p style="margin:0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;line-height:1.7;">
                    Designed for real daily exposure to sunlight, dust, pollution, heat & long commutes.
                  </p>
                </td></tr>
                <tr><td>
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#fdfbf7;border-radius:14px;border:1px solid rgba(58,42,34,0.04);">
                    <tr><td style="padding:20px 24px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tr>
                          <td style="padding:5px 0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;">
                            <span style="color:#f5820d;margin-right:8px;">·</span>Advanced UV Defense System
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:5px 0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;">
                            <span style="color:#f5820d;margin-right:8px;">·</span>Breathable Dual-Layer Comfort
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:5px 0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;">
                            <span style="color:#f5820d;margin-right:8px;">·</span>Full Coverage Protection
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:5px 0;font-family:'Helvetica Neue',sans-serif;font-size:13px;color:#7b6a5f;">
                            <span style="color:#f5820d;margin-right:8px;">·</span>Everyday Wearability
                          </td>
                        </tr>
                      </table>
                    </td></tr>
                  </table>
                </td></tr>
              </table>

              <!-- Brand message -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(58,42,34,0.08),transparent);margin:32px 0;"></div>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr><td style="text-align:center;padding:8px 0 24px;">
                  <p style="margin:0 0 4px;font-family:'Georgia','Times New Roman',serif;font-size:18px;color:#3a2a22;font-style:italic;line-height:1.5;">
                    Thoughtfully layered.<br/>Effortlessly worn.
                  </p>
                  <p style="margin:10px 0 0;font-family:'Helvetica Neue',sans-serif;font-size:12px;color:#a08f84;letter-spacing:0.5px;">
                    Protection. Finally designed for real life.
                  </p>
                </td></tr>
              </table>

              <!-- CTA button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr><td style="text-align:center;padding-top:8px;">
                  <a href="${frontendUrl}/collection" style="display:inline-block;padding:14px 40px;background-color:#3a2a22;color:#f7f3ee;text-decoration:none;border-radius:50px;font-family:'Helvetica Neue',sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
                    Explore More
                  </a>
                </td></tr>
              </table>

            </td></tr>

            <!-- Bottom accent -->
            <tr><td style="height:2px;border-radius:0 0 24px 24px;background:linear-gradient(90deg,rgba(245,130,13,0.08),rgba(245,130,13,0.2),rgba(245,130,13,0.08));"></td></tr>

          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:36px 0 0;text-align:center;">
          <p style="margin:0 0 8px;font-family:'Helvetica Neue',sans-serif;font-size:12px;color:#a08f84;">
            Need help? Contact us at
            <a href="mailto:support@soliva.in" style="color:#f5820d;text-decoration:none;font-weight:500;">support@soliva.in</a>
          </p>
          <p style="margin:0 0 16px;font-family:'Helvetica Neue',sans-serif;font-size:12px;color:#c4b5a8;">
            <a href="${frontendUrl}" style="color:#a08f84;text-decoration:none;">Instagram</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="${frontendUrl}" style="color:#a08f84;text-decoration:none;">Website</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="mailto:support@soliva.in" style="color:#a08f84;text-decoration:none;">Support</a>
          </p>
          <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(58,42,34,0.06),transparent);margin:0 40px 16px;"></div>
          <p style="margin:0;font-family:'Helvetica Neue',sans-serif;font-size:10px;color:#c4b5a8;letter-spacing:1.5px;text-transform:uppercase;">
            © 2026 SOLIVA — All Rights Reserved
          </p>
        </td></tr>

      </table>

    </td></tr>
  </table>

</body>
</html>
  `;
};

module.exports = { getOTPTemplate, getWelcomeTemplate, getPasswordChangedTemplate, getOrderConfirmationTemplate };