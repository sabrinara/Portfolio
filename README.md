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

## 🔧 Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2. **Install dependencies** using **Bun**:
    ```bash
    bun install
    ```

3. **Create an `.env` file** in the root of the project and add the following variables (use your own credentials):
    ```env
    GMAIL_USER=your-email@gmail.com
    GMAIL_PASS=your-app-password
    SITE_NAME=YourSiteName
    ```

4. **Run the development server**:
    ```bash
    bun dev
    ```

5. Visit the website on `http://localhost:3000`.

## 📝 How to Use

1. **Add New Projects**:
   - Projects are fetched from a backend (or can be manually added to MongoDB).
   - Ensure each project contains relevant information like the title, category, description, and images.
   
2. **Experience Section**:
   - You can link your experience to related projects using the `projects` array (array of project IDs).
   - Add relevant details for each experience, including a certificate URL and the projects worked on.

3. **Contact Form**:
   - Ensure you have an SMTP provider configured in the `.env` file to send emails securely (e.g., Gmail with app password).
   - You can add rate limiting and IP checks to reduce spam.

## 🔍 Features Overview

### Filtering Projects by Category & Type
- Use the filters dropdown at the top of the Projects section to filter by **Category** and **Type** of project.
- Categories and Types are dynamically populated based on the projects in your database.

### Contact Form (SMTP Integration)
- The contact form allows users to reach out via a secured email system powered by **Nodemailer**.
- Rate limiting and SMTP verification ensures legitimate submissions.

## 📂 File Structure


