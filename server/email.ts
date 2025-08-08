import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email credentials not configured. Contact form emails will not be sent.');
      console.warn('Please set EMAIL_USER and EMAIL_PASS environment variables.');
    }

    // Create transporter using Gmail SMTP
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'kishansingh98337@gmail.com',
        pass: process.env.EMAIL_PASS || 'gubg ilcx ftzk zrjj'
      }
    });
  }

  async sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
    try {
      // Validate email configuration
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials not configured');
        return false;
      }

      // Sanitize and validate input
      const sanitizedData = {
        name: this.sanitizeString(formData.name, 100),
        email: this.sanitizeEmail(formData.email),
        subject: this.sanitizeString(formData.subject, 200),
        message: this.sanitizeString(formData.message, 2000)
      };

      // Validate required fields
      if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
        console.error('Missing required fields');
        return false;
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'kishansingh98337@gmail.com', // Your email where you want to receive messages
        subject: `Portfolio Contact: ${sanitizedData.subject || 'New Message'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #666; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${sanitizedData.name}</p>
              <p><strong>Email:</strong> ${sanitizedData.email}</p>
              <p><strong>Subject:</strong> ${sanitizedData.subject || 'No subject'}</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; color: #555;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px;">
                This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  private sanitizeString(str: string, maxLength: number): string {
    if (!str) return '';
    return str
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .substring(0, maxLength);
  }

  private sanitizeEmail(email: string): string {
    if (!email) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? email.trim() : '';
  }
}

export const emailService = new EmailService(); 