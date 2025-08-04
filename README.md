# # Harmony TV

A modern live television streaming platform built with Next.js, featuring language selection and terms acceptance flow.

## Features

- **Language Selection**: Support for English and French (with other languages grayed out)
- **Terms Acceptance**: Legal disclaimer and terms agreement flow
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Black grid background with smooth animations using Framer Motion
- **Error Handling**: Dedicated error page for troubleshooting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app/page.tsx` - Main homepage with language selection and terms flow
- `/app/error/page.tsx` - Error page for troubleshooting
- `/components/preloader.tsx` - Loading animation component
- `/components/footer.tsx` - Footer component

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Legal Notice

This streaming platform requires users to have valid subscriptions for all television channels. Users are responsible for ensuring their access rights and compliance with applicable laws.