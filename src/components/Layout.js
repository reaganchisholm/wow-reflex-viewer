import React from 'react';

export const Layout = ({ children }) => {
    return (
        <div className="relative bg-gray-800 overflow-hidden min-h-screen">
            <div className="relative pt-24 pb-24 sm:pb-24 min-h-screen flex items-center justify-center">
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}