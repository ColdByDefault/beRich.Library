// inspired by Rubix Studio - Documentation Template Next.js

import Image from 'next/image';
import SidebarNav from '@components/sidebar-nav';
import Breadcrumb from '@components/breadcrumb';
import FeatureCard from '@components/feature-card';

export default function Page() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="flex">
        <SidebarNav />
        <main className="flex-1 p-8 overflow-y-auto h-screen scroll-smooth">
          <h1 className='text-4xl font-bold text-blue-600'>Documents</h1>
          {/* Getting Started */}
          <section id="introduction" className="mt-16">
            <h1 className="text-4xl font-bold mb-4">Introduction</h1>
            <p className="text-gray-400">
              Welcome to the introduction section. Here you'll find a brief overview of this documentation project.
            </p>
          </section>
          <section id="installation" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Installation</h2>
            <p className="text-gray-400">
              Follow these steps to install the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Breadcrumb />
            <div className='flex gap-4 mt-8'>
              <FeatureCard                 title="Breadcrumbs"
                description="Navigate your documentation hierarchy with ease."
                link="#"
                linkText="View Docs"/>
              <FeatureCard                 title="Breadcrumbs"
                description="Navigate your documentation hierarchy with ease."
                link="#"
                linkText="View Docs"/>
            </div>

          </section>
          <section id="setup" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Setup</h2>
            <p className="text-gray-400">
              Learn how to set up the project for local development. Nullam vitae tortor sit amet purus lacinia malesuada.
            </p>
          </section>
          <section id="changelog" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Changelog</h2>
            <p className="text-gray-400">
              View the history of changes made to this project. Aenean et malesuada dolor.
            </p>
          </section>

          {/* Documents */}
          <section id="navigation" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Navigation</h2>
            <p className="text-gray-400">
              Explore the navigation system. Learn how to structure your content efficiently.
            </p>
            <div className='flex gap-4 mt-8'>
            <FeatureCard                 title="Breadcrumbs"
                description="Navigate your documentation hierarchy with ease."
                link="#"
                linkText="View Docs"/>
            <FeatureCard                 title="Breadcrumbs"
                description="Navigate your documentation hierarchy with ease."
                link="#"
                linkText="View Docs"/>
            </div>

          </section>
          <section id="structure" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Structure</h2>
            <p className="text-gray-400">
              Discover the ideal content structure for your documentation. Sed id justo vel lectus faucibus venenatis.
            </p>
          </section>

          {/* Components */}
          <section id="markup" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Markup</h2>
            <p className="text-gray-400">
              Learn about the available markup styles. Curabitur efficitur neque eu quam fermentum, a cursus odio facilisis.
            </p>
          </section>
          <section id="cards" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Cards</h2>
            <p className="text-gray-400">
              This section covers card components used throughout the project.
            </p>
          </section>
          <section id="diagrams" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Diagrams</h2>
            <p className="text-gray-400">
              Learn how to include diagrams in your documentation for better visualization.
            </p>
          </section>
          <section id="filetree" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Filetree</h2>
            <p className="text-gray-400">
              Organize and display your project’s file structure effectively.
            </p>
          </section>
          <section id="lists" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Lists</h2>
            <p className="text-gray-400">
              Understand how to use and style lists in your content.
            </p>
          </section>
          <section id="maths" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Maths</h2>
            <p className="text-gray-400">
              This section explains how to include mathematical expressions in your documents.
            </p>
          </section>
          <section id="notes" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Notes</h2>
            <p className="text-gray-400">
              Learn how to add notes and annotations in your documentation.
            </p>
          </section>
          <section id="steps" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Steps</h2>
            <p className="text-gray-400">
              Step-by-step guides for completing tasks or workflows.
            </p>
          </section>
          <section id="table" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Table</h2>
            <p className="text-gray-400">
              Create and format tables for structured data representation.
            </p>
          </section>
          <section id="tabs" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Tabs</h2>
            <p className="text-gray-400">
              Utilize tabbed navigation for better organization and readability.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
