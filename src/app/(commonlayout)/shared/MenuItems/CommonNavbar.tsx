"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import WeatherWidget from "./WeatherWidget";

const navItems = [
  { name: "Intro", href: "/" },
  { name: "Experiences", href: "/experiences" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact Me", href: "/contact-me" },
  // { name: "Blogs", href: "/blogs" },
];

const CommonNavbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border mx-auto px-2 pt-2 lg:w-[1024px]">
      <div className="flex justify-between items-center px-4 md:px-0 py-3">
        {/* 🌤 Left side: Weather */}
     <Link href="/">
        <div className="flex items-center gap-2 text-hovertext md:text-2xl">
          Sabrina Rashid
        </div>
     </Link>

        {/* 🧭 Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-text font-semibold"
                  : "text-muted-foreground hover:text-hovertext"
              }`}
            >
              {item.name}
            </Link>
          ))}
         <div className="flex justify-between md:gap-1 ">
             <WeatherWidget />
          <ModeToggle />
         </div>
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-secondary/10 transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card animate-fadeIn ">
          <div className="flex flex-col gap-2 p-4">
             <div className="flex justify-between mt-2">
                <WeatherWidget/>
              <ModeToggle />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-medium px-3 py-2 rounded-md transition ${
                  pathname === item.href
                    ? "text-text bg-secondary/10"
                    : "text-muted-foreground hover:text-hovertext hover:bg-secondary/10"
                }`}
              >
                {item.name}
              </Link>
            ))}

           
          </div>
        </div>
      )}
    </nav>
  );
};

export default CommonNavbar;
