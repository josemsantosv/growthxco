import React, { useEffect, useState } from 'react';

import '../src/App.css'
import '../src/styles/syllabus.css'

const Syllabus = () => {

  const [isLocked, setIsLocked] = useState(true);
  const [initialTop, setInitialTop] = useState(0);

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    const sideBottom = sidebar.offsetTop + sidebar.offsetHeight;
    const inicio = container.offsetTop ;
    const alturaTotal = container.offsetTop + container.offsetHeight;

    setInitialTop(sideBottom);

    const handleScroll = () => {
      console.log(window.scrollY + sideBottom )
      console.log(inicio )
      if (window.scrollY + sideBottom > inicio) {
        setIsLocked(true);
      } else {
        setIsLocked(false);
      }

      if (window.scrollY + sideBottom > alturaTotal ) {
        setIsLocked(false);
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 text-black bg-white">
      <div className="flex col justify-center gap-10 container" id=''>
        <div className="col-left" id=''> 
        <div 
          className={`sidebar ${isLocked ? '' : 'lock'}`} 
          style={{ top: isLocked ? `${initialTop}px` : '50px' }}
        >
          <button>Mes 1</button>
          <p className="text-4xl font-semibold ">Fundamentos y Growth Marketing</p>
          </div>
          
        </div>
        
        <div className="col-right" id=''>
          <h2>Semana 1-2: Introducción General</h2>
          <p className="py-24">Introducción al Mundo Startup</p>
          <p className="py-24">Roles y Responsabilidades en una Startup</p>
          <p className="py-24">Roles y Responsabilidades en una Startup</p>
          <h2>Semana 3-4: Fundamentos de Startups</h2>
          <p className="py-24">Selección de Cofundadores y Distribución de Equidad</p>
          <p className="py-24">Tipos de Sociedades y Base de Radicación</p>
          <p className="py-24">Mecanismos de Financiación</p>
          <h2>Introducción al Growth Marketing</h2>
          <p className="py-24">Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</p>
          <p className="py-24">Medición y Atribución (Google Tag Manager, Google Analytics 4)</p>
          <h2>Semana 7-8: Growth Marketing (Parte 2)</h2>
          <p className="py-24">Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</p>
          <p className="py-24">Medición y Atribución (Google Tag Manager, Google Analytics 4)</p>
        </div>
      </div>


    </section>
    
  );
};

export default Syllabus;
