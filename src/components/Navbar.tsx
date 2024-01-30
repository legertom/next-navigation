'use client';

import React, {useState } from 'react';
import Logo from './Logo'; 
import MenuItem from './MenuItem'; 
import Button from './Button';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleButtonClick = () => {
        // Handle the button click
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="flex items-center justify-between h-20 px-4 bg-jada-cyan">
            {/* Logo and Hamburger Icon */}
            <div className="flex items-center justify-between w-full md:w-auto">
                <Logo />
                <button className="text-jada-purple md:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <ul className={`flex-col md:flex-row md:flex space-x-0 md:space-x-8 absolute md:relative w-full md:w-auto bg-jada-cyan md:bg-transparent left-0 md:left-auto top-20 md:top-auto ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <MenuItem href="/about" label="About Jada" />
                <MenuItem href="/services" label="Services" />
                <MenuItem href="/book" label="Book Jada" />
                <MenuItem href="/resources" label="Resources" />
                <MenuItem href="/contact" label="Contact" />
            </ul>

            {/* Book Button */}
            <div className="hidden md:block">
                <Button text="Book Jada" onClick={handleButtonClick} />
            </div>
        </nav>
    );
};

export default Navbar;
