// import React, { useState } from 'react';
// import Projects from './Projects';

// export default function App() {
//   // State to track if the floating menu is expanded or closed
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');

//   const mainLinks = ['Work', 'Projects', 'About', 'Contact'];
//   const subLinks = ['GitHub', 'LinkedIn', 'Resume'];

//   const handleNavClick = (link) => {
//     setIsMenuOpen(false);
//     if (link.toLowerCase() === 'projects') {
//       setCurrentPage('projects');
//     } else {
//       setCurrentPage('home');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-nothing-light text-black overflow-x-hidden">
      
//       {/* 
//         THE FLOATING HEADER (From your scrape)
//         - left-1/2 -translate-x-1/2: Centers it perfectly.
//         - max-w-lg: Keeps it constrained like a phone screen, even on desktop.
//         - h-[100dvh] vs h-[80px]: Handles the full screen expansion.
//       */}
//       <header 
//         className={`fixed top-0 left-1/2 z-50 flex w-full max-w-lg -translate-x-1/2 flex-col gap-0.5 transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'h-[100dvh]' : 'h-[80px]'
//         }`}
//       >
//         <div 
//           className={`bg-white/90 backdrop-blur-md m-4 flex flex-col overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
//             isMenuOpen ? 'h-full' : 'min-h-[48px] h-[48px]'
//           }`}
//         >
//           {/* TOP ROW: The Menu Button and Logo */}
//           <nav className="relative grid grid-cols-[80px,auto,80px] shrink-0 h-[48px]">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="w-12 h-12 p-4 focus:outline-none flex items-center justify-center text-black hover:opacity-50 transition-opacity"
//             >
//               {/* Conditional SVG Rendering based on menu state */}
//               {isMenuOpen ? (
//                 // The "Close X" SVG from your expanded scrape
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4Z" fill="currentColor"></path>
//                   <path d="M7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6Z" fill="currentColor"></path>
//                   <path d="M9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8Z" fill="currentColor"></path>
//                   <path d="M11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10Z" fill="currentColor"></path>
//                   <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" fill="currentColor"></path>
//                   <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" fill="currentColor"></path>
//                   <path d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor"></path>
//                   <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor"></path>
//                   <path d="M6 11C6.55228 11 7 10.5523 7 10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11Z" fill="currentColor"></path>
//                   <path d="M4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13Z" fill="currentColor"></path>
//                 </svg>
//               ) : (
//                 // The "Hamburger" SVG from your collapsed scrape
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M4 3C4 3.55228 3.55228 4 3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3Z" fill="currentColor"></path>
//                   <path d="M4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12C3.55228 12 4 12.4477 4 13Z" fill="currentColor"></path>
//                   <path d="M6 3C6 3.55228 5.55228 4 5 4C4.44772 4 4 3.55228 4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3Z" fill="currentColor"></path>
//                   <path d="M6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13Z" fill="currentColor"></path>
//                   <path d="M8 3C8 3.55228 7.55228 4 7 4C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3Z" fill="currentColor"></path>
//                   <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="currentColor"></path>
//                   <path d="M10 3C10 3.55228 9.55228 4 9 4C8.44772 4 8 3.55228 8 3C8 2.44772 8.44772 2 9 2C9.55228 2 10 2.44772 10 3Z" fill="currentColor"></path>
//                   <path d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z" fill="currentColor"></path>
//                   <path d="M12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z" fill="currentColor"></path>
//                   <path d="M12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12C11.5523 12 12 12.4477 12 13Z" fill="currentColor"></path>
//                   <path d="M14 3C14 3.55228 13.5523 4 13 4C12.4477 4 12 3.55228 12 3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3Z" fill="currentColor"></path>
//                   <path d="M14 13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12C13.5523 12 14 12.4477 14 13Z" fill="currentColor"></path>
//                 </svg>
//               )}
//             </button>
            

//             {/* Absolutely positioned title to keep it centered and visible */}
//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//               <span className="font-dot text-lg md:text-xl tracking-widest uppercase text-black">
// {currentPage === 'home' ? 'PORTFOLIO' : 'PROJECTS'}              </span>
//             </div>
            
//             {/* Empty div perfectly balances the grid-[80px,auto,80px] */}
//             <div></div> 
//           </nav>

//           {/* EXPANDED MENU CONTENT (From your scrape) */}
//           <div className={`flex flex-1 flex-col transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
            
//             {/* Center Main Links */}
//             <div className="flex flex-1 flex-col items-center justify-center">
//               <nav className="flex flex-col items-center gap-6 p-4">
//                 {mainLinks.map((link) => (
//                   <button
//                     key={link}
//                     onClick={() => handleNavClick(link)}
//                     className="font-dot text-3xl md:text-4xl tracking-widest uppercase transition-opacity duration-100 hover:opacity-50 bg-none border-none cursor-pointer"
//                   >
//                     {link}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Bottom Sub Links */}
//             <div className="flex w-full shrink-0 flex-col gap-2 p-4 pb-8">
//               <nav className="mx-auto flex w-full flex-wrap items-center justify-center gap-2">
//                 {subLinks.map((link) => (
//                   <a 
//                     key={link} 
//                     href="#"
//                     className="font-mono text-xs uppercase p-2 hover:opacity-50 transition-opacity"
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* Fullscreen blur + dim overlay while menu is open */}
//       <div
//         onClick={() => setIsMenuOpen(false)}
//         className={`fixed inset-0 transition-opacity duration-100 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
//       >
//         <div className={`w-full h-full ${isMenuOpen ? 'backdrop-blur-sm bg-black/10' : ''}`} />
//       </div>

//       {/* MAIN CONTENT CONTAINER */}
//       {/* We add pt-32 here so the content doesn't hide behind the floating pill */}
//       <main className="max-w-7xl mx-auto px-6 pt-32 min-h-screen bg-nothing-light">
        
//         {/* CONDITIONAL PAGE RENDERING */}
//         {currentPage === 'home' ? (
//           // HOME PAGE
//           <div className="flex flex-col gap-0 min-h-[calc(100vh-128px)] justify-between">
            
//             {/* TOP SECTION - HERO IN CENTER WITH SIDE BUTTONS */}
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center flex-1 py-8">
              
//               {/* LEFT SIDE - SOCIAL BUTTONS */}
//   <div className="flex flex-col gap-15 w-full items-center lg:items-start lg:-ml-12">
//   {/* LinkedIn */}
//   <a 
//     href="https://linkedin.com" target="_blank" rel="noreferrer"
//     className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//     </svg>
//     <span className="w-full text-center">LinkedIn</span>
//     <div className="w-6"></div> {/* Invisible spacer balances the icon layout math */}
//   </a>

//   {/* GitHub */}
//   <a 
//     href="https://github.com" target="_blank" rel="noreferrer"
//     className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//     </svg>
//     <span className="w-full text-center">GitHub</span>
//     <div className="w-6"></div>
//   </a>

//   {/* LeetCode */}
//   <a 
//     href="https://leetcode.com" target="_blank" rel="noreferrer"
//     className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//       <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.371 1.371 0 0 0-.055 1.914 1.371 1.371 0 0 0 1.914.055l5.412-5.412 5.352 5.352a1.397 1.397 0 1 0 1.975-1.975L14.444.411A1.374 1.374 0 0 0 13.483 0zm-7.66 7.11a1.371 1.371 0 0 0-1.914.055L.411 12.522a1.397 1.397 0 1 0 1.975 1.975l5.352-5.352 5.412 5.412a1.371 1.371 0 0 0 1.914-.055 1.371 1.371 0 0 0-.055-1.914z"/>
//     </svg>
//     <span className="w-full text-center">LeetCode</span>
//     <div className="w-6"></div>
//   </a>
// </div>
//               {/* CENTER - HERO CONTENT */}
//               <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-4">
//                 <div className="text-center">
//                   <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">
//                     HELLO
//                   </h1>
//                   <h2 className="font-dot text-2xl md:text-4xl text-black uppercase tracking-wider mb-4">
//                     I'M JAYANESHAN.
//                   </h2>
//                   <p className="font-mono text-gray-600 text-sm md:text-base tracking-wide max-w-xl mx-auto">
//                     Aspiring Front‑End Developer learning React & JavaScript.
//                   </p>
//                 </div>
//               </div>

//               {/* RIGHT SIDE - CONTACT BUTTONS */}
//               <div className="flex flex-col gap-15 w-full items-center lg:items-end lg:-mr-12 justify-self-end">
//   {/* Phone */}
//   <a 
//     href="tel:9345698148"
//     className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//     </svg>
//     <span className="w-full text-center">9345698148</span>
//     <div className="w-6"></div>
//   </a>

//   {/* Email */}
//   <a 
//     href="mailto:jayaneshanks@gmail.com"
//     className="font-mono text-[10px] sm:text-xs lowercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//       <rect x="2" y="4" width="20" height="16" rx="2"></rect>
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//     </svg>
//     <span className="w-full text-center truncate">jayaneshanks</span>
//     <div className="w-6"></div>
//   </a>

//   {/* Resume */}
//   <button 
//     className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//   >
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//       <polyline points="14 2 14 8 20 8"></polyline>
//     </svg>
//     <span className="w-full text-center">RESUME</span>
//     <div className="w-6"></div>
//   </button>
// </div>
//             </div>

//             {/* BOTTOM SECTION - THREE FOLDER ICONS */}
//             <div className="flex items-center justify-center gap-50 pb-20 flex-shrink-0">
//               {/* Projects Folder */}
//               <button 
//                 onClick={() => setCurrentPage('projects')}
//                 className="group flex flex-col items-center gap-2 hover:opacity-75 transition-opacity"
//               >
//                 <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
//                   <svg viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white"></path>
//                   </svg>
//                 </div>
//                 <span className="font-dot text-xs uppercase tracking-widest">Projects</span>
//               </button>

//               {/* Skills Folder */}
//               <button 
//                 className="group flex flex-col items-center gap-2 hover:opacity-75 transition-opacity"
//               >
//                 <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
//                   <svg viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white"></path>
//                   </svg>
//                 </div>
//                 <span className="font-dot text-xs uppercase tracking-widest">Skills</span>
//               </button>

//               {/* About Folder */}
//               <button 
//                 className="group flex flex-col items-center gap-2 hover:opacity-75 transition-opacity"
//               >
//                 <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
//                   <svg viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" className="fill-black dark:fill-white"></path>
//                   </svg>
//                 </div>
//                 <span className="font-dot text-xs uppercase tracking-widest">About</span>
//               </button>
//             </div>
//           </div>
//         ) : (
//           // PROJECTS PAGE
//           <Projects />
//         )}

//       </main>
      
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import Projects from './Projects';

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');

//   const mainLinks = ['Work', 'Projects', 'About', 'Contact'];
//   const subLinks = ['GitHub', 'LinkedIn', 'Resume'];

//   const handleNavClick = (link) => {
//     setIsMenuOpen(false);
//     if (link.toLowerCase() === 'projects') {
//       setCurrentPage('projects');
//     } else {
//       setCurrentPage('home');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-nothing-light text-black overflow-x-hidden">
      
//       {/* FLOATING HEADER */}
//       <header 
//         className={`fixed top-0 left-1/2 z-50 flex w-full max-w-lg -translate-x-1/2 flex-col gap-0.5 transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'h-[100dvh]' : 'h-[80px]'
//         }`}
//       >
//         <div 
//           className={`bg-white/90 backdrop-blur-md m-4 flex flex-col overflow-hidden rounded-xl border border-gray-200 transition-all duration-500 ease-in-out ${
//             isMenuOpen ? 'h-full' : 'min-h-[48px] h-[48px]'
//           }`}
//         >
//           {/* TOP ROW: Menu Button + Title */}
//           <nav className="relative grid grid-cols-[80px,auto,80px] shrink-0 h-[48px]">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="w-12 h-12 p-4 focus:outline-none flex items-center justify-center text-black hover:opacity-50 transition-opacity"
//             >
//               {isMenuOpen ? (
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4Z" fill="currentColor"></path>
//                   <path d="M7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6Z" fill="currentColor"></path>
//                   <path d="M9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8Z" fill="currentColor"></path>
//                   <path d="M11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10Z" fill="currentColor"></path>
//                   <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" fill="currentColor"></path>
//                   <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" fill="currentColor"></path>
//                   <path d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor"></path>
//                   <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor"></path>
//                   <path d="M6 11C6.55228 11 7 10.5523 7 10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11Z" fill="currentColor"></path>
//                   <path d="M4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13Z" fill="currentColor"></path>
//                 </svg>
//               ) : (
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M4 3C4 3.55228 3.55228 4 3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3Z" fill="currentColor"></path>
//                   <path d="M4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12C3.55228 12 4 12.4477 4 13Z" fill="currentColor"></path>
//                   <path d="M6 3C6 3.55228 5.55228 4 5 4C4.44772 4 4 3.55228 4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3Z" fill="currentColor"></path>
//                   <path d="M6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13Z" fill="currentColor"></path>
//                   <path d="M8 3C8 3.55228 7.55228 4 7 4C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3Z" fill="currentColor"></path>
//                   <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="currentColor"></path>
//                   <path d="M10 3C10 3.55228 9.55228 4 9 4C8.44772 4 8 3.55228 8 3C8 2.44772 8.44772 2 9 2C9.55228 2 10 2.44772 10 3Z" fill="currentColor"></path>
//                   <path d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z" fill="currentColor"></path>
//                   <path d="M12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z" fill="currentColor"></path>
//                   <path d="M12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12C11.5523 12 12 12.4477 12 13Z" fill="currentColor"></path>
//                   <path d="M14 3C14 3.55228 13.5523 4 13 4C12.4477 4 12 3.55228 12 3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3Z" fill="currentColor"></path>
//                   <path d="M14 13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12C13.5523 12 14 12.4477 14 13Z" fill="currentColor"></path>
//                 </svg>
//               )}
//             </button>

//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//               <span className="font-dot text-lg md:text-xl tracking-widest uppercase text-black">
//                 {currentPage === 'home' ? 'PORTFOLIO' : 'PROJECTS'}
//               </span>
//             </div>
//             <div></div> 
//           </nav>

//           {/* EXPANDED MENU OPTIONS */}
//           <div className={`flex flex-1 flex-col transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
//             <div className="flex flex-1 flex-col items-center justify-center">
//               <nav className="flex flex-col items-center gap-6 p-4">
//                 {mainLinks.map((link) => (
//                   <button
//                     key={link}
//                     onClick={() => handleNavClick(link)}
//                     className="font-dot text-3xl md:text-4xl tracking-widest uppercase transition-opacity duration-100 hover:opacity-50"
//                   >
//                     {link}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             <div className="flex w-full shrink-0 flex-col gap-2 p-4 pb-8">
//               <nav className="mx-auto flex w-full flex-wrap items-center justify-center gap-2">
//                 {subLinks.map((link) => (
//                   <a key={link} href="#" className="font-mono text-xs uppercase p-2 hover:opacity-50">
//                     {link}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Backdrop overlay window component mask */}
//       <div
//         onClick={() => setIsMenuOpen(false)}
//         className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto bg-black/5 backdrop-blur-[2px]' : 'opacity-0 pointer-events-none'}`}
//       />

//       {/* MAIN CONTENT CONTAINER */}
//       <main className={`w-full pt-32 min-h-screen bg-nothing-light transition-all duration-300 ${isMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
        
//         {currentPage === 'home' ? (
          
//           <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0 min-h-[calc(100vh-128px)] justify-between">
            
//             {/* THE SKETCH 3-COLUMN GRID */}
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center flex-1 py-8">
              
//               {/* LEFT SIDE SOCIALS WITH ORIGINAL BUTTON ICONS */}
//               <div className="flex flex-col gap-15 w-full items-center lg:items-start lg:-ml-12">
//                 {/* LinkedIn */}
//                 <a 
//                   href="https://linkedin.com" target="_blank" rel="noreferrer"
//                   className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                   </svg>
//                   <span className="w-full text-center">LinkedIn</span>
//                   <div className="w-6" />
//                 </a>

//                 {/* GitHub */}
//                 <a 
//                   href="https://github.com" target="_blank" rel="noreferrer"
//                   className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                   </svg>
//                   <span className="w-full text-center">GitHub</span>
//                   <div className="w-6" />
//                 </a>

//                 {/* LeetCode */}
//                 <a 
//                   href="https://leetcode.com" target="_blank" rel="noreferrer"
//                   className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
//                     <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.371 1.371 0 0 0-.055 1.914 1.371 1.371 0 0 0 1.914.055l5.412-5.412 5.352 5.352a1.397 1.397 0 1 0 1.975-1.975L14.444.411A1.374 1.374 0 0 0 13.483 0zm-7.66 7.11a1.371 1.371 0 0 0-1.914.055L.411 12.522a1.397 1.397 0 1 0 1.975 1.975l5.352-5.352 5.412 5.412a1.371 1.371 0 0 0 1.914-.055 1.371 1.371 0 0 0-.055-1.914z"/>
//                   </svg>
//                   <span className="w-full text-center">LeetCode</span>
//                   <div className="w-6" />
//                 </a>
//               </div>

//               {/* CENTER - HERO CONTENT */}
//               <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-4">
//                 <div className="text-center">
//                   <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">HELLO</h1>
//                   <h2 className="font-dot text-2xl md:text-4xl text-black uppercase tracking-wider mb-4">I'M JAYANESHAN.</h2>
//                   <p className="font-mono text-gray-600 text-sm md:text-base tracking-wide max-w-xl mx-auto">Aspiring Front‑End Developer learning React & JavaScript.</p>
//                 </div>
//               </div>

//               {/* RIGHT SIDE CONTACT CONTEXT DATA TRACKS WITH ORIGINAL ICONS */}
//               <div className="flex flex-col gap-15 w-full items-center lg:items-end lg:-mr-12 justify-self-end">
//                 {/* Phone */}
//                 <a 
//                   href="tel:9345698148"
//                   className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
//                   </svg>
//                   <span className="w-full text-center">9345698148</span>
//                   <div className="w-6" />
//                 </a>

//                 {/* Email */}
//                 <a 
//                   href="mailto:jayaneshanks@gmail.com"
//                   className="font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//                     <rect x="2" y="4" width="20" height="16" rx="2"></rect>
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                   </svg>
//                   <span className="w-full text-center truncate">jayaneshanks</span>
//                   <div className="w-6" />
//                 </a>

//                 {/* Resume */}
//                 <button 
//                   className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
//                     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//                     <polyline points="14 2 14 8 20 8"></polyline>
//                   </svg>
//                   <span className="w-full text-center">RESUME</span>
//                   <div className="w-6" />
//                 </button>
//               </div>
//             </div>

//             {/* FOLDERS FOOTER */}
//             <div className="flex items-center justify-center gap-50 pb-20 flex-shrink-0">
//               {['Projects', 'Skills', 'About'].map((folder) => (
//                 <button key={folder} onClick={() => folder === 'Projects' && setCurrentPage('projects')} className="group flex flex-col items-center gap-2 hover:opacity-75">
//                   <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
//                     <svg viewBox="0 0 99 99" fill="none" className="w-full h-full fill-black dark:fill-white">
//                       <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" />
//                     </svg>
//                   </div>
//                   <span className="font-dot text-xs uppercase tracking-widest">{folder}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <Projects />
//         )}
//       </main>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const mainLinks = ['Home', 'Projects', 'Skills', 'About'];
  const subLinks = ['GitHub', 'LinkedIn', 'Resume'];

  const handleNavClick = (link) => {
    setIsMenuOpen(false);
    setCurrentPage(link.toLowerCase());
  };

  return (
    // BREAKOUT HACK: w-[100vw] relative left-1/2 -translate-x-1/2 forces the app to ignore default Vite/React CSS containers
    <div className="min-h-screen bg-nothing-light text-black overflow-x-hidden w-[100vw] relative left-1/2 -translate-x-1/2">
      
      {/* FLOATING HEADER */}
      <header 
        className={`fixed top-0 left-1/2 z-50 flex w-full max-w-lg -translate-x-1/2 flex-col gap-0.5 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'h-[100dvh]' : 'h-[80px]'
        }`}
      >
        <div 
          className={`bg-white/90 backdrop-blur-md m-4 flex flex-col overflow-hidden rounded-xl border border-gray-200 transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'h-full' : 'min-h-[48px] h-[48px]'
          }`}
        >
          {/* TOP ROW: Strict 3-Column Grid for perfect vertical alignment */}
          <nav className="grid grid-cols-[60px_1fr_60px] md:grid-cols-[80px_1fr_80px] items-center shrink-0 h-[48px] w-full px-2">
            
            {/* 1. Left Hamburger/Close Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center focus:outline-none text-black hover:opacity-50 transition-opacity h-full"
            >
              {isMenuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4Z" fill="currentColor"></path>
                  <path d="M7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7C6.55228 7 7 6.55228 7 6Z" fill="currentColor"></path>
                  <path d="M9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8Z" fill="currentColor"></path>
                  <path d="M11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10Z" fill="currentColor"></path>
                  <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" fill="currentColor"></path>
                  <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" fill="currentColor"></path>
                  <path d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor"></path>
                  <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="currentColor"></path>
                  <path d="M6 11C6.55228 11 7 10.5523 7 10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11Z" fill="currentColor"></path>
                  <path d="M4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13Z" fill="currentColor"></path>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 3C4 3.55228 3.55228 4 3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3Z" fill="currentColor"></path>
                  <path d="M4 13C4 13.5523 3.55228 14 3 14C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12C3.55228 12 4 12.4477 4 13Z" fill="currentColor"></path>
                  <path d="M6 3C6 3.55228 5.55228 4 5 4C4.44772 4 4 3.55228 4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3Z" fill="currentColor"></path>
                  <path d="M6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13Z" fill="currentColor"></path>
                  <path d="M8 3C8 3.55228 7.55228 4 7 4C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3Z" fill="currentColor"></path>
                  <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" fill="currentColor"></path>
                  <path d="M10 3C10 3.55228 9.55228 4 9 4C8.44772 4 8 3.55228 8 3C8 2.44772 8.44772 2 9 2C9.55228 2 10 2.44772 10 3Z" fill="currentColor"></path>
                  <path d="M10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13Z" fill="currentColor"></path>
                  <path d="M12 3C12 3.55228 11.5523 4 11 4C10.4477 4 10 3.55228 10 3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3Z" fill="currentColor"></path>
                  <path d="M12 13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13C10 12.4477 10.4477 12 11 12C11.5523 12 12 12.4477 12 13Z" fill="currentColor"></path>
                  <path d="M14 3C14 3.55228 13.5523 4 13 4C12.4477 4 12 3.55228 12 3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3Z" fill="currentColor"></path>
                  <path d="M14 13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12C13.5523 12 14 12.4477 14 13Z" fill="currentColor"></path>
                </svg>
              )}
            </button>

            {/* 2. Center Title (Cleanly centered in the grid) */}
            <div className="flex items-center justify-center">
              <span className="font-dot text-lg md:text-xl tracking-widest uppercase text-black">
                {currentPage === 'home' ? 'PORTFOLIO' : currentPage}
              </span>
            </div>

            {/* 3. Right Home Button */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-center focus:outline-none text-black hover:opacity-50 transition-opacity h-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button> 
            
          </nav>

          {/* EXPANDED MENU OPTIONS */}
          <div className={`flex flex-1 flex-col transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-1 flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-6 p-4">
                {mainLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleNavClick(link)}
                    className="font-dot text-3xl md:text-4xl tracking-widest uppercase transition-opacity duration-100 hover:opacity-50"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2 p-4 pb-8">
              <nav className="mx-auto flex w-full flex-wrap items-center justify-center gap-2">
                {subLinks.map((link) => (
                  <a key={link} href="#" className="font-mono text-xs uppercase p-2 hover:opacity-50">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay window component mask */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto bg-black/5 backdrop-blur-[2px]' : 'opacity-0 pointer-events-none'}`}
      />

      {/* MAIN CONTENT CONTAINER */}
      <main className={`w-full pt-32 min-h-screen bg-nothing-light transition-all duration-300 ${isMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
        
        {/* PAGE ROUTING LOGIC */}
        {currentPage === 'home' && (
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0 min-h-[calc(100vh-128px)] justify-between">
            
            {/* 3-COLUMN GRID */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center flex-1 py-8">
              
              {/* LEFT SIDE SOCIALS */}
              <div className="flex flex-col gap-15 w-full items-center lg:items-start lg:-ml-12">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/jayaneshan" target="_blank" rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="w-full text-center">LinkedIn</span>
                  <div className="w-6" />
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/jayaneshan" target="_blank" rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="w-full text-center">GitHub</span>
                  <div className="w-6" />
                </a>

                {/* LeetCode */}
                <a 
                  href="https://leetcode.com/jayaneshan" target="_blank" rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="justify-self-start">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.371 1.371 0 0 0-.055 1.914 1.371 1.371 0 0 0 1.914.055l5.412-5.412 5.352 5.352a1.397 1.397 0 1 0 1.975-1.975L14.444.411A1.374 1.374 0 0 0 13.483 0zm-7.66 7.11a1.371 1.371 0 0 0-1.914.055L.411 12.522a1.397 1.397 0 1 0 1.975 1.975l5.352-5.352 5.412 5.412a1.371 1.371 0 0 0 1.914-.055 1.371 1.371 0 0 0-.055-1.914z"/>
                  </svg>
                  <span className="w-full text-center">LeetCode</span>
                  <div className="w-6" />
                </a>
              </div>

              {/* CENTER - HERO CONTENT */}
              <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center gap-4">
                <div className="text-center">
                  <h1 className="font-dot text-5xl md:text-6xl text-black uppercase tracking-wider mb-2">HELLO</h1>
                  <h2 className="font-dot text-2xl md:text-4xl text-black uppercase tracking-wider mb-4">I'M JAYANESHAN.</h2>
                  <p className="font-mono text-gray-600 text-sm md:text-base tracking-wide max-w-xl mx-auto">Aspiring Front‑End Developer learning React & JavaScript.</p>
                </div>
              </div>

              {/* RIGHT SIDE CONTACT */}
              <div className="flex flex-col gap-15 w-full items-center lg:items-end lg:-mr-12 justify-self-end">
                {/* Phone */}
                <a 
                  href="tel:9345698148"
                  className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span className="w-full text-center">9345698148</span>
                  <div className="w-6" />
                </a>

                {/* Email */}
                <a 
                  href="mailto:jayaneshanks@gmail.com"
                  className="font-mono text-[10px] sm:text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="w-full text-center truncate">jayaneshanks</span>
                  <div className="w-6" />
                </a>

                {/* Resume */}
                <a href="https://drive.google.com/file/d/1diMF42I5C_DJb3qCCLVL3_xB39paV89B/view?usp=sharing" target="_blank" rel="noreferrer">
                  <button 
                    className="font-mono text-xs uppercase tracking-widest border border-gray-300 bg-white/80 hover:-translate-y-1 transition-transform duration-200 rounded-lg h-12 w-56 grid grid-cols-[24px_1fr_24px] items-center text-center px-3 shadow-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="justify-self-start">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span className="w-full text-center">RESUME</span>
                    <div className="w-6" />
                  </button>
                </a>
              </div>
            </div>

            {/* FOLDERS FOOTER */}
            <div className="flex items-center justify-center gap-50 pb-20 flex-shrink-0">
              {['Projects', 'Skills', 'About'].map((folder) => (
                <button 
                  key={folder} 
                  onClick={() => setCurrentPage(folder.toLowerCase())} 
                  className="group flex flex-col items-center gap-2 hover:opacity-75 focus:outline-none"
                >
                  <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 99 99" fill="none" className="w-full h-full fill-black dark:fill-white">
                      <path d="M8.91 0C3.989 0 0 3.98925 0 8.91V87.12C0 93.6812 5.31932 99 11.88 99H87.12C93.6807 99 99 93.6812 99 87.12V20.79C99 14.2288 93.6807 8.91 87.12 8.91H55.52C51.1017 8.91 47.6171 4.6984 44.1638 1.94227C42.6408 0.726662 40.7103 0 38.61 0H8.91Z" />
                    </svg>
                  </div>
                  <span className="font-dot text-sm uppercase tracking-widest">{folder}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'projects' && <Projects />}
        {currentPage === 'skills' && <Skills />}
        {currentPage === 'about' && <About />}

      </main>
    </div>
  );
}