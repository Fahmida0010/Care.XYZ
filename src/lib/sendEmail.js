import nodemailer from "nodemailer";

export async function sendEmail(to, booking) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.verify(); 

  const html = `
    <h2>Payment Successful 🎉</h2>
    <p>Your booking has been confirmed.</p>
    <hr/>
    <p><b>Service:</b> ${booking.serviceTitle}</p>
    <p><b>Duration:</b> ${booking.duration} Days</p>
    <p><b>Total:</b> ৳${booking.total}</p>
    <p><b>Booking ID:</b> ${booking._id}</p>
    <br/>
    <p>Thank you for choosing care.xyz 💙</p>
  `;

  await transporter.sendMail({
    from: `"care.xyz" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Payment Successful - Invoice",
    html,
  });
}
