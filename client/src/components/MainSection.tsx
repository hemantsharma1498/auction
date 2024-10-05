// src/components/MainSection.tsx
import React, { ReactNode } from 'react';

interface Feature {
    icon: ReactNode;
    text: string;
}

interface MainSectionProps {
    title: string;
    subtitle: string;
    features: Feature[];
    featureClassName?: string;
}

const MainSection = ({
    title,
    subtitle,
    features,
    featureClassName = "mt-8 pt-8" }: MainSectionProps) => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">{subtitle}</p>
            <div className={`flex justify-center space-x-8 w-full ${featureClassName}`}>
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-12 h-12 mb-2">{feature.icon}</div>
                        <span className="text-center">{feature.text}</span>
                    </div>
                ))}
            </div>
        </main >
    );
};

export default MainSection;
