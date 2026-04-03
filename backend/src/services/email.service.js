import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data) {
  const {
    name,
    email,
    service,
    project,
    businessName,
    budget,
    website,
    date,
  } = data;

  const mailOptions = {
    from: `"New Inquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Project:</strong> ${project}</p>
      <p><strong>Business:</strong> ${businessName || "-"}</p>
      <p><strong>Budget:</strong> ${budget || "-"}</p>
      <p><strong>Website:</strong> ${website || "-"}</p>
      <p><strong>Date:</strong> ${date || "-"}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}