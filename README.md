# Olama Setif Website

## Overview

This project is a fully responsive, Arabic/RTL, mobile-friendly landing page for a non-profit organization supporting Gaza. It includes robust donation functionality, a Gaza situation media section, and a clean, unified design.

## Features

- **Landing Page**: Fully Arabic/RTL layout, mobile-friendly design.
- **Donation Functionality**: Integrated Chargily Pay, predefined/custom amounts, validation, success/failure redirects.
- **Contact Form**: Built with FormBold, Google reCAPTCHA v3 integration.
- **Media Section**: GazaSituationSection with images, videos, and statistics.
- **Performance Optimizations**: Removed lazy loading for critical components, optimized layout.
- **Security**: Sensitive keys stored in `.env`, reCAPTCHA v3 for forms.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Payment Integration**: Chargily Pay
- **Form Handling**: FormBold
- **Spam Protection**: Google reCAPTCHA v3

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_CHARGILY_API_KEY=<your-chargily-api-key>
VITE_CHARGILY_MODE=<test-or-live>
VITE_FORMBOLD_ENDPOINT=<your-formbold-endpoint>
VITE_RECAPTCHA_SITE_KEY=<your-recaptcha-site-key>
```

## Usage

- Navigate to the homepage to explore the sections.
- Use the donation form to contribute.
- Contact the organization using the contact form.

## License

This project is licensed under the MIT License.
