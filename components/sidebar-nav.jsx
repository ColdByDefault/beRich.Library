'use client';

import Link from 'next/link';
import navItems from '@utils/SidebarNav';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SiReadthedocs } from "react-icons/si";

export default function SidebarNav() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <nav className="w-64 p-4 border-r border-gray-700 bg-black backdrop-filter 
    backdrop-blur-lg bg-opacity-30
    shadow-lg h-screen overflow-y-auto">
      <div>
        <Link href="/docs">
          <div className="flex items-center gap-2 mt-2 pb-2 text-lg font-semibold 
          text-white
          hover:text-slate-400">
            <SiReadthedocs />
            <span>ALL DOCS </span>
          </div>
        </Link>
      </div>
      <div className="space-y-6">
        {navItems.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`}>
            <h2 className="mb-4 mt-2 pb-2 text-lg font-semibold text-white border-b border-gray-800">
              {section.section}
            </h2>
            {section.items.map((item, subIndex) => (
              <div key={`item-${sectionIndex}-${subIndex}`}>
                <NavItem
                  title={item.title}
                  items={item.items}
                  href={item.href}
                  isOpen={!!openItems[`${sectionIndex}-${subIndex}`]}
                  toggleOpen={() => toggleItem(`${sectionIndex}-${subIndex}`)}
                  parentKey={`${sectionIndex}-${subIndex}`}
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}

const NavItem = ({ title, items, href, isOpen, toggleOpen, parentKey, openItems, setOpenItems }) => {
  const toggleNestedItem = (nestedKey) => {
    setOpenItems((prev) => ({
      ...prev,
      [`${parentKey}-${nestedKey}`]: !prev[`${parentKey}-${nestedKey}`],
    }));
  };

  return (
    <div className="space-y-1">
      {items && items.length > 0 ? (
        <button
          onClick={toggleOpen}
          className={`flex items-center justify-between w-full p-2 text-sm font-medium rounded-lg ${
            isOpen
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
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
          <p className="block p-2 text-sm text-gray-400 rounded-lg hover:text-white">
            {title}
          </p>
        </Link>
      )}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {items?.map((item, index) => (
          <div key={index} className="pl-6">
            {item.items ? (
              <NavItem
                title={item.title}
                items={item.items}
                href={item.href}
                isOpen={!!openItems[`${parentKey}-${index}`]}
                toggleOpen={() => toggleNestedItem(index)}
                parentKey={`${parentKey}-${index}`}
                openItems={openItems}
                setOpenItems={setOpenItems}
              />
            ) : (
              <Link href={item.href}>
                <p className="block p-2 text-sm text-gray-400 hover:text-white">
                  {item.title}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
