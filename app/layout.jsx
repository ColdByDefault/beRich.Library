/* Copyright © [ColdByDefault] [AnotherProject]™.  
All Rights Reserved.

This project, "Portfolio & Lab" is the main project of many:  
- Official Domain: https://www.coldbydefault.com  

Protected under copyright law. No part of this project, including but not limited to code, assets, designs, and documentation, may be reproduced, distributed, or used in any form without explicit prior written permission from the owner.

For inquiries, please contact the me through the official website:  
https://linktr.ee/ColdByDefault

Unauthorized use, modification, or redistribution of any part of this project is strictly prohibited and will be subject to legal action.

**Owner**: [ColdByDefault]  
**Year**: [2024]  */
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