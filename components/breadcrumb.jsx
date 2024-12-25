'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowBendUpLeftLight } from "react-icons/pi";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter((segment) => segment);

  return (
    <nav className="text-gray-500 text-sm">
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="/docs"><IoIosArrowForward />
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const isLast = index === segments.length - 1;

          return (
            <li key={index} className="flex items-center">
              <span className="mx-1"><PiArrowBendUpLeftLight /></span>
              {isLast ? (
                <span className="text-white">{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
              ) : (
                <Link href={href}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
