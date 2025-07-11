import nodemailer from "nodemailer";

export const sendMessage = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,     
      pass: process.env.EMAIL_PASS         
    },
  });

  const mailOptions = {
    from: `"Museday Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Welcome, ${name}!`,
    html: `
      <h2>Hey ${name} 👋</h2>
      <p>Thanks for contacting us!</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <br/>
      <p>We’ll get back to you soon. 🙌</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
