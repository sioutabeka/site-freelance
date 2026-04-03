import { PrismaClient } from "@prisma/client";
import { sendContactEmail } from "../services/email.service.js";

const prisma = new PrismaClient();

export async function submitContactForm(req, res) {
  const {
    name,
    businessName,
    budget,
    service,
    email,
    website,
    date,
    project,
  } = req.body;

  if (!name || !email || !service || !project) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        businessName,
        budget,
        service,
        email,
        website,
        date,
        project,
      },
      
    });

    await sendContactEmail({
        name,
        businessName,
        budget,
        service,
        email,
        website,
        date,
        project,
      });

    console.log("Saved contact:", newContact);

    return res.status(200).json({
      success: true,
      message: "Contact saved successfully.",
    });
  } catch (error) {
    console.error("Prisma error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
}