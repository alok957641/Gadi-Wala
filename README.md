<div align="center">

# 🚗 Gadi Wala — Car Rental Platform

**A modern, fully responsive car rental website built with React, Tailwind CSS & Framer Motion**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-4f46e5?style=for-the-badge)](https://gadi-wala.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/📦_GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/alok957641/Gadi-Wala)

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-black?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 📖 About The Project

**Gadi Wala** is a fully responsive, modern, and feature-rich car rental website built with **React**, **Tailwind CSS**, and **Framer Motion**.

The goal of this platform is to give users a smooth, visually appealing, and fast experience so they can easily browse cars, view their details, and book them. The project follows a clean structure with **Dark/Light Mode**, smooth animations, and modular, reusable components.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Component Breakdown](#-component-breakdown)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact & Support](#-contact--support)

---

## ✨ Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 🌓 **Dark/Light Mode** | Toggle theme based on user preference (with proper state management) |
| 2 | 🚙 **Car Listings** | Multiple cars with high-quality images, prices, ratings, and specifications |
| 3 | 📱 **Fully Responsive** | Mobile-first approach, perfect fit on every screen size (320px to 4K) |
| 4 | ✨ **Smooth Animations** | Page transitions and hover effects powered by Framer Motion |
| 5 | 🧭 **Navigation Bar** | Sticky navbar with logo, nav links, and a theme toggle button |
| 6 | 🏠 **Hero Section** | Catchy headline, subtext, and a strong Call-to-Action button |
| 7 | 📝 **About Section** | The company's story, mission, and key USPs (Unique Selling Points) |
| 8 | 🛠️ **Services Section** | Highlights services like 24/7 support, affordable rates, etc. |
| 9 | ⭐ **Reviews/Testimonials** | Real customer feedback and ratings shown in a carousel |
| 10 | 📞 **Call to Action** | Prominent CTA button with a gradient effect for bookings |
| 11 | 👣 **Footer** | Social media links, quick links, and copyright information |
| 12 | ⚡ **Performance** | Fast loading and Hot Module Replacement (HMR) thanks to Vite |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | v19.0.0 | Frontend library for building UI components |
| **Vite** | v6.2.0 | Next-gen build tool (fast dev server & bundling) |
| **Tailwind CSS** | v4.0.0 | Utility-first CSS framework for styling |
| **Framer Motion** | v12.4.7 | Animation library for smooth UI transitions |
| **React Icons** | v5.5.0 | Popular icon pack (FontAwesome, Material, etc.) |
| **PostCSS** | v8.5.0 | CSS transformer for Tailwind |
| **Netlify** | — | Hosting & continuous deployment platform |

---

## 📁 Project Structure

```
Gadi-Wala/
│
├── public/
│   └── assets/                    # Static images, favicon, etc.
│
├── src/
│   ├── Components/
│   │   ├── About/
│   │   │   └── About.jsx          # About section component
│   │   │
│   │   ├── Calltoaction/
│   │   │   └── Calltoaction.jsx   # CTA button with gradient & animation
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx         # Footer with links & social icons
│   │   │
│   │   ├── Home/
│   │   │   └── Home.jsx           # Hero section with heading & CTA
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx         # Navigation + Dark/Light toggle logic
│   │   │
│   │   ├── Our-Cars/
│   │   │   └── Our-Cars.jsx       # Car listing cards (data mapping)
│   │   │
│   │   ├── Review/
│   │   │   └── Review.jsx         # Customer testimonial cards
│   │   │
│   │   └── Services/
│   │       └── Services.jsx       # Services grid section
│   │
│   ├── App.jsx                    # Main root component (Theme provider wrapper)
│   ├── App.css                    # Component-level styles (if any)
│   ├── index.css                  # Global styles + Tailwind directives
│   └── main.jsx                   # Application entry point (ReactDOM render)
│
├── .gitignore                     # Git ignore rules (node_modules, dist, etc.)
├── index.html                     # Base HTML template
├── package.json                   # Dependencies list & npm scripts
├── package-lock.json              # Lock file for exact dependency versions
├── postcss.config.js              # PostCSS configuration (Tailwind plugin)
├── tailwind.config.js             # Tailwind CSS configuration (content paths)
├── vite.config.js                 # Vite configuration (React plugin)
└── README.md                      # Project documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (Node Package Manager) or **yarn**

### Installation

**Step 1 — Clone the repository**

```bash
git clone https://github.com/alok957641/Gadi-Wala.git
cd Gadi-Wala
```

**Step 2 — Install dependencies**

```bash
npm install
# or
yarn install
```

**Step 3 — Start the development server**

```bash
npm run dev
```

🟢 The server will start at `http://localhost:5173`.

**Step 4 — Create a production build**

```bash
npm run build
```

📦 An optimized build will be generated in the `dist/` folder.

**Step 5 — Preview the build**

```bash
npm run preview
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server (HMR enabled) |
| `npm run build` | Builds the app for production (minified & optimized) |
| `npm run preview` | Locally previews the production build |

---

## 🧩 Component Breakdown

| Component | File Path | What It Does |
|-----------|-----------|---------------|
| **About** | `Components/About/About.jsx` | Showcases the brand's story, mission, and key highlights |
| **Calltoaction** | `Components/Calltoaction/Calltoaction.jsx` | An attractive gradient button that sends users to the booking page |
| **Footer** | `Components/Footer/Footer.jsx` | Copyright text, quick links, and social media icons |
| **Home** | `Components/Home/Home.jsx` | Hero section: main heading, sub-text, and CTA button layout |
| **Navbar** | `Components/Navbar/Navbar.jsx` | Sticky navigation bar with logo, nav items, and the sun/moon theme toggle |
| **Our-Cars** | `Components/Our-Cars/Our-Cars.jsx` | Maps over a car data array to display cards — image, name, price, rating |
| **Review** | `Components/Review/Review.jsx` | Displays customer reviews with star ratings and comments |
| **Services** | `Components/Services/Services.jsx` | Services grid (24/7 Support, Affordable, Clean Cars) with icons |
| **App** | `App.jsx` | Wraps all components and provides the Theme Context/State |
| **main** | `main.jsx` | Uses `ReactDOM.createRoot` to render the App into the DOM |

---

## 🎨 Customization Guide

- **Change theme colors** → Edit `tailwind.config.js` and `index.css`
- **Add a new car** → Add a new object to the `carsData` array in `src/Components/Our-Cars/Our-Cars.jsx`
- **Change text content** → Edit text directly in the relevant component (e.g., `Home.jsx`, `About.jsx`)
- **Modify animations** → Tweak the Framer Motion `variants` objects inside each component

---

## 🚢 Deployment (on Netlify)

1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com)
3. Click **"Add new site" → "Import an existing project"**
4. Select your GitHub repository
5. Enter the following build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"** 🚀

⚡ Netlify automatically triggers a new deployment on every `git push`.

---

## 🤝 Contributing

If you'd like to contribute to this project:

1. **Fork** the repository
2. Create a new branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License**. You're free to use, modify, and distribute it.

---

## 📞 Contact & Support

- **Project Link:** [github.com/alok957641/Gadi-Wala](https://github.com/alok957641/Gadi-Wala)
- **Live Demo:** [gadi-wala.netlify.app](https://gadi-wala.netlify.app/)
- **Author:** Alok Kumar

---

<div align="center">

### ⭐ If you like this project, don't forget to Star it on GitHub!

**"Drive Safe, Rent Easy with Gadi Wala!"** 🚗💨

</div>
