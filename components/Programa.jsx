const Programa = () => {

  const data = [
    {
      id: 1,
      title: "Crecimiento Exponencial para Startups:",
      description:
        "Nuestro programa de Growth Marketing está diseñado para transformar a los profesionales en expertos en estrategias de adquisición y retención de usuarios. Aprenderás a dominar técnicas avanzadas de marketing digital, incluyendo Meta Ads, Google Ads, SEO, y marketing de influencers. El programa te equipará con las herramientas necesarias para medir y atribuir resultados, mejorar la retención de usuarios y maximizar la monetización. Ideal para aquellos que buscan impulsar el crecimiento de startups y llevar sus habilidades de marketing al siguiente nivel.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#f5f5dc"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
    {
      id: 2,
      title: "Innovación y Gestión de Producto en Startups:",
      description:
        "El programa de Product Management de GrowthX College está enfocado en formar líderes capaces de gestionar el ciclo de vida completo de un producto, desde su descubrimiento hasta su lanzamiento. Aprenderás metodologías ágiles, análisis de datos, diseño UI/UX y cómo coordinar equipos de producto. Este programa está diseñado para aquellos que desean sobresalir en roles de gestión de productos dentro de startups, ofreciendo una comprensión profunda de las estrategias y herramientas necesarias para crear productos exitosos.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#f5f5dc"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
    {
      id: 3,
      title: "El Camino del Fundador de Startups:",
      description:
        "Nuestro programa para fundadores está diseñado para aquellos que desean iniciar y liderar sus propias startups. Aprenderás sobre la selección de cofundadores, distribución de equidad, tipos de sociedades y mecanismos de financiación. Además, desarrollarás habilidades esenciales de liderazgo, gestión de equipos y creación de una cultura empresarial sólida. Este programa es ideal para futuros emprendedores que buscan navegar y sobresalir en el ecosistema startup, proporcionándoles el conocimiento y las herramientas para llevar sus ideas desde la concepción hasta el éxito.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#f5f5dc"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#f5f5dc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
  ]

  return (
    <section id="programa" className="bg-[#030016] py-24 text-black">
      <div className="flex justify-center items-center  bg-black mb-16 max-w-7xl px-12 md:px-3 m-auto">
        <div class=" mx-auto w-full grid grid-cols-1 gap-10 sm:grid-cols-3 bg-black">
          {data.map((item) => (
            <div key={item.id} class="bg-black rounded-lg overflow-hidden shadow-md border">
              <div class="py-12 px-4 text-center">
                <div className="flex justify-center pb-8">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                <h2 class="text-2xl font-semibold text-[#f5f5dc]">{item.title}</h2>
                <p class="mt-4 text-[#f5f5dc] text-justify">{item.description}</p>
                <div className="pt-6">
                  <a
                  className="rounded-lg text-[#f5f5dc] px-6 py-2 mt-4 hover:bg-[#4C1C24] hover:text-white transition duration-300 ease-in-out" 
                   href={item.href}>Ver más</a>
                </div>               
              </div>
            </div>
          ))}          
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#4C1C24] px-10 rounded-lg py-3 text-base text-white">
          Aplicá ahora
        </button>
      </div>

      <div></div>
    </section>
  );
};

export default Programa;
