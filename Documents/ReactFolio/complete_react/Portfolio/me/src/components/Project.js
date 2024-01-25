// import "./Project.css";


// // Projects.js

// import React from 'react';
// import Project from './Project'; // Assuming you have a Project component

// const Projects = () => {
//   const projectsData = [
//     {
//       title: 'TestyGo - Online Food Delivery Service',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       title: 'E-commerce Website using React',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h2>Projects</h2>
//       <div className="projects-list">
//         {projectsData.map((project, index) => (
//           <Project
//             key={index}
//             title={project.title}
//             description={project.description}
//             backgroundColor={index % 2 === 0 ? 'red' : 'orange'}
//           />
//         )
//         )} 
//       </div>
//     </div>
//   );
// };

// export default Projects;

// Project.js
import React from 'react';
import './Project.css'; // Import your CSS file for styling

const Project = ({ title, description, technologies, designConsiderations }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Key Technologies:</strong> {technologies}</p>
      <p>{designConsiderations}</p>
    </div>
  );
}

// Projects.js

//import Project from './Project'; // Import the Project componen
 // Import your CSS file for styling

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <Project
        title="TestyGo - Online Food Delivery Service"
        description="An online platform for food enthusiasts to explore a variety of cuisines and have their favorite dishes delivered to their doorstep."
        technologies="React, Node.js, Express, MongoDB, javascript"
        designConsiderations="Implemented responsive design for seamless user experience on various devices."
      />

      <Project
        title="Portfolio Website using React"
        description="A personal portfolio website showcasing my skills, projects, and achievements as a web developer."
        technologies="React, HTML, CSS ,javaScript"
        designConsiderations="Designed with a minimalist approach, ensuring a clean and user-friendly interface. Implemented responsive design for optimal viewing on all screen sizes."
      />

      <Project
        title="E-commerce Website using React"
        description="An e-commerce platform developed using React to provide users with a seamless online shopping experience."
        technologies="React, Redux, CSS,javascript"
        designConsiderations="Utilized box-sizing for project cards and applied a vibrant CSS color scheme for an engaging visual experience. Ensured responsiveness across various screen sizes."
      />
       <Project
        title="Password Generator"
        description="A Password Generator is a tool that creates strong and secure passwords with a mix of alphanumeric characters symbols and varying lengths It is designed to enhance security by generating complex passwords "
        technologies="React, , CSS,javascript"
        designConsiderations="When designing a Password Generator, several considerations must be taken into account:\n\n1. **Security:** Ensure that the generated passwords are truly random and follow best practices for cryptographic strength."
      />
    </section>
  );
}




export default Projects;
