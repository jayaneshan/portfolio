import React from 'react';

export default function Skills() {
  const skillCategories = [
    { 
      title: 'Programming', 
      items: ['C', 'C++', 'Java', 'Python'] 
    },
    { 
      title: 'Web Technologies', 
      items: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      title: 'Databases', 
      items: ['MySQL'] 
    },
    { 
      title: 'Platforms & Tools', 
      items: ['Git', 'Linux', 'VS Code', 'Burp Suite', 'Nmap'] 
    },
    { 
      title: 'Core Concepts', 
      items: ['OOPS', 'DBMS', 'Data Structures & Algorithms', 'Networking Basics', 'Virtualization', 'Cybersecurity'] 
    }
  ];

  return (
    <div className="w-full flex flex-col relative py-12 px-6 md:px-12 max-w-7xl mx-auto min-h-[calc(100vh-128px)] justify-center">
      
      <div className="mb-16 text-center">
        <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">
          SKILLS
        </h1>
        <p className="font-mono text-gray-600 text-sm tracking-widest uppercase">
          Technical Competencies
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="border border-gray-200 p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:border-black transition-colors duration-300">
            <h3 className="font-dot text-lg uppercase tracking-widest text-black mb-4 border-b border-gray-200 pb-2">
              {category.title}
            </h3>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-gray-600">
              {category.items.map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}