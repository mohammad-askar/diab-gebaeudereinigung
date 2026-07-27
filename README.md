# Diab Gebäudereinigung

A modern, responsive, and multilingual business website for **Diab Gebäudereinigung**, a professional cleaning company based in Trier, Germany.

The website presents the company, its cleaning services, contact information, legal notice, and privacy policy in German, English, and Arabic.

## Features

- Responsive design for mobile, tablet, and desktop
- Multilingual content in German, English, and Arabic
- Right-to-left layout support for Arabic
- Hotel and building cleaning service pages
- Company information and team presentation
- Direct telephone and email contact options
- External Google Maps link
- Accessible navigation and semantic page structure
- Optimized images using `next/image`
- Locally optimized fonts using `next/font`
- SEO metadata for all main pages
- Custom not-found page
- Legal notice and privacy policy pages
- Vercel preview deployments for pull requests

## Technology Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for internationalization
- [Vitest](https://vitest.dev/) for testing
- [Vercel](https://vercel.com/) for deployment

## Supported Languages

| Language | Locale | Direction     |
| -------- | ------ | ------------- |
| German   | `de`   | Left to right |
| English  | `en`   | Left to right |
| Arabic   | `ar`   | Right to left |

German is the primary language of the website.

## Main Pages

| Route             | Description         |
| ----------------- | ------------------- |
| `/de`             | German homepage     |
| `/de/leistungen`  | Cleaning services   |
| `/de/ueber-uns`   | Company information |
| `/de/kontakt`     | Contact information |
| `/de/impressum`   | Legal notice        |
| `/de/datenschutz` | Privacy policy      |

The same pages are also available under the `/en` and `/ar` locale prefixes.

## Getting Started

### Requirements

Make sure the following tools are installed:

- Node.js 20 or newer
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/mohammad-askar/diab-gebaeudereinigung.git
```
