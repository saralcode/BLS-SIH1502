import React from 'react';
import Link from 'next/link';

import LandingPage from './home/LandingPage';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <LandingPage />

        </div>
    );
};

export default HomePage;
