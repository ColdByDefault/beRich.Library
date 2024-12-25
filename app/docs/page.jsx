import Breadcrumb from '@components/breadcrumb';
import FeatureCard from '@components/feature-card';

export default function Page() {
  return (
    <div className="text-white">
      <Breadcrumb />
      <div className="p-8">
        <main className="">
          {/* Introduction Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Introduction</h1>
            <p className="text-gray-400 text-lg">
              This section provides an overview of the Documents.
            </p>
          </section>
          {/* Cube Icon and Documents Section */}
          <section className="mb-12">
            <div className="bg-black backdrop-filter backdrop-blur-sm bg-opacity-30
            shadow-lg rounded-lg p-12 w-full items-center justify-center flex flex-col">
              {/* Cube Icon */}
              <div className="w-full h-52 flex justify-center items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Documents</h2>
            </div>
          </section>

          {/* Description Section */}
          <section className="text-center">
            <h3 className="text-xl font-bold mb-4">Documents</h3>
            <p className="text-gray-300 text-lg mb-4">
              Welcome to <span className="text-blue-500 font-bold">Documents</span>, a powerful and flexible Next.js documentation starter kit.
            </p>
            <p className="text-gray-300 text-lg">
              Built with <span className="font-bold">React</span>, <span className="font-bold">Tailwind CSS</span>, and <span className="font-bold">JavaScript</span>.
            </p>
          </section>
          <div className="flex justify-center gap-4 mt-8">
            <FeatureCard
              title="Documentation"
              description="Learn how to use the starter kit with step-by-step guides."
              link="/docs"
              linkText="View Docs"/>
            <FeatureCard
              title="API Reference"
              description="Dive deep into the API for advanced usage and customization."
              link="/api"
              linkText="Explore API"/>
          </div>
        </main>
      </div>
    </div>
  );
}
