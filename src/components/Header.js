import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
      <nav className="sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://www.youtube.com/watch?v=CDo1G5IsA68&ab_channel=SophiaZhuang"
            className="flex items-center">
            <div className="self-center text-xl font-semibold font-domine">SZ.</div>
          </a>
          <button
            onClick={handleToggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>

          <div
            className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 font-montserrat">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Story"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
                  Story
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-500 rounded rounded hover:underline hover:text-pink-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
//       <nav className="sm:px-4 py-2.5">
//         <div className="container flex flex-wrap items-center justify-between mx-auto">
//           <a href="/" className="flex items-center">
//             <div className="self-center text-xl font-semibold font-domine">SZ.</div>
//           </a>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-default"
//             aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               aria-hidden="true"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"></path>
//             </svg>
//           </button>

//           <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 font-montserrat">
//               <li>
//                 <a
//                   href="/"
//                   className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/Story"
//                   className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
//                   Story
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/projects"
//                   className="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400">
//                   Projects
//                 </a>
//               </li>
//               {/* <li>
//                 <a
//                   href="/resume"
//                   class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:underline hover:text-pink-400"
//                 >
//                   Resume
//                 </a>
//               </li> */}
//               <li>
//                 <a
//                   href="/contact"
//                   className="block py-2 pl-3 pr-4 text-gray-500 rounded rounded hover:underline hover:text-pink-400">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
