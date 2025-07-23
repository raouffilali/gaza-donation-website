# Project Report: Olama Setif Website

## Overview

This project is a fully responsive, Arabic/RTL, mobile-friendly landing page for a non-profit organization supporting Gaza. It includes robust donation functionality, a Gaza situation media section, and a clean, unified design.

## Features

### 1. **Landing Page**

- Fully Arabic/RTL layout.
- Mobile-friendly design.

### 2. **Donation Functionality**

- Integrated Chargily Pay for secure donations.
- Predefined and custom donation amounts.
- Validation for minimum donation amount.
- Success and failure redirects.

### 3. **Contact Form**

- Built with FormBold.
- Google reCAPTCHA v3 integration for spam protection.
- Validation for required fields.

### 4. **Media Section**

- GazaSituationSection with images, videos, and statistics.
- Hero section with animated background images.

### 5. **Performance Optimizations**

- Optimized layout with proper width inheritance.
- Tailwind CSS for efficient styling.

### 6. **Security**

- Sensitive keys stored in `.env` file.
- reCAPTCHA v3 for donation and contact forms.

## Technical Details

### **Tech Stack**

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Payment Integration**: Chargily Pay
- **Form Handling**: FormBold
- **Spam Protection**: Google reCAPTCHA v3

### **Key Files**

- `src/App.tsx`: Main application file.
- `src/components/`: Contains all UI components.
- `.env`: Stores sensitive keys.
- `tailwind.config.js`: Tailwind CSS configuration.

### **CSS Enhancements**

- Added `box-sizing: border-box` for consistent layout.
- Ensured `overflow-x-hidden` to prevent horizontal scrolling.

## Pending Tasks

- None for the moment, if there are any new changes contact me

## Conclusion

The website is now fully functional, secure, and visually impactful, meeting all user requirements. It is optimized for performance and provides a seamless user experience.
