// Created by ColdByDefault on 23/12/2024
// COPYRIGHTS 2024 ColdByDefault. All rights reserved.
// NOT ALLOWED TO BE SHARED, COPIED, OR MODIFIED WITHOUT PERMISSION
// AnotherProject beRich v3.2.1
// more info: https://www.coldbydefault.com
// See Issues

import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
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

                    <Navbar />
                    <main>
                        {children}
                        <Footer />
                    </main>
                    <CookiesBanner /> {/* Add the CookiesBanner here */}  
                </Provider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
