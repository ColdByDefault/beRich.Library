import Image from 'next/image';
import SidebarNav from '@components/sidebar-nav';
import Breadcrumb from '@components/breadcrumb';
import FeatureCard from '@components/feature-card';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="flex">
        <main className="flex-1 p-8 overflow-y-auto h-screen scroll-smooth">
          <h1 className='text-4xl font-bold text-blue-600'>Documents</h1>
          <Breadcrumb />
        </main>
      </div>
    </div>
  );
}
