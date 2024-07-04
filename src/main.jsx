import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from "../components/Header";
import Programa from "../components/Programa";
import SeccionHero from "../components/SeccionHero";
import SobreNosotros from "../components/SobreNosotros";
import Testimonios from '../components/Testimonios';
import Syllabus from '../components/Syllabus';
import { scrollSidebar } from '../components/scrollSidebar';

const MainApp = () => {
  useEffect(() => {
    scrollSidebar();
  }, []);

  return (
    <>
      <Header />
      <SeccionHero />
      <SobreNosotros />
      <Programa />
      <Syllabus />
      <Testimonios />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
