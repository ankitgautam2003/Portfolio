import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/contact — receive + save + email
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      // 1) Save in storage
      const contact = await storage.createContact(validatedData);

      // 2) Setup transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // 3) Email content
      const html = `
        <div style="font-family:Inter,Arial,sans-serif;line-height:1.6">
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><b>Email:</b> ${validatedData.email}</p>
          <p><b>Subject:</b> ${validatedData.subject}</p>
          <p><b>Message:</b><br/>${(validatedData.message || "").replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color:#555;font-size:12px">This email was sent from your portfolio contact form.</p>
        </div>
      `;

      // 4) Send mail
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: validatedData.email,
        subject: `New message: ${validatedData.subject} — ${validatedData.firstName} ${validatedData.lastName}`,
        html,
      });

      res.json({ success: true, message: "Email sent successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      console.error("❌ /api/contact error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit contact form or send email",
      });
    }
  });

  // (Optional) List all contacts
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
