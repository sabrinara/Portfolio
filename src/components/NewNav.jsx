// NewNav.jsx
import  { useState } from 'react';

const NewNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <a href="/">Logo</a>
                </div>

                {/* Hamburger Menu Button */}
             <div className='relative'>
             <button 
                    onClick={toggleMenu} 
                    className="text-white lg:hidden flex items-center px-3 py-2 border rounded focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>

                {/* Navbar Links */}
                <div className={`flex flex-col items-center ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-blue-600`}>
                    <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Home</a>
                    <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">About</a>
                    <a href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Services</a>
                    <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
                </div>
             </div>
            </div>
        </nav>
    );
};

export default NewNav;
