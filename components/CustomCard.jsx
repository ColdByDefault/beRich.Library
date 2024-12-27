import React from 'react';

const Card = ({ title, subtitle, description, image, buttonLabel }) => {
    return (
        <div className="rounded-lg shadow-lg p-4 max-w-sm md:max-w-md border border-gray-300 bg-white hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                />
            )}
            <p className="text-gray-700 mb-4">{description}</p>
            {buttonLabel && (
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-blue-800 focus:ring focus:ring-blue-300">
                    {buttonLabel}
                </button>
            )}
        </div>
    );
};

export default Card;