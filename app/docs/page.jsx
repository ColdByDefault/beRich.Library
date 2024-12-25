import Breadcrumb from '@components/breadcrumb';


export default function Page() {
  return (
    <div className="bg-transparent text-white">
      <Breadcrumb />
      <div className="flex">
        <main className="flex-1 p-8 overflow-y-auto h-screen scroll-smooth">
          <h1 className='text-4xl font-bold text-blue-600'>Documents</h1>
        </main>
      </div>
    </div>
  );
}
