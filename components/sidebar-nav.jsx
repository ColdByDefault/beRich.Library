'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import navItems from '@utils/SidebarNav';

const NavItem = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-1">
      <button onClick={() => setIsOpen(!isOpen)}
      className={`flex items-center justify-between w-full 
      p-2 text-sm font-medium rounded-lg ${
      isOpen ? 'text-white' : 'text-gray-400 hover:bg-blue-800 hover:text-white'
        }`}>
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
                // Render nested NavItem for items with sub-items
                <NavItem
                  title={item.title}
                  items={item.items}
                  defaultOpen={false}/>
              ) : (
                // Render link for items without sub-items
                <a href={item.href}
                  className="block p-2 text-sm text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}>
                  {item.title}
                </a>
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
      <div className="space-y-6">
        {navItems.map((section, index) => (
          <div key={index}>
            <h2 className="mb-4 text-lg font-semibold text-white">{section.section}</h2>
            {section.items.map((item, subIndex) => (
              <NavItem
                key={subIndex}
                title={item.title}
                items={item.items}
                defaultOpen={index === 0 && subIndex === 0}
              />
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}

