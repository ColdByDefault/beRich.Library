'use client';

import React, { useState, useEffect } from 'react';
/* import Link from 'next/link'; */

export default function CookiesBanner() {
    const [showCookiesBanner, setShowCookiesBanner] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setShowCookiesBanner(true);
        }
    }, []);

/*     const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowCookiesBanner(false);
    }; */

    if (!showCookiesBanner) {
        return null;
    }

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-400 p-4 rounded-lg text-center shadow-md"
            aria-live="assertive">
            <div>
                This website DOES NOT use cookies to enhance your experience.{/* Learn more in our{' '}
                <Link href="/privacy-policy" className="underline text-blue-600">
                    Privacy Policy
                </Link>. */}
            </div>
{/*             <button
                onClick={handleAccept}
                className="mt-2 bg-black text-white px-4 py-2 rounded"
                aria-label="Accept cookies">
                Accept
            </button> */}
        </div>
    );
}
