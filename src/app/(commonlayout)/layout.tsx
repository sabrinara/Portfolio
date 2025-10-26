// src/app/(commonlayout)/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import NavbarWrapper from "./shared/MenuItems/NavbarWrapper";

export const metadata: Metadata = {
  title: "Sabrina Rashid",
  description:
    "An Interactive and Informative Portfolio built with Next.js, Shadcn UI, MongoDB, and a connected backend.",
};

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ Client-side wrapper handles pathname */}
          <NavbarWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
