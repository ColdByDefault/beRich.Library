import React from 'react';
import '@styles/global.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
    title: "beRich.Library",
    description: "Digital Library for developers",
}


const RootLayout = ({children}) => {
  return (
    <html lang='de'>
        <body>
            <Provider>
              <div className="main"></div>
                <Navbar />
                <main>
                  {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout