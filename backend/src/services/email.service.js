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
    from: `"Nouvelle demande" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "Nouvelle demande de contact",
    html: `
      <h2>Nouvelle demande</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Prestation :</strong> ${service}</p>
      <p><strong>Projet :</strong> ${project}</p>
      <p><strong>Entreprise / marque :</strong> ${businessName || "-"}</p>
      <p><strong>Budget :</strong> ${budget || "-"}</p>
      <p><strong>Site web / Instagram :</strong> ${website || "-"}</p>
      <p><strong>Date idéale de démarrage :</strong> ${date || "-"}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}