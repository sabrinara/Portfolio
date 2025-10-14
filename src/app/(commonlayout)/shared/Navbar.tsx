"use client";

import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { MoreHorizontalIcon } from "lucide-react";
import WeatherWidget from "./WeatherWidget";
import { ModeToggle } from "./ModeToggle";

const navItems = [
    { name: "About", href: "#" },
    { name: "Experience", href: "#expericence" },
    { name: "Projects", href: "#project" },
];

const Navbar = () => {
    const [activeButton, setActiveButton] = useState('#');

    const handleClick = (button: SetStateAction<string>) => {
        setActiveButton(button);
    };

    // // Track hash changes to highlight the active nav item
    // useEffect(() => {
    //     const handleHashChange = () => {
    //         setActiveHash(window.location.hash || "#");
    //     };

    //     // set initial value
    //     handleHashChange();

    //     window.addEventListener("hashchange", handleHashChange);
    //     return () => window.removeEventListener("hashchange", handleHashChange);
    // }, []);

    return (
        <nav className="w-full flex justify-between items-center py-6 px-6 md:px-12 bg-transparent md:bg-transparent backdrop-blur-md md:backdrop-blur-0">
            {/* Left Side */}
            {/* <NavigationMenu> */}
            {/* <NavigationMenuList className="flex flex-col justify-center items-start  gap-6"> */}
            <div className="flex flex-col justify-center items-start  gap-6">
                {navItems.map((item) => (
                    // <NavigationMenuItem key={item.href}>
                    //     <NavigationMenuLink asChild>
                  <Link
  key={item.href}
  href={item.href}
  onClick={() => handleClick(item.href)}  // 👈 this line updates activeButton
  className={`relative text-sm font-medium tracking-wide transition-colors duration-300
      ${activeButton === item.href ? "text-white" : "text-gray-400 hover:text-white"}`}
>
                        <div className="flex flex-row items-center gap-2 relative">
                            <span
                                className={`h-[2px] rounded-full transition-all duration-300
                                             ${activeButton === item.href
                                        ? "w-20 bg-white"
                                        : "w-12 bg-gray-400 hover:w-20 hover:bg-white"}
                                             `}
                            />
                            <h1
                                className={`transition-all duration-300
                                            ${activeButton === item.href ? "text-lg" : "hover:text-lg"}
                                            `}
                            >
                                {item.name}
                            </h1>
                        </div>
                    </Link>


                    //     </NavigationMenuLink>
                    // </NavigationMenuItem>
                ))}
            </div>
            {/* </NavigationMenuList>
            </NavigationMenu> */}

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                    <WeatherWidget />
                    <ModeToggle />
                </div>

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
                                <Link href={item.href}>{item.name}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
