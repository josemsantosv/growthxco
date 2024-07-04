import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from "../components/Header";
import Programa from "../components/Programa";
import SeccionHero from "../components/SeccionHero";
import SobreNosotros from "../components/SobreNosotros";

import Syllabus from '../components/Syllabus';
import Beneficios from '../components/Beneficios';
import Tabs from '../components/Inscribirme'

const MainApp = () => {


  return (
    <>
      <Header />
      <SeccionHero />
      <SobreNosotros />
      <Programa />
      <Syllabus />
      <Beneficios />
      
     
      <Tabs/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
