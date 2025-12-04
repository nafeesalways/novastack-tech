# 🚀 NovaStack Technologies - Corporate Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 📋 Overview

**NovaStack Technologies** s a fully responsive, multi-page corporate website designed for a fictional software company, showcasing modern UI/UX principles, component-based React architecture, and clean coding practices using React and Tailwind CSS.

The application features a modern dark-themed aesthetic with glassmorphism effects, interactive hover states, and seamless client-side routing.

---

## 🔗 Live Demo
**[CLICK HERE TO VIEW LIVE PROJECT](https://novastack-tech.vercel.app/)**  


---

## ✨ Key Features

### 1. 🏠 **Home Page**
- **Hero Section:** Animated background blobs, gradient typography, and clear Call-to-Actions (CTAs).
- **Services:** Grid layout highlighting core company offerings.
- **Testimonials:** Client feedback section with professional layout.
- **Stats:** Key performance indicators displayed visually.

### 2. 👥 **About Page**
- **Company Story:** Narrative section with visual media integration.
- **Mission & Vision:** Card-based layout defining company values.
- **Team Section:** Interactive profile cards with hover effects and social links.

### 3. 📞 **Contact Page**
- **Contact Form:** Functional state management with simulated API submission and success feedback.
- **Validation:** Required field handling and visual feedback.
- **Information:** Layout containing address, email, and phone details.

### 4. 🎨 **UI/UX Elements**
- **Floating Navbar:** A sticky, rounded, glassmorphism navigation bar for a modern app-like feel.
- **Responsive Design:** Mobile-first approach with a custom hamburger menu drawer.
- **Reusable Components:** Centralized `Button` component supporting multiple variants (primary, glass, outline) and loading states.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) (Vite)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel

---

## 📂 Project Structure

```bash
src/
├── assets/             # Static images and SVGs
├── components/         # Reusable UI components
│   ├── home/           # Components specific to Home page (Hero, etc.)
│   └── shared/         # Global components (Navbar, Footer, Button)
├── layout/             # Layout wrappers (MainLayout)
├── pages/              # Page views (Home, About, Contact)
├── router/             # Router configuration
├── App.jsx             # Main application entry
└── main.jsx            # DOM rendering

---
## Clone the repository
git clone https://github.com/your-username/novastack-tech.git
cd novastack-tech

--
## Install dependencies
npm install

--
## Deployment
npm run dev