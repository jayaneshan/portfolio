import React, { useState } from 'react';
import projectThumbnail from './assets/project-bg.png'; 

function SpecAccordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 w-full bg-white">
      <button
        onClick={onToggle}
        className="w-full py-4 px-5 flex items-center justify-between text-left focus:outline-none select-none hover:bg-gray-50/50"
      >
        <span className="font-body text-sm font-medium uppercase tracking-wider text-black">
          {title}
        </span>
        <span className="text-xs font-mono text-neutral-400">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="p-5 font-mono text-xs text-neutral-700 space-y-2 leading-relaxed bg-neutral-50/30">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const projectList = [
    {
      id: 'biotune',
      title: 'BIOTUNE',
      subtitle: 'Music Player',
      bgImage: projectThumbnail,
      websiteUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      specs: {
        desc: (
          <>
            <p>BioTune captures real-time facial feature maps via web camera hardware inputs to estimate shifting valences and emotional baselines.</p>
            <p className="mt-2 text-neutral-400">// Automatically recalibrates audio queues without disruptive latency parameters.</p>
          </>
        ),
        tech: (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs">
            <div className="text-neutral-400">FRONTEND:</div><div className="text-black">React v19</div>
            <div className="text-neutral-400">STYLES:</div><div className="text-black">Tailwind v4</div>
            <div className="text-neutral-400">LOGIC:</div><div className="text-black">JavaScript ES6</div>
          </div>
        ),
        hardware: (
          <div className="space-y-1 font-mono text-xs">
            <div>• Integrated RGB Webcam Sensor Array</div>
            <div>• CPU / GPU local execution core pipeline</div>
          </div>
        ),
        sus: (
          <p>Local inference client architecture completely bypasses network load pipelines, reducing standard cloud infrastructure server emissions to 0.0g CO2e per track query cycle.</p>
        )
      }
    }
  ];

  const handleOpenSpecs = (projectId) => {
    setActiveProjectId(projectId);
    setOpenAccordions([]); 
    setIsSpecsOpen(true);
  };

  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) {
      setOpenAccordions(openAccordions.filter(item => item !== id));
    } else {
      setOpenAccordions([...openAccordions, id]);
    }
  };

  const activeProject = projectList.find(p => p.id === activeProjectId) || projectList[0];

  return (
    <div className="w-full flex flex-col relative -mt-32">

      {projectList.map((project) => (
        <section 
          key={project.id} 
          className="relative min-h-screen w-full flex items-center justify-center border-b border-gray-200/40 py-24 overflow-hidden"
        >
          {/* Absolute Background Container filling the section entirely */}
          <div 
            className="absolute inset-0 w-full h-full z-0 bg-cover bg-center opacity-20 blur-sm pointer-events-none filter grayscale saturate-50 mix-blend-multiply" 
            style={{ backgroundImage: `url('${project.bgImage}')` }} 
          />

          {/* 3-COLUMN CONTENT GRID LAYER */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center flex-1 w-full relative z-10 px-12 max-w-7xl mx-auto">
            
            {/* LEFT SIDE - ABOUT FOLDER */}
            <div className="flex flex-col w-full items-center lg:items-start">
              <button 
                onClick={() => handleOpenSpecs(project.id)} 
                className="group flex flex-col items-center gap-2 focus:outline-none"
              >
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 99 99" fill="none" className="w-full h-full">
                    <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white" />
                  </svg>
                </div>
                <span className="font-dot text-md uppercase tracking-widest text-black whitespace-nowrap">About</span>
              </button>
            </div>

            {/* CENTER - PROJECT TITLE */}
            <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-4">
              <div className="text-center">
                <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">
                  {project.title}
                </h1>
                <p className="font-mono text-gray-600 text-md md:text-base tracking-wide max-w-xl mx-auto uppercase">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE - WEBPAGE LINKS */}
            <div className="flex flex-col gap-15 w-full items-center lg:items-end justify-self-end">
              <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 99 99" fill="none" className="w-full h-full">
                    <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white" />
                  </svg>
                </div>
                <span className="font-dot text-md uppercase tracking-widest text-black whitespace-nowrap">Website</span>
              </a>

              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 99 99" fill="none" className="w-full h-full">
                    <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white" />
                  </svg>
                </div>
                <span className="font-dot text-md uppercase tracking-widest text-black text-center leading-none whitespace-nowrap">Github</span>
              </a>
            </div>

          </div>
        </section>
      ))}

      {/* DROPDOWN SPECS INFOPANEL MODAL DRAWER */}
      <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg transition-all duration-500 ease-in-out px-4 ${isSpecsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-md flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-xl max-h-[70vh]">
          
          <div className="grid grid-cols-[60px_1fr_60px] border-b border-gray-100 items-center h-11 bg-white sticky top-0 z-20">
            <button onClick={() => setIsSpecsOpen(false)} className="w-10 h-10 flex items-center justify-center font-mono text-xs text-neutral-400 hover:text-black">✕</button>
            <div className="text-center font-dot text-sm uppercase tracking-widest text-black">SPECS</div>
            <div />
          </div>

          <div className="overflow-y-auto flex-1 bg-white">
            <SpecAccordion title="Description" isOpen={openAccordions.includes('desc')} onToggle={() => toggleAccordion('desc')}>
              {activeProject.specs.desc}
            </SpecAccordion>

            <SpecAccordion title="Tech Used" isOpen={openAccordions.includes('tech')} onToggle={() => toggleAccordion('tech')}>
              {activeProject.specs.tech}
            </SpecAccordion>

            <SpecAccordion title="Hardware Used" isOpen={openAccordions.includes('hardware')} onToggle={() => toggleAccordion('hardware')}>
              {activeProject.specs.hardware}
            </SpecAccordion>

            <SpecAccordion title="Sustainability" isOpen={openAccordions.includes('sus')} onToggle={() => toggleAccordion('sus')}>
              {activeProject.specs.sus}
            </SpecAccordion>
          </div>
        </div>
      </div>

      {/* Dim background helper when specs dropdown window opens */}
      {isSpecsOpen && <div onClick={() => setIsSpecsOpen(false)} className="fixed inset-0 z-30 bg-black/5 backdrop-blur-[1px]" />}
      
    </div>
  );
}