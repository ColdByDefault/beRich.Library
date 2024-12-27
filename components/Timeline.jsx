import React from 'react';
import Card from '@components/CustomCard';

const Timeline = ({ events }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center w-full overflow-x-auto space-y-6 md:space-y-0 md:space-x-8">
            {events.map((event, index) => (
                <div key={index} className="flex flex-col items-center md:items-start">
                    {/* Timeline Marker */}
                    <div className="flex items-center mb-4">
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg text-white mb-2 md:mb-0"
                            style={{ backgroundColor: event.color }}>
                            <i className={`${event.icon} text-lg`}></i>
                        </div>
                        {index < events.length - 1 && (
                            <div className="hidden md:block w-12 h-1 bg-gray-300 mx-4"></div>
                        )}
                    </div>

                    {/* Card Component */}
                    <Card
                        title={event.status}
                        subtitle={event.date}
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        image={event.image}
                        buttonLabel="Read More"
                    />
                </div>
            ))}
        </div>
    );
};

export default Timeline;
