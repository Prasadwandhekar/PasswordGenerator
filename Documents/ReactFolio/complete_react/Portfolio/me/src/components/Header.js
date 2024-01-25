// import React, { useState, useEffect } from 'react';
// import "./Header.css";
// import { IoClose } from "react-icons/io5";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { Link } from "react-router-dom";
// import { useWindowSize } from 'react-use';

// const Header = () => {
//     const [active, setActive] = useState(false);
//     const { width } = useWindowSize();

//     const showMenu = () => {
//         setActive(!active);
//     }

//     useEffect(() => {
//         // Close the menu when the window is resized beyond 700px
//         if (width > 700) {
//             setActive(false);
//         }
//     }, [width]);

//     return (
//         <div>
//             <div className={`header ${active ? 'active' : ''}`}>
//                 <div className='logo'>
//                     <h1>Prasad Wandhekar</h1>
//                 </div>
//                 {/* <TfiMenuAlt onClick={showMenu} /> */}
//                 {/* <TfiMenuAlt className={`menu ${active ? 'active' : 'active'}`} onClick={showMenu} /> */}

//                 <nav>
//                     <div className='closed'>
//                         <IoClose className="close" onClick={showMenu} />
//                     </div>
//                     <TfiMenuAlt className={`menu ${active ? 'active' : 'active'}`} onClick={showMenu} />
//                     <ul className={`nav-links ${active ? 'active' : ''}`}>
//                         <li>
//                             <Link to="/" onClick={showMenu}><b>Home</b></Link>
//                         </li>
//                         <li>
//                             <Link to="/About" onClick={showMenu}><b>About</b></Link>
//                         </li>
//                         <li>
//                             <Link to="/Portfolio" onClick={showMenu}><b>Portfolio</b></Link>
//                         </li>
//                         <li>
//                             <Link to="/Blog" onClick={showMenu}><b>Blog</b></Link>
//                         </li>
//                         <li>
//                             <Link to="/Contact" onClick={showMenu}><b>Contact</b></Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <div className='changer'>
//                     {/* <TfiMenuAlt className="menu" onClick={showMenu} /> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for smooth scrolling
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  // const skillsRef = useRef(null);
  // const educationRef = useRef(null);

  // Function to handle smooth scrolling
  // const scrollToRef = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

    
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   setScrolled(offset > 50); // Change this value as needed
  // };

  // Effect hook to add scroll event listener
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
   
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: 2890,
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  };

  const scrollToTopeducation = () => {
    window.scrollTo({
      top: 1600,
      behavior: 'smooth',
    });
  };

  const scrollToProject = () => {
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="header">
      <Link to="/" className="title">
        Prasad Wandhekar
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li onClick={scrollToHome}>
          <NavLink to="/about">Home</NavLink>
        </li>
        <li onClick={scrollToProject}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={scrollToSkills}>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li onClick={scrollToTopeducation}>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li onClick={scrollToContact}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
