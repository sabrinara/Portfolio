"use client";
import Link from "next/link";
import Navbar from "./Navbar";

const MobileNavbar = () => {


    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-card shadow-sm">
            <div className="flex justify-between items-center px-4 py-2 max-w-6xl mx-auto">
                <h1 className="text-xl font-semibold tracking-wide text-text">
                   <Link href="#" >Portfolio</Link>
                </h1>
                <div>
                    <Navbar />
                </div>
            </div>
        </div>

    );
};

export default MobileNavbar;
