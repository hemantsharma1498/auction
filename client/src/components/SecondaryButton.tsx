
import React from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

function PrimaryButton({ children, onClick, disabled = false }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-gray-500 text-white py-2 px-4 rounded 
        hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-75 
        disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
