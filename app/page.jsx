import React from 'react';
import Intro from '@components/Intro';
import Timeline from '@components/Timeline';
import { VscDebugStart } from "react-icons/vsc";
import { GiBubblingFlask } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";


const Home = () => {

  const events = [
    {
        status: 'Started',
        date: '18/03/2024 10:30',
        discription: 'Stand-alone version of the app built with Python and ctkinter',
        icon: <VscDebugStart />,
        color: '#9C27B0',
        image: '/assets/images/version1.png',
        label: 'View Source Code',
    },
    {
        status: 'First Deployment',
        date: '24/06/2024 14:00',
        discription: 'Deployed and hosted on PythonAnywhere',
        icon: <GiBubblingFlask />,
        color: '#673AB7',
        image: '/assets/images/version2.png',
        label: 'View Website',
    },
    {
        status: 'Next.js Version 3.0',
        date: '01/12/2024 16:15',
        discription: 'Built with Next.js, Firebase for authentication and Firestore for database',
        icon: <RiNextjsFill />,
        color: '#FF9800',
        image: '/assets/images/logoBlack.png',
    },
    {
        status: 'Next.js Version 3.2',
        date: '20/12/2024 23:44',
        discription: 'Built with Next.js, Fullstack, next-auth for authentication and MongoDB for database, deployed on Vercel',
        icon: <TbBrandNextjs />,
        color: '#607D8B',
        image: '/assets/images/logoBlack.png',
    },
];
  
  return (
      <section className='w-full'>  
        <div className="relative left-0
         w-full">
            <div className="line absolute h-[92vh]"></div>
            <div className="line absolute h-[92vh]"></div>
            <div className="line absolute h-[92vh]"></div>
        </div>
        <Intro />
        <div id='beRichHistory'>
            <Timeline events={events} />
        </div>
      </section>
    
  );
}

export default Home;