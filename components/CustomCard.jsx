import React from 'react';
import Image from 'next/image';

const Card = ({ title, subtitle, description, image, buttonLabel }) => {
  return (
    <div className="flex flex-col items-center justify-center 
    bg-white rounded-lg shadow-md p-4 w-full h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
      {image && (
        <img
          src={image}
          alt={title}
          className="object-cover rounded-md mb-3 bg-[length:200px_100px]"
        />
      )}
      <p className="text-gray-800 text-sm mb-4">{description}</p>
      {buttonLabel && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Card;
