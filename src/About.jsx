import React from 'react';

export default function About() {
  return (
    <div className="w-full flex flex-col relative py-12 px-6 md:px-12 max-w-4xl mx-auto min-h-[calc(100vh-128px)] justify-center">
      
      <div className="mb-16 text-center">
        <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">
          ABOUT
        </h1>
        <p className="font-mono text-gray-600 text-sm tracking-widest uppercase">
          Jayaneshan K S
        </p>
      </div>

      <div className="space-y-12">
        {/* Profile */}
        <section>
          <h2 className="font-dot text-2xl uppercase tracking-widest text-black border-b border-gray-200 pb-2 mb-4">
            PROFILE
          </h2>
          <p className="font-mono text-sm leading-relaxed text-gray-600 uppercase">
            Motivated Information Technology undergraduate with a strong interest in cybersecurity and system-level technologies. Experienced in Linux environments, networking fundamentals, and full-stack web development. Particularly interested in applying cybersecurity concepts within the gaming domain to enhance system security and player experience.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-dot text-2xl uppercase tracking-widest text-black border-b border-gray-200 pb-2 mb-4">
            EDUCATION
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-body text-base font-medium text-black uppercase">B.Tech in Information Technology</h3>
                <span className="font-mono text-xs text-gray-500">2028</span>
              </div>
              <p className="font-mono text-xs text-gray-500 uppercase">Kongu Engineering College - Perundurai, Tamil Nadu</p>
              <p className="font-mono text-xs text-black mt-2">CGPA: 8.5</p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-body text-base font-medium text-black uppercase">Higher Secondary Education (HSC)</h3>
                <span className="font-mono text-xs text-gray-500">2024</span>
              </div>
              <p className="font-mono text-xs text-gray-500 uppercase">Bharathi Vidya Bhavan - Thindal, Tamil Nadu (State Board)</p>
              <p className="font-mono text-xs text-black mt-2">Percentage: 80%</p>
            </div>
          </div>
        </section>

        {/* Training & Certifications */}
        <section>
          <h2 className="font-dot text-2xl uppercase tracking-widest text-black border-b border-gray-200 pb-2 mb-4">
            TRAINING & CERTIFICATIONS
          </h2>
          <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-gray-600 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-black font-bold">/</span> 
              <span><strong className="text-black">NPTEL:</strong> Privacy and Security in Online Social Media</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black font-bold">/</span> 
              <span><strong className="text-black">NPTEL:</strong> social Networks</span>
            </li>
                        <li className="flex gap-3">
              <span className="text-black font-bold">/</span> 
              <span><strong className="text-black">NPTEL:</strong> Human Computer Interaction</span>
            </li>


          </ul>
        </section>
      </div>

    </div>
  );
}