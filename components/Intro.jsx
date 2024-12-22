import React from 'react'

const Intro = () => {
  return (
    <section className="flex-center flex-col mt-48">
      <div className="relative flex items-center justify-center">
        <div className="text-black text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4" style={{ transform: "translateZ(20px)" }}>
            beRich<span className="text-blue-800">Hub</span><span className="text-sm">NEXT.JS</span><br />
            &#123;<span className="text-blue-800">Digital Library</span>&#125;
          </h1>
          <p className="text-black text-sm mb-6 max-w-2xl mx-auto" style={{ textShadow: "0px 2px 10px #5b7080f1" }}>
            {/* translate */}
              Willkommen bei beRichHub, einer digitalen Bibliothek, in der Du kostenlos Resources lesen und herunterladen kannst.
              Du kannst auch deine eigenen Dokumente hochladen und mit anderen teilen.
          </p>
          <div className="flex space-x-4 justify-center">
            {/* translate */}
            <a href=""
              className="bg-blue-800 text-white font-semibold text-sm rounded-lg shadow-md  
              py-4 px-1 lg:px-6 lg:text-lg  
              hover:bg-blue-300 transition"
              style={{ transform: "translateZ(30px)" }}>
              Los legen
            </a>
            <a href="https://github.com/ColdByDefault/beRichLibrary_Fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-black font-semibold text-black py-4 px-1 
              lg:px-6 lg:text-lg text-sm rounded-lg hover:bg-black 
              hover:text-white transition"
              style={{ transform: "translateZ(30px)" }}>
              Quellcode ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro