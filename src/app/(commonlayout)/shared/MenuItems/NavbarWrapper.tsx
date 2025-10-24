// src/app/(commonlayout)/shared/MenuItems/NavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import CommonNavbar from "./CommonNavbar";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const hideNavbar = pathname === "/";

  return !hideNavbar ? <CommonNavbar /> : null;
};

export default NavbarWrapper;
