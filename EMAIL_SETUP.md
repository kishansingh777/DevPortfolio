# Email Setup Guide

## Prerequisites

1. **Gmail Account**: You need a Gmail account to send emails
2. **App Password**: You need to generate an app password for your Gmail account

## Setup Steps

### 1. Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Go to "App passwords" (under 2-Step Verification)
4. Generate a new app password for "Mail"
5. Copy the generated 16-character password

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
EMAIL_USER=kishansingh98337@gmail.com
EMAIL_PASS=your_16_character_app_password_here
PORT=5000
NODE_ENV=development
```

**Important**: Replace `your_16_character_app_password_here` with the actual app password you generated.

### 3. Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Use app passwords instead of your regular Gmail password for security

### 4. Testing

1. Start the development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check your email (kishansingh98337@gmail.com) for the received message

### 5. Troubleshooting

If emails are not being sent:

1. **Check Gmail settings**: Make sure "Less secure app access" is enabled or use app passwords
2. **Verify app password**: Ensure the app password is correct and 16 characters long
3. **Check server logs**: Look for error messages in the console
4. **Gmail quotas**: Gmail has daily sending limits for free accounts

### 6. Production Deployment

For production deployment:

1. Set up environment variables on your hosting platform
2. Consider using a dedicated email service like SendGrid or Mailgun for better reliability
3. Implement rate limiting to prevent spam
4. Add CAPTCHA or other anti-spam measures if needed

## Email Template

The email will be sent with a professional HTML template including:
- Contact details (name, email, subject)
- The message content
- Timestamp
- Professional styling

The email will be sent to: `kishansingh98337@gmail.com` 