# Make.com Integration Setup Guide

## Overview
The contact form at `/contact` is configured to send form submissions to Make.com via webhook.

## Setup Instructions

### 1. Create Make.com Scenario

1. Go to [Make.com](https://www.make.com)
2. Click **Create a new scenario**
3. Click the **+** button to add a module
4. Search for **Webhooks** and select **Custom webhook**
5. Click **Create a webhook**
6. Give it a name (e.g., "Onleadify Contact Form")
7. **Copy the webhook URL** (it should look like: `https://hook.eu2.make.com/...`)

### 2. Configure Environment Variable

The webhook URL is already configured in your `.env` file:
```
PUBLIC_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/9xfu42vu6qs92g6jsbtndlyi1cm7byqf
```

### 3. Test the Webhook

1. In Make.com, click **OK** to save the webhook
2. The scenario will wait for data
3. Go to `http://localhost:4321/contact`
4. Fill out and submit the form
5. Check Make.com - you should see the data arrive

### 4. Data Structure

The webhook receives the following JSON data:
```json
{
  "name": "User's name",
  "phone": "+7 (123) 456-78-90",
  "telegram": "@username",
  "timestamp": "2026-04-13T08:19:00.000Z",
  "source": "onleadify.com/contact"
}
```

### 5. Add Actions to Your Scenario

After the webhook, you can add modules to:
- **Send email notifications** (Gmail, Outlook, etc.)
- **Add to CRM** (HubSpot, Salesforce, etc.)
- **Send to Telegram** (Telegram Bot)
- **Add to Google Sheets**
- **Send to Slack/Discord**
- And more...

### Example: Send Telegram Notification

1. Add **Telegram** module after webhook
2. Select **Send a Text Message**
3. Configure your bot token
4. Set chat ID
5. Message template:
```
🆕 Новая заявка с сайта!

👤 Имя: {{name}}
📱 Телефон: {{phone}}
💬 Telegram: {{telegram}}
⏰ Время: {{timestamp}}
```

### 6. Activate Scenario

1. Click **Save** (bottom left)
2. Toggle **ON** to activate the scenario
3. Your form is now live!

## Testing Locally

1. Start dev server: `npm run dev`
2. Open `http://localhost:4321/contact`
3. Submit a test form
4. Check Make.com scenario execution history
5. Verify data was received correctly

## Production Deployment

When deploying to production:
1. Update `.env` on your production server with the same webhook URL
2. Or use environment variables in your hosting platform (DigitalOcean, Vercel, etc.)
3. Test the form on production URL

## Troubleshooting

### Form submits but no data in Make.com
- Check browser console for errors
- Verify webhook URL is correct in `.env`
- Ensure scenario is **ON** in Make.com
- Check CORS settings if needed

### Error message appears
- Check Make.com scenario is running
- Verify webhook URL is accessible
- Check Make.com execution history for errors

### Data format issues
- Review the data structure in Make.com
- Adjust field mappings in subsequent modules
- Use Make.com's data transformation tools

## Support

For Make.com help: https://www.make.com/en/help
