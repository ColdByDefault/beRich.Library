'use client';

import Link from 'next/link';
import navItems from '@utils/SidebarNav';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SiReadthedocs } from "react-icons/si";


const NavItem = ({ title, items, href, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-1">
      {items && items.length > 0 ? (
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
      ) : (
        <Link href={href}>
          <p
            className="block p-2 text-sm text-gray-400 rounded-lg 
          hover:bg-blue-800 hover:text-white"
          >
            {title}
          </p>
        </Link>
      )}
      {isOpen && items && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <div key={index}>
              {item.items ? (
                <NavItem title={item.title} items={item.items} href={item.href} defaultOpen={false} />
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
    <nav className="w-64 p-4 border-r border-gray-700 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30
    shadow-lg h-screen overflow-y-auto">
      <div className="mb-4 pb-4">
        <Link href="/docs">
          <div
            className="flex items-center gap-2 mb-4 mt-2 pb-2 text-lg font-semibold text-white border-b 
            border-gray-700
            hover:text-slate-400">
            <SiReadthedocs /><span>ALL DOCS </span>
          </div>
        </Link>
      </div>
      <div className="space-y-6">
        {navItems.map((section, index) => (
          <div key={`section-${index}`}>
            <h2 className="mb-4 mt-2 pb-2 text-lg font-semibold text-white border-b border-gray-700">
              {section.section}
            </h2>
            {section.items.map((item, subIndex) => (
              <div key={`item-${subIndex}`} className="mb-4 pb-4">
                <NavItem
                  title={item.title}
                  items={item.items}
                  href={item.href}
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
