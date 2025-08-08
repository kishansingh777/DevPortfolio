import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";

// Simple in-memory rate limiting
const contactAttempts = new Map<string, { count: number; lastAttempt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const attempts = contactAttempts.get(ip);
  
  if (!attempts) {
    contactAttempts.set(ip, { count: 1, lastAttempt: now });
    return false;
  }

  // Reset if more than 1 hour has passed
  if (now - attempts.lastAttempt > 60 * 60 * 1000) {
    contactAttempts.set(ip, { count: 1, lastAttempt: now });
    return false;
  }

  // Allow max 5 attempts per hour
  if (attempts.count >= 5) {
    return true;
  }

  attempts.count++;
  attempts.lastAttempt = now;
  return false;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Rate limiting
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      if (isRateLimited(clientIP)) {
        return res.status(429).json({
          success: false,
          message: 'Too many contact attempts. Please try again later.'
        });
      }

      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Name, email, and message are required'
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address'
        });
      }

      // Validate input lengths
      if (name.length > 100 || email.length > 100 || (subject && subject.length > 200) || message.length > 2000) {
        return res.status(400).json({
          success: false,
          message: 'Input too long. Please shorten your message.'
        });
      }

      // Send email
      const emailSent = await emailService.sendContactFormEmail({
        name,
        email,
        subject: subject || 'Portfolio Contact',
        message
      });

      if (emailSent) {
        res.json({
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
