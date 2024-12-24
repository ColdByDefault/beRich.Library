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

          {/* Backend Section */}
          <section id="overview" className="mt-16">
            <h2 className="text-4xl font-bold mb-4">Backend Overview</h2>
            <p className="text-gray-400">
              The backend serves as the foundation of an application, managing data processing, server logic, and communication
              between the database and the frontend. It ensures seamless functionality and efficient data delivery.
            </p>
          </section>

          <section id="basic" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Basic Knowledge</h2>
            <p className="text-gray-400">
              A strong foundation in backend development includes understanding server-side programming languages like Node.js, Java,
              or Python. Knowledge of HTTP protocols, RESTful services, and handling server errors is also crucial.
            </p>
            <div className='flex gap-4 mt-8'>
              <FeatureCard
                title="HTTP Basics"
                description="Master HTTP methods, status codes, and headers for efficient communication."
                link="#"
                linkText="Learn More"
              />
              <FeatureCard
                title="Server Frameworks"
                description="Discover popular frameworks like Express.js and Spring Boot."
                link="#"
                linkText="Learn More"
              />
            </div>
          </section>

          <section id="databases" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Databases</h2>
            <p className="text-gray-400">
              Databases play a critical role in backend development, providing a system for storing, organizing, and retrieving data.
              From relational databases like MySQL and PostgreSQL to NoSQL databases like MongoDB, understanding database concepts is vital.
            </p>
            <div className='flex gap-4 mt-8'>
              <FeatureCard
                title="Relational Databases"
                description="Learn about SQL databases and efficient data modeling."
                link="#"
                linkText="Learn More"
              />
              <FeatureCard
                title="NoSQL Databases"
                description="Explore NoSQL solutions for flexible data storage needs."
                link="#"
                linkText="Learn More"
              />
            </div>
          </section>

          <section id="api" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">APIs</h2>
            <p className="text-gray-400">
              APIs (Application Programming Interfaces) allow different software systems to communicate. Building well-structured APIs
              ensures seamless integration and scalability. Familiarize yourself with RESTful services and API security best practices.
            </p>
          </section>

          <section id="java" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Programming Languages - Java</h2>
            <p className="text-gray-400">
              Java is a versatile and powerful programming language widely used for backend development. Its platform independence
              and strong community support make it a popular choice for enterprise applications.
            </p>
          </section>

          <section id="basicsPy" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Programming Languages - Python Basics</h2>
            <p className="text-gray-400">
              Python is known for its simplicity and readability, making it an excellent choice for beginners. Core concepts include
              variables, data types, control structures, and functions.
            </p>
          </section>

          <section id="advancedPy" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Programming Languages - Python Advanced</h2>
            <p className="text-gray-400">
              Advanced Python topics include decorators, generators, asynchronous programming, and integrating Python with databases
              or REST APIs for backend solutions.
            </p>
          </section>

          {/* Frontend Section */}
          <section id="buttons" className="mt-16">
            <h2 className="text-4xl font-bold mb-4">UI Elements - Buttons</h2>
            <p className="text-gray-400">
              Buttons are essential interactive elements that trigger user actions. Styling and functionality play a critical role
              in ensuring a seamless user experience.
            </p>
          </section>

          <section id="cards" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">UI Elements - Cards</h2>
            <p className="text-gray-400">
              Cards are flexible containers for displaying related information. They can include images, text, and links, offering a
              visually engaging way to present content.
            </p>
            <div className='flex gap-4 mt-8'>
              <FeatureCard
                title="Card Design"
                description="Explore best practices for designing attractive and functional cards."
                link="#"
                linkText="Learn More"
              />
              <FeatureCard
                title="Card Layouts"
                description="Learn how to create responsive card layouts for various screen sizes."
                link="#"
                linkText="Learn More"
              />
            </div>
          </section>

          <section id="signup" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Forms - Sign-Up</h2>
            <p className="text-gray-400">
              Sign-up forms are crucial for onboarding users. Key elements include validation, user-friendly input fields,
              and secure data handling.
            </p>
          </section>

          <section id="login" className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Forms - Log-In</h2>
            <p className="text-gray-400">
              Log-in forms are essential for authentication. Best practices involve secure password handling, validation,
              and user feedback.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
