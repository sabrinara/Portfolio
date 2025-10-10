"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class" // Adds "class" (dark or light) on <html>
      defaultTheme="system" // Can be "light" | "dark" | "system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
