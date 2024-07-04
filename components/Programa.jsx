const Programa = () => {

  const data = [
    {
      id: 1,
      title: "Fundamentos de Startups:",
      description:
        "Aprende sobre la selección de cofundadores, distribución de equidad, y mecanismos de financiación.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
    {
      id: 2,
      title: "Growth Marketing:",
      description:
        "Domina estrategias de adquisición efectivas y herramientas avanzadas de análisis.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
    {
      id: 3,
      title: "Gestión de Producto:",
      description:
        "Conviértete en un experto en el ciclo de vida del producto y metodologías ágiles.",
      href: "#",
      icon:'<svg width="50px" height="50px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 15.4V8.6C8 8.26863 8.26863 8 8.6 8H15.4C15.7314 8 16 8.26863 16 8.6V15.4C16 15.7314 15.7314 16 15.4 16H8.6C8.26863 16 8 15.7314 8 15.4Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4.6V19.4C20 19.7314 19.7314 20 19.4 20H4.6C4.26863 20 4 19.7314 4 19.4V4.6C4 4.26863 4.26863 4 4.6 4H19.4C19.7314 4 20 4.26863 20 4.6Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 12H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 7H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 17H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 12H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 7H2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    },
  ]

  return (
    <section className="bg-[#030016] py-24 text-black">
      <div className="flex justify-center items-center  bg-black mb-16 max-w-7xl px-3 m-auto">
        <div class=" mx-auto w-full grid grid-cols-1 gap-10 sm:grid-cols-3 bg-black">
          {data.map((item) => (
            <div class="bg-black rounded-lg overflow-hidden shadow-md border">
              <div class="py-12 px-4 text-center">
                <div className="flex justify-center pb-8">
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                <h2 class="text-2xl font-semibold text-white">{item.title}</h2>
                <p class="text-white mt-2 h-20">{item.description}</p>
                <div className="pt-6">
                  <a
                  className="rounded-lg text-[#17bae0] px-6 py-2 mt-4 hover:bg-[#17bae0] hover:text-white transition duration-300 ease-in-out" 
                   href={item.href}>Ver más</a>
                </div>               
              </div>
            </div>
          ))}          
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#17bae0] px-10 rounded-lg py-3 text-base text-white">
          Aplicá ahora
        </button>
      </div>

      <div></div>
    </section>
  );
};

export default Programa;
