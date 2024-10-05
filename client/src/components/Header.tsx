// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-sm absolute top-0 left-0 right-0">
            <Link href="/" className="text-xl font-bold">Find My Tickets</Link>
            <nav>
                <Link href="/events" className="mx-2">Events</Link>
                <Link href="/login" className="mx-2">Login</Link>
            </nav>
        </header>
    );
};

export default Header;
