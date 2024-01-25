import React from 'react'
import './App.css';
import  Header from "../src/components/Header"
import Main from "./components/Main"
import Section from "./components/Section";
import Contact from "./components/Contact";
 import Project from './components/Project';
 import Education from './components/Education';
 import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
        <Education/>
     <Project/> 
     <Toaster/>
      <Contact/>
    </div>
  );
}

export default App;
