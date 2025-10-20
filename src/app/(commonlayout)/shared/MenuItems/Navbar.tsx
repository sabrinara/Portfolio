"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
    { name: "Experiences", href: "#expericences" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievement" },
    { name: "Blogs", href: "#blog" },
];

const Navbar = () => {
    const [activeButton, setActiveButton] = useState<string>("");

    // ✅ Set active button based on URL hash when page loads or hash changes
    useEffect(() => {
        const handleHashChange = () => {
            setActiveButton(window.location.hash || "#about"); // default section
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleClick = (href: string) => {
        setActiveButton(href);
    };

    return (
        <nav className="w-full flex justify-between items-start py-6 px-6 md:px-12 bg-transparent md:bg-transparent backdrop-blur-md md:backdrop-blur-0">
            {/* Left side links */}
            <div className="hidden md:flex flex-col justify-center items-start gap-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                        className={`relative text-sm font-medium tracking-wide transition-colors duration-300
                            ${activeButton === item.href
                                ? "text-hovertext"
                                : "text-muted-foreground hover:text-hovertext"}
                        `}
                    >
                        <div className="group flex flex-row items-center gap-2 relative">
                            <span
                                className={`h-[2px] rounded-full transition-all duration-300
                                    ${activeButton === item.href
                                        ? "w-20 bg-hovertext"
                                        : "w-12 bg-muted-foreground group-hover:w-20 group-hover:bg-hovertext"}
                                `}
                            />
                            <h1
                                className={`transition-all duration-300
                                    ${activeButton === item.href
                                        ? "text-lg"
                                        : "group-hover:text-lg"}
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
