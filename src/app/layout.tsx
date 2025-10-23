import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./(commonlayout)/providers/theme-provider";
import "aos/dist/aos.css";



export const metadata: Metadata = {
  title: "Sabrina Rashid",
  description: "A Interactive and Informatic Portfolio for myself in next.js,shadcn ui, mongodb and a backend is available ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
       
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
