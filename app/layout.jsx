import React from 'react';
import Head from 'next/head'; // Import Next.js Head for managing <head> content
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import '@styles/global.css';
import Navbar from '@components/Navbar';
import CookiesBanner from '@components/CookiesBanner';
import Footer from '@components/Footer';

export const metadata = {
    title: "beRich.Library",
    description: "Digital Library for developers",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="de">
            <Head>
                {/* Primary Meta Tags */}
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="ColdByDefault" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.ico" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content="https://berichlibrary.coldbydefault.com/assets/images/logoBlack.png" />
                <meta property="og:url" content="https://berichlibrary.coldbydefault.com" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="https://berichlibrary.coldbydefault.com/assets/images/logoBlack.png" />

                {/* Additional Meta Tags */}
                <meta name="keywords" content="digital library, developers, programming resources, coding, beRich.Library" />
                <link rel="canonical" href="https://berichlibrary.coldbydefault.com" />
                <meta httpEquiv="Content-Language" content="de/en" />
                <meta name="robots" content="index, follow" />

                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <link rel="preconnect" href="https://www.google-analytics.com" />

                {/* Add Fonts */}
            </Head>
            <body>
                <Navbar />
                <main>
                    {children}
                    <Footer />
                </main>
                <CookiesBanner />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
