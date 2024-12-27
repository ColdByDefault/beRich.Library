import React from 'react'
import Timeline from '@components/Timeline';

const HistoryPage = () => {

    const events = [
        {
            status: 'Started',
            date: '15/10/2020 10:30',
            icon: 'pi pi-shopping-cart',
            color: '#9C27B0',
            image: '/assets/images/logoBlack.png',
        },
        {
            status: 'Developed',
            date: '15/10/2020 14:00',
            icon: 'pi pi-cog',
            color: '#673AB7',
            image: '/assets/images/logoBlack.png',
        },
        {
            status: 'Fullstack',
            date: '15/10/2020 16:15',
            icon: 'pi pi-truck',
            color: '#FF9800',
            image: '/assets/images/logoBlack.png',
        },
        {
            status: 'Next.js',
            date: '16/10/2020 10:00',
            icon: 'pi pi-check',
            color: '#607D8B',
            image: '/assets/images/logoBlack.png',
        },
    ];



  return (
    <div className="mt-12 w-full max-w-5xl">
    <Timeline events={events} />
    </div>
  )
}

export default HistoryPage