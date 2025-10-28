"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Button } from "../../../../components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import WeatherWidget from "./WeatherWidget";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experiences", href: "#experiences" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
];

const SCROLL_OVERRIDE_MS = 800; // time after a click where scroll won't override active (tune this)

const Navbar = () => {
  const [activeButton, setActiveButton] = useState<string>("");
  // store last time user clicked a nav item
  const lastManualNavRef = useRef<number>(0);

  // Keep existing hash-change logic (initial load and manual hash changes)
  useEffect(() => {
    const handleHashChange = () => {
      // ensure we set to hash if present, otherwise default to #about
      const h = window.location.hash || "#about";
      setActiveButton(h);
    };

    // initialize from current hash on mount
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll-based active detection that respects recent manual clicks
useEffect(() => {
  let sections: NodeListOf<HTMLElement> = document.querySelectorAll("section[id]");

  const updateSections = () => {
    sections = document.querySelectorAll("section[id]");
  };

  const handleScroll = () => {
    const now = Date.now();
    const elapsed = now - (lastManualNavRef.current || 0);
    const allowScrollOverride = elapsed > SCROLL_OVERRIDE_MS;

    const offset = 160;
    let currentId: string | null = null;

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      if (window.scrollY >= top) currentId = section.id;
    });

    if (currentId) {
      const newActive = `#${currentId}`;
      if (allowScrollOverride) {
        setActiveButton((prev) => (prev !== newActive ? newActive : prev));
      } else if (activeButton === "") {
        setActiveButton(newActive);
      }
    }
  };

  // Observe DOM changes to update sections when API content mounts
  const observer = new MutationObserver(() => updateSections());
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial setup
  updateSections();
  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, [activeButton]);


  const handleClick = (href: string) => {
    // immediate highlight on click
    setActiveButton(href);

    // record manual navigation time so scroll handler won't override immediately
    lastManualNavRef.current = Date.now();

    // optional: update hash programmatically if you want exact control (next/link will do this)
    // window.location.hash = href;
  };

  return (
    <nav className="w-full flex justify-between md:items-start py-4 md:py-6 md:px-2 bg-transparent md:bg-transparent backdrop-blur-md md:backdrop-blur-0">
      {/* Left side links */}
      <div className="hidden md:flex flex-col justify-center items-start gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => handleClick(item.href)}
            className={`relative text-sm font-medium tracking-wide transition-colors duration-300
              ${activeButton === item.href
                ? "text-hovertext font-semibold"
                : "text-muted-foreground hover:text-hovertext"}
            `}
          >
            <div className="group flex flex-row items-center gap-2 relative">
              <span
                className={`h-[2px] rounded transition-all duration-300
                  ${activeButton === item.href
                    ? "w-24 bg-hovertext h-[4px]"
                    : "w-12 bg-muted-foreground group-hover:w-24 group-hover:bg-hovertext"}
                `}
              />
              <h1
                className={`transition-all duration-300
                  ${activeButton === item.href ? "text-lg" : "group-hover:text-lg"}
                `}
              >
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      {/* Right side menu */}
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              aria-label="Open menu"
              size="icon-sm"
              className="md:hidden"
            >
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>
              <div className="flex justify-between items-center gap-2">
                <WeatherWidget />
                <ModeToggle />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`ml-4 ${activeButton === item.href ? "text-hovertext font-medium" : ""}`}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
