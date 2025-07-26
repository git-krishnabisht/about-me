# About Me Portfolio

A personal portfolio website with a serverless endpoint for my vercel deployment (similar to next.js where each file behaves as an http endpoint) 

## Structure

This project consists of two main parts:

1. **Frontend**: A React application built with Vite and TailwindCSS
2. **API**: A simple serverless function for handling contact form submissions

## Development

To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

## If you’re not using Next.js, but just want to test Vercel-like serverless functions:

You'll need the Vercel CLI:

```
npm i -g vercel
vercel dev
```

This simulates the Vercel environment, allowing you to run serverless functions locally

## Deployment

This project is configured for deployment on Vercel:

1. The frontend is built using the Vercel Static Build configuration
2. The API contact form is handled by a serverless Node.js function

## Environment Variables

The following environment variables need to be set in Vercel:

- `GMAIL_USER`: Gmail address for sending contact form emails
- `GMAIL_PASS`: App password for Gmail (required if using 2FA) 