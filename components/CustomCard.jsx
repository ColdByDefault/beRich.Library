import React from 'react';
import Image from 'next/image';

const Card = ({ title, subtitle, description, image, buttonLabel }) => {
    return (
        <div className="flex flex-col justify-center items-center
        rounded-lg p-2 max-w-sm md:max-w-md bg-black backdrop-filter backdrop-blur-lg bg-opacity-20
        shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
            {image && (
                <Image src={image}
                    alt={title}
                    width={300}
                    height={100}
                    className="object-cover rounded-lg mb-3"/>
            )}
            <p className="text-gray-700 text-sm mb-4">{description}</p>
            {buttonLabel && (
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full 
                hover:from-blue-600 hover:to-blue-800 focus:ring focus:ring-blue-300">     
                {buttonLabel}
                </button>
            )}
        </div>
    );
};

export default Card;