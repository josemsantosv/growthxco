
// Initialization for ES Users
import {
  Collapse,
  initTWE,
} from "tw-elements";

initTWE({ Collapse });

const Acordeon = () => {
  return (
    <div className="pt-20 pb-10">
          <h2 className="mb-10 text-5xl font-bold text-center text-white mt-7 anton-sc-regular">
          Temario por Semana
        </h2>     
    <div id="accordionExample" className="w-4/5 mx-auto bg-black">
  <div
    class="rounded-t-lg border border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="mb-0" id="headingOne">
      <button
        class="group relative flex w-full items-center rounded-t-lg font-bold border-gray-600 border-b-2 bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        Mes 1: Fundamentos y Growth Marketing
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      class="!visible"
      data-twe-collapse-item
      data-twe-collapse-show
      aria-labelledby="headingOne"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4 text-white">
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
  </div>
  <div
    class="border border-t-0 border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="mb-0" id="headingTwo">
      <button
        class="font-bold border-gray-600 border-b-2 group relative flex w-full items-center bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        Mes 2: Gestión de Producto y Habilidades de Liderazgo
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingTwo"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4 text-white">
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
  </div>
  <div
    class="rounded-b-lg border border-t-0 border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button
        class=" border-gray-600 border-b-2 font-bold data-[twe-collapse-collapsed] group relative flex w-full items-center bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
        Mes 3: Herramientas Esenciales y Ventas
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseThree"
      class="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingThree"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4 text-white">
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
  </div>
  <div
    class="rounded-b-lg border border-t-0 border-neutral-200 bg-black dark:border-neutral-600 dark:bg-body-dark">
    <h2 class="accordion-header mb-0" id="headingFour">
      <button
        class="border-gray-600 border-b-2 font-bold data-[twe-collapse-collapsed] group relative flex w-full items-center  bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
        Mes 4: Experiencia Práctica y Proyecto Final
        <span
          class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseFour"
      class="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingFour"
      data-twe-parent="#accordionExample">
      <div class="px-5 py-4 text-white">
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
  </div>
</div>
</div>
  );

};


export default Acordeon;
