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
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <CookiesBanner /> {/* Add the CookiesBanner here */}
                    <Footer /> 
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
