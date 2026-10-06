# MERN Developer Portfolio

A modern, animated, fully responsive portfolio built with the MERN stack
(MongoDB, Express, React, Node.js) and Tailwind CSS. Includes a working
contact form that emails you directly via Nodemailer and optionally logs
submissions to MongoDB.

## Design concept

The whole site is framed as a code editor: the navbar is a row of file tabs
(`home.jsx`, `about.md`, `skills.json`...), the hero types out a live JS
object introducing the developer, sections are labeled like inline code
comments, and projects appear as file cards. Palette: deep navy background,
one warm amber accent for actions, a cool teal accent for
code-syntax/secondary highlights. Fonts: Space Grotesk (display), Inter
(body), JetBrains Mono (code/labels).

## Project structure

```
portfolio/
├── client/          React + Vite + Tailwind CSS + Framer Motion (frontend)
└── server/          Express + Mongoose + Nodemailer (backend API)
```

## 1. Backend setup (server/)

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:

- `MONGO_URI` — a MongoDB connection string (local or MongoDB Atlas). Optional:
  if omitted, the server still runs and still emails you, it just won't save
  a copy of each message.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` — SMTP
  credentials used to send the notification email. For Gmail:
  1. Turn on 2-Step Verification on the Google account.
  2. Create an "App Password" (Google Account → Security → App passwords).
  3. Use that 16-character password as `SMTP_PASS` (not your normal password).
- `CONTACT_RECEIVER_EMAIL` — the inbox that should receive contact form
  submissions (usually the same as `SMTP_USER`).

Run the API:

```bash
npm run dev      # with nodemon, auto-restarts on changes
# or
npm start
```

The API starts on `http://localhost:5000` by default. Health check:
`GET /api/health`.

## 2. Frontend setup (client/)

```bash
cd client
npm install
npm run dev
```

The app starts on `http://localhost:5173`. During development, Vite proxies
any request to `/api/*` to `http://localhost:5000` (configured in
`vite.config.js`), so the contact form works without extra setup.

## 3. Customize the content

Everything text-based — your name, role, bio, skills, projects, experience,
social links — lives in one file: `client/src/data/portfolioData.js`. Update
that file and the whole site updates automatically.

## 4. Build for production

```bash
cd client
npm run build
```

This outputs static files to `client/dist`, which you can deploy to Vercel,
Netlify, or serve from the Express server itself. Deploy `server/` to any
Node host (Render, Railway, Fly.io, an EC2 box, etc.) and set the same
environment variables there, plus `CLIENT_URL` pointing at your deployed
frontend URL (for CORS).

## Features

- Fully responsive layout (mobile, tablet, desktop)
- Animated hero with a typewriter code effect
- Scroll-reveal animations throughout (Framer Motion)
- Accessible contact form with client + server-side validation
- Contact form emails you directly via Nodemailer (SMTP)
- Optional MongoDB persistence of every message received
- Rate limiting and basic hardening (helmet, CORS, input validation) on the API
- Reduced-motion support for users who prefer less animation
