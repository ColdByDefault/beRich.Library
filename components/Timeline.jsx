'use client';
import React, { useEffect } from 'react';
import Card from '@components/CustomCard';
import '@styles/timeline.css';

const Timeline = ({ events }) => {
  useEffect(() => {
    const handleScroll = () => {
      const timelineCards = document.querySelectorAll('.timeline-card');
      timelineCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen w-full pb-12 bg-white">
      {/* Vertical Line */}
      <div className="vertical-line absolute w-1 bg-gray-300 h-full left-1/2 
      transform -translate-x-1/2"></div>
      {events.map((event, index) => (
        <div key={index}
          className={`relative flex w-full max-w-4xl my-6 timeline-card px-24 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}>
          {/* Timeline Marker */}
          <div className="timeline-marker absolute w-10 h-10 flex items-center 
          justify-center rounded-full shadow-lg text-white z-10"
            style={{
              backgroundColor: event.color,
              left: '50%',
              transform: 'translateX(-50%)',
            }}>
            {event.icon}
          </div>
          {/* Card Component */}
          <div className="w-[280px] flex-shrink-0">
            <Card
              title={event.status}
              subtitle={event.date}
              description={event.discription}
              image={event.image}
              buttonLabel={event.label}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
