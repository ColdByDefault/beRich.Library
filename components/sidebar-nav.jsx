'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const NavItem = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full p-2 text-sm font-medium rounded-lg ${
          isOpen ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
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
            <a
              key={index}
              href={item.href}
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
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function SidebarNav() {
  const navItems = [
    {
      title: 'Getting started',
      items: [
        { title: 'Introduction', href: '#introduction' },
        { title: 'Installation', href: '#installation' },
        { title: 'Setup', href: '#setup' },
        { title: 'Changelog', href: '#changelog' },
      ],
    },
    {
      title: 'Documents',
      items: [
        { title: 'Navigation', href: '#navigation' },
        { title: 'Structure', href: '#structure' },
      ],
    },
    {
      title: 'Components',
      items: [
        { title: 'Markup', href: '#markup' },
        { title: 'Cards', href: '#cards' },
        { title: 'Diagrams', href: '#diagrams' },
        { title: 'Filetree', href: '#filetree' },
        { title: 'Lists', href: '#lists' },
        { title: 'Maths', href: '#maths' },
        { title: 'Notes', href: '#notes' },
        { title: 'Steps', href: '#steps' },
        { title: 'Table', href: '#table' },
        { title: 'Tabs', href: '#tabs' },
      ],
    },
  ];

  return (
    <nav className="w-64 p-4 border-r border-gray-700 bg-transparent h-screen overflow-y-auto">
      <div className="space-y-6">
        {navItems.map((section, index) => (
          <div key={index}>
            <h2 className="mb-2 text-lg font-semibold text-white">{section.title}</h2>
            <NavItem
              title={section.items[0].title}
              items={section.items.slice(1)}
              defaultOpen={index === 0}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}
