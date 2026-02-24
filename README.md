<div align="center">

<br/>

```
██████╗ ██████╗  █████╗  ██████╗██╗   ██╗ █████╗  █████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗██╔══██╗
██████╔╝██████╔╝███████║██║  ███╗╚████╔╝ ███████║███████║
██╔═══╝ ██╔══██╗██╔══██║██║   ██║ ╚██╔╝  ██╔══██║██╔══██║
██║     ██║  ██║██║  ██║╚██████╔╝  ██║   ██║  ██║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
                                              2 K 2 6
```

### **National Level Technical Fiesta**
#### *Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded*

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<br/>

[![Website](https://img.shields.io/badge/Live-pragyaa.org-FF6B35?style=flat-square&logo=vercel)](https://pragyaa.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Overview

**PRAGYAA 2K26** is the official web portal for the national-level technical fiesta hosted by **SGGSIE&T, Nanded**. The platform serves as the central hub for event information, registrations, schedules, and participant engagement — bringing together students, innovators, and industry experts under one digital roof.

The website is built with a focus on immersive user experience, featuring cinematic animations, 3D interactive elements, and a sleek dark-themed aesthetic that reflects the energy of the fest.

---

## Frontend Highlights

### Visual Experience

The interface is crafted to feel alive — from the first frame to the last scroll:

- **Video Intro Loader** — A full-screen pragyaa intro video plays on first visit, creating an immersive entry experience
- **3D Interactive Cursor** — Custom Three.js powered cursor that reacts to user movement
- **Letter Glitch Effects** — Cyberpunk-style text animations for section headings
- **Animated Grid Background** — Dynamic grid lines that add depth to the layout
- **Smooth Page Transitions** — Framer Motion driven animations between sections
- **Custom Countdown Timer** — Live countdown to event day
- **Starfield Background** — Particle-based hero background for the home screen

### Design System

| Element | Details |
|---|---|
| **Color Palette** | Dark base with neon accents |
| **Typography** | Custom display fonts with glitch & glow effects |
| **Layout** | Dual sidebar navigation (Left + Right) |
| **Responsiveness** | Mobile-first with Tailwind CSS |
| **Buttons** | Custom `GamingButton` component with hover effects |

---

## Tech Stack

### Frontend

```
React 19          —  UI Framework
Vite 7            —  Build tool & dev server
Tailwind CSS 4    —  Utility-first styling
Framer Motion     —  Animation library
Three.js          —  3D graphics & cursor effects
Lucide React      —  Icon system
React Countdown   —  Event countdown timer
```

### Backend

```
Node.js           —  Runtime environment
Express.js        —  Web server framework
MongoDB           —  NoSQL database
Mongoose          —  ODM for MongoDB
```

### DevOps & Tooling

```
Vercel            —  Frontend deployment
ESLint 9          —  Code linting
Terser            —  Production minification
Code Splitting    —  Lazy-loaded pages for performance
```

---

## Events at PRAGYAA 2K26

The fest hosts a diverse range of technical and cultural events, each with detailed rules, registration links, and schedules:

| Category | Events |
|---|---|
| **Technical** | Code Clash, CAD War, ChemTrek, Robotics |
| **Business & Strategy** | E-Venture (Hackathon), Marketing Mania, IPL Auction |
| **Cultural & Creative** | Cenfest, Photography, Art competitions |
| **Knowledge** | Workshops, Guest Lectures, Seminars |
| **Special** | Junior Scientists (for school students) |

Each event includes a downloadable rulebook PDF, registration link, and detailed description page.

---

## Project Architecture

```
pragyaa/
├── frontend/                  # React SPA (Vite)
│   └── src/
│       ├── Pages/             # Home, 404, etc.
│       ├── Events/            # Event listing, cards & data
│       ├── components/        # Shared UI components
│       ├── Schedule/          # Event schedule
│       ├── EVenture/          # Hackathon section
│       ├── About/             # About the fest
│       ├── Team/              # Core team
│       ├── Gallery/           # Photo gallery
│       ├── Sponsors/          # Sponsors showcase
│       ├── Guest/             # Guest speakers
│       ├── FAQ/               # FAQs
│       ├── WorkShop/          # Workshop details
│       ├── SpecialEvent/      # Junior Scientists
│       ├── Curser/            # Custom cursor (Three.js)
│       └── Footer/            # Footer component
│
└── server/                    # Node.js backend
    ├── config/                # Environment config
    ├── db/                    # Database connection
    └── route/                 # API endpoints
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or Atlas)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm start
```

---

## Performance Features

- **Lazy Loading** — All pages are dynamically imported, reducing initial bundle size
- **Chunk Splitting** — Separate vendor chunks for React and Three.js
- **Session Storage** — Video intro plays only once per session
- **Minification** — Terser removes all console logs and debugger statements in production

---

## About the Fest

> *"Technology for Societal Welfare"*

PRAGYAA is an annual national-level technical festival that brings together the brightest minds from engineering colleges across India. The fest is a platform for students to:

- Showcase technical skills in competitive environments
- Connect with industry professionals and researchers
- Learn through hands-on workshops and expert sessions
- Collaborate on innovative solutions to real-world problems

**Organizing Body:** Shri Guru Gobind Singhji Institute of Engineering & Technology (SGGSIE&T), Nanded, Maharashtra.

---

<div align="center">

**Built with passion by the PRAGYAA 2K26 Web Team**

*SGGSIE&T, Nanded — Where Innovation Meets Excellence*

</div>
