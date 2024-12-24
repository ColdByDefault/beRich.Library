'use client';

import Link from 'next/link';
import navItems from '@utils/SidebarNav';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const NavItem = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full 
      p-2 text-sm font-medium rounded-lg ${
        isOpen ? 'text-white' : 'text-gray-400 hover:bg-blue-800 hover:text-white'
      }`}
      >
        {title}
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      {isOpen && items && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <div key={index}>
              {item.items ? (
                <NavItem title={item.title} items={item.items} defaultOpen={false} />
              ) : (
                <Link href={item.href}>
                  <p className="block p-2 text-sm text-gray-400 hover:text-white">{item.title}</p>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function SidebarNav() {
  return (
    <nav className="w-64 p-4 border-r border-gray-700 bg-transparent h-screen overflow-y-auto">
      <div className='border-b border-gray-700 mb-4 pb-4'>
        <Link href="/docs">
          <span className='text-blue-300 text-xl font-bold rounded-full
          hover:text-black hover:bg-blue-400 p-1'>ALL DOCS
          </span>
        </Link>
      </div>
      <div className="space-y-6">
        {navItems.map((section, index) => (
          <div key={index}>
            <h2 className="mb-4 mt-2 text-lg font-semibold text-white">{section.section}</h2>
            {section.items.map((item, subIndex) => (
              <div className='border-b-2 border-gray-700 mb-4 pb-4'>
                <NavItem
                key={subIndex}
                title={item.title}
                items={item.items}
                defaultOpen={index === 0 && subIndex === 0}
              />
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
