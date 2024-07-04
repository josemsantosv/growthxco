import '../src/App.css'

const Syllabus = () => {
  return (
    <section className="py-24 text-black bg-white">
      <div className="flex col justify-center gap-10" id='boxSection'>
        <div id='boxOne'> 
          <button>Mes 1</button>
          <p className="text-4xl font-semibold ">Fundamentos y Growth Marketing</p>
        </div>
        
        <div id='boxTwo'>
          <h2>Semana 1-2: Introducción General</h2>
          <p>Introducción al Mundo Startup</p>
          <p>Roles y Responsabilidades en una Startup</p>
          <p>Roles y Responsabilidades en una Startup</p>
          <h2>Semana 3-4: Fundamentos de Startups</h2>
          <p>Selección de Cofundadores y Distribución de Equidad</p>
          <p>Tipos de Sociedades y Base de Radicación</p>
          <p>Mecanismos de Financiación</p>
          <h2>Introducción al Growth Marketing</h2>
          <p>Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</p>
          <p>Medición y Atribución (Google Tag Manager, Google Analytics 4)</p>
          <h2>Semana 7-8: Growth Marketing (Parte 2)</h2>
          <p>Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</p>
          <p>Medición y Atribución (Google Tag Manager, Google Analytics 4)</p>
        </div>
      </div>



    </section>
    
  );
};

export default Syllabus;
