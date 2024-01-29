import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void; // Define the type of your onClick function here
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            className="bg-purple-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
