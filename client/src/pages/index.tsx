// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';

const HomePage = () => {
    const mainSectionProps = {
        title: "Welcome to Find My Tickets",
        subtitle: "Wanted to buy the tickets to your favourite concert, but just missed it? Have some tickets for a show that you can't attend? You've come to the right place.",
        features: [
            { icon: <ShieldCheck className="w-full h-full" />, text: "Secure Transactions" },
            { icon: <Award className="w-full h-full" />, text: "Authenticated Tickets" },
            { icon: <ThumbsUp className="w-full h-full" />, text: "100% Satisfaction" }
        ],
        featureSectionClassName: "mt-auto pb-16" // Push features further down and add more bottom padding
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <MainSection {...mainSectionProps} />
            <Footer />
        </div>
    );
};

export default HomePage;
