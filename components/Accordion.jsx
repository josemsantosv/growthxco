// Importa useState desde React
import React, { useState } from 'react';

const Accordion = () => {
  // Estado para controlar qué sección del acordeón está seleccionada
  const [selected, setSelected] = useState(null);

  // Función para alternar entre expandir y contraer la sección del acordeón
  const toggleAccordion = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          {/* Acordeón */}
          <div className="mb-8 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
            <ul>
              {/* Primer elemento del acordeón */}
              <li className="border-b border-gray-200">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left transition duration-300 ease-in-out"
                  onClick={() => toggleAccordion(1)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium"> Mes 1: Fundamentos y Growth Marketing</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform ${
                        selected === 1 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selected === 1 ? 'h-auto' : 'h-0'
                  }`}
                >
                    <div class="px-5 py-4 text-black">
     <ul className="space-y-3 text-base list-disc list-inside">
      <h2 className="font-semibold">Semana 1-2: Introducción General</h2>
      <li>Introducción a GrowthX College</li>
       <li>Introducción al Mundo Startup</li>
       <li>Roles y Responsabilidades en una Startup</li>
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside">
      <h2 className="font-semibold">Semana 3-4: Fundamentos de Startups</h2>
      <li>Selección de Cofundadores y Distribución de Equidad</li>
       <li>Tipos de Sociedades y Base de Radicación</li>
       <li>Mecanismos de Financiación</li>
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside">
      <h2 className="font-semibold">Semana 5-6: Growth Marketing (Parte 1)</h2>
      <li>Introducción al Growth Marketing</li>
       <li>Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</li>
       <li>Medición y Atribución (Google Tag Manager, Google Analytics 4)</li>
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside">
      <h2 className="font-semibold">Semana 7-8: Growth Marketing (Parte 2)</h2>
      <li>Marketing de Ciclo de Vida (Activación, Retención, Churn, Referidos, Monetización)</li>
       <li>Estrategias y Herramientas Avanzadas de Crecimiento (Martech, IA para Growth)</li>
 
     </ul>
      </div>
                </div>
              </li>
             
              <li className="border-b border-gray-200">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left transition duration-300 ease-in-out"
                  onClick={() => toggleAccordion(2)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Mes 2: Gestión de Producto y Habilidades de Liderazgo</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform ${
                        selected === 2 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selected === 2 ? 'h-auto' : 'h-0'
                  }`}
                >
                                  <div class="px-5 py-4 text-black">
      <ul className="space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 9-10: Gestión de Producto (Parte 1)</h2>
      <li>Introducción a la Gestión de Producto</li>
       <li>Metodologías Ágiles</li>
       <li>Diseño UI/UX</li>
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 11-12: Gestión de Producto (Parte 2)</h2>
      <li>Marketing de Producto</li>
       <li>Coordinación de Equipos de Producto</li>
       <li>Fundamentos de Frontend y Backend</li>
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 13-14: Habilidades de Liderazgo</h2>
      <li>Selección de Cofundadores y Construcción de Equipos</li>
       <li>Habilidades de Networking y Pitch</li>
       <li>Fundamentos Financieros y Legales</li>
       <li>Gestión de Crisis</li>
     </ul>
      </div>
                </div>
              </li>
              <li className="border-b border-gray-200">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left transition duration-300 ease-in-out"
                  onClick={() => toggleAccordion(3)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Mes 3: Herramientas Esenciales y Ventas</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform ${
                        selected === 3 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selected === 3 ? 'h-auto' : 'h-0'
                  }`}
                >
                  <div class="px-5 py-4 text-black">
      <ul className="space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 15-16: Herramientas y Habilidades Esenciales</h2>
      <li>Dominio del Inglés</li>
       <li>Excel y Google Suite</li>
       <li>Herramientas de Comunicación (Slack, Discord)</li>
     
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 17-18: Ventas (Parte 1)</h2>
      <li>Introducción a las Ventas en Startups</li>
       <li>Técnicas de Venta y Negociación</li>
       <li>Psicología del Cliente y Comportamiento del Consumidor</li>
     
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 19-20: Ventas (Parte 2)</h2>
      <li>Uso de CRM y Gestión de Clientes.</li>
       <li>Automatización de Ventas con Herramientas Digitales.</li>
       <li>Análisis de Datos para Ventas.</li>
     
     </ul>
      </div>
                </div>
              </li>
              <li className="border-b border-gray-200">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left transition duration-300 ease-in-out"
                  onClick={() => toggleAccordion(4)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Mes 4: Experiencia Práctica y Proyecto Final</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform ${
                        selected === 4 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    selected === 4 ? 'h-auto' : 'h-0'
                  }`}
                >
               <div class="px-5 py-4 text-black">
      <ul className="space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 21-22: Experiencia Práctica en Ventas</h2>
      <li>Simulaciones de Venta</li>
       <li>Casos Prácticos y Estudios de Caso</li>
       <li>Talleres con Expertos en Ventas</li>
     
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-semibold">Semana 23-24: Proyecto Final</h2>
      <li>Revisión de lo Aprendido</li>
       <li>Planificación y Desarrollo de Proyectos Individuales</li>
       <li>Presentación Final de Proyectos</li>
     
     </ul>
     <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
      <h2 className="font-bold">Día 120: Graduación</h2>
      <h2 className="font-semibold">Presentación del Proyecto Personal:</h2>
      <li>Investigación sobre una Startup a la que el estudiante desea ingresar.</li>
       <li>Análisis y Plan de Ingreso como entregable sujeto a evaluación</li>
       <li>Los proyectos con mejor puntuación serán enviados directamente a los Founders por GrowthX College.</li>
     
     </ul>
      </div>
                </div>
              </li>
            </ul>
          </div>

     
        </div>
      </div>
    </div>
  );
};

export default Accordion;
