import React from 'react';
import "./Main.css";
import About from '../About/About';
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme';
import ContactMe from '../../pages/ContactMe/ContactMe';


const Main = () => {
  return (
    <div className="my-app">
      <ToggleTheme/>
      <About/>
      <ContactMe/>
    </div>
  )
}

export default Main