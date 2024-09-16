import React from 'react';
import AppComponents from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Not Found - Candra Project",
    description: "The Page Not Found!",
};

function NotFound() {
    return (
        <div>
            <div className="w-full h-screen text-txt-0 bg-bg-1 flex justify-center items-center">
                <h1 className="inline-block mr-3 sm:mr-5 pr-3 sm:pr-6 text-2xl sm:text-4xl font-semibold leading-none border-r border-solid border-bg-0 dark:border-txt-0">404</h1>
                <div className="inline-block">
                    <h2 className="text-sm sm:text-lg font-normal leading-none">This page could not be found.</h2>
                </div>
            </div>
            <AppComponents.Navbar />
            <AppComponents.Footer />
        </div>
    );
}

export default NotFound;