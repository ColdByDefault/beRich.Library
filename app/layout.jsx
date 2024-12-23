import React from 'react';
import '@styles/global.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
import CookiesBanner from '@components/CookiesBanner';
import Footer from '@components/Footer';

export const metadata = {
    title: "beRich.Library",
    description: "Digital Library for developers",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="de">
            <body>
                <Provider>
                <div className="absolute top-0 left-0
                right-0 h-screen w-full">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                    <Navbar />
                    <main>
                        {children}
                        <Footer />
                    </main>
                    <CookiesBanner /> {/* Add the CookiesBanner here */}
                    
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
