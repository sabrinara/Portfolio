# My Portfolio Project

## 🚀 Project Description

This is a personal portfolio project built using **Next.js**, **React**, **Tailwind CSS**, **TypeScript**, and **Bun**. It showcases my work, including various projects and experiences, and includes features like a contact form, project filtering, and dynamic content rendering.

### Key Features
- **Project Portfolio**: Displaying a list of projects with detailed views.
- **Experience Section**: Listing past work experiences with linked projects.
- **Contact Form**: Allows users to contact me via a secure SMTP-powered form.
- **Filterable Projects**: Filter projects by categories and types dynamically.
- **Responsive**: The website is mobile-first, ensuring a seamless experience across devices.

## 💻 Technologies Used
- **Next.js** (for server-side rendering and routing)
- **React** (for UI components)
- **Tailwind CSS** (for styling)
- **TypeScript** (for type safety)
- **Bun** (for fast package management and builds)
- **Nodemailer** (for sending contact emails)
- **Rate Limiter** (for preventing spam/bots in the contact form)
- **MongoDB** (for storing project and experience data)


## 🔍 Features Overview

### Filtering Projects by Category & Type
- Use the filters dropdown at the top of the Projects section to filter by **Category** and **Type** of project.
- Categories and Types are dynamically populated based on the projects in your database.

### Contact Form (SMTP Integration)
- The contact form allows users to reach out via a secure email system powered by **Nodemailer**.
- Rate limiting and SMTP verification ensure legitimate submissions.

## 📂 File Structure
```plaintext
portfolio/
├── public/
│   └── (images, icons, etc.)
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts       // API route
│   │   ├── (commonlayout)/           // shared layouts
│   │   ├── projects/                 // /projects page
│   │   ├── experiences/              // /experiences page
│   │   └── page.tsx                  // home page
│   │
│   ├── components/
│   │   ├── ui/                       // shadcn/ui generated
│   │   ├── shared/                   // buttons, section titles, reusable components
│   │   └── layout/                   // Sidebar, Navbar, Footer
│
│   ├── lib/                          // config & utilities (e.g., constants)
│
│   ├── services/                     // API services (frontend)
│   │   ├── projects.ts
│   │   └── experience.ts
│
│   ├── types/
│   │   ├── projects.ts
│   │   └── experience.ts
│
│   └── utils/                        // helper functions
│
├── styles/
│   ├── globals.css
│   └── theme.css
│
├── .env
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

