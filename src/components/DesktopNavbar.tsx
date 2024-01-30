import React from 'react';
import Logo from './Logo'; // Your Logo component
import MenuItem from './MenuItem'; // Your MenuItem component
import Button from './Button'; // Your Button component


const menuItems = [
    { href: "/about", label: "About Jada" },
    { href: "/services", label: "Services" },
    { href: "/book", label: "Book Jada" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" }
];

const DesktopNavbar: React.FC = () => {
    const handleButtonClick = () => {
        // Handle the Book Jada button click
        alert('Book Jada clicked'); // Replace with your actual click handling logic
    };

    return (
        <nav className="hidden md:flex bg-jada-cyan px-4 sm:px-6 lg:px-8 items-center justify-between h-20">
            <div className="flex items-center">
                <Logo />
                <ul className="flex space-x-8">
                {menuItems.map((item) => (
                        <MenuItem key={item.href} href={item.href} label={item.label} />
                    ))}
                </ul>
            </div>
            <Button text="Book Jada" onClick={handleButtonClick} />
        </nav>
    );
};

export default DesktopNavbar;
