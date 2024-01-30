import React from 'react';


interface LogoProps {
    src: string;
    alt?: string;
    height?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', height = '50px' }) => {

    const logoSrc = '/logo.png'; 

    return <img src={logoSrc} alt={alt} style={{ height }} />;
};

export default Logo;
