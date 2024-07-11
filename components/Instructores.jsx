import React from "react";

const data = [
  {
    id: 1,
    title: "Matías Carrera",
    description:
      "Crecí junto a las herramientas hoy líderes, las vi hacerse grandes de cerca y por eso sé cómo hacer que cualquier empresa brille con ellas.",
    description2:
      "Mi pasión por estar siempre a la vanguardia me llevó a conocer a fondo el mundo de la Inteligencia Artificial: una tendencia para muchos, una nueva herramienta para mi.",
    description3: "",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
  {
    id: 2,
    title: "Juanjo Mostazo",
    description:
      "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
  {
    id: 3,
    title: "Juanjo Mostazo",
    description:
      "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
  {
    id: 4,
    title: "Juanjo Mostazo",
    description:
      "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
  {
    id: 5,
    title: "Juanjo Mostazo",
    description:
      "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
  {
    id: 6,
    title: "Juanjo Mostazo",
    description:
      "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
    image:
      "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
    alt: "Instructores",
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="card group">
      <div className="overflow-hidden rounded-md">
        <img
          className="rounded-md group-hover:scale-110 duration-500 ease-in-out grayscale group-hover:grayscale-0"
          src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png"
          alt="Instructores"
        />
      </div>
      <div className="pt-8">
        <h3 className="text-2xl text-[#f5f5dc] pb-2">Matías Carrera</h3>
        <p className="text-[#f5f5dc]">
          Escaló Homa Games a 250+ empleados, +100M de facturación y levantó
          rondas de financiación por valor de 100m+.
        </p>
      </div>
    </div>
  );
};

function Instructores() {
  return (
    <section
      id="instructores"
      className="border-t-[1px] border-[#6d6d6d] bg-[#030016] py-20 HeroSection text-white py-20 HeroSection text-white flex items-center justify-items-center"
    >
      <div className="max-w-7xl px-3 m-auto flex flex-col items-center mx-auto justify-items-center">
        <h2 className="mb-10 mt-7 text-4xl md:text-8xl font-bold text-center anton-sc-regular text-[#f5f5dc]">
          Conoce a Nuestros Expertos
        </h2>
        <p className="text-lg text-center text-[#f5f5dc] mb-10">
          Aprende de los mejores en la industria. Nuestro cuerpo docente incluye
          líderes en growth marketing, gestión de productos y fundación de
          startups. Traen una gran experiencia y conocimientos para ayudarte a
          tener éxito.
        </p>

        <div className="grid md:grid-cols-3 gap-8 py-12 px-8 md:p-0">
          {/* {data.map((item) => (
                <Card  key={item.id} {...item} />
            ))}  */}
          <div className="card group">
            <div className="overflow-hidden rounded-md">
              <img
                className="rounded-md group-hover:scale-110 duration-500 ease-in-out grayscale group-hover:grayscale-0"
                src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png"
                alt="Instructores"
              />
            </div>
            <div className="pt-8">
              <h3 className="text-2xl text-[#f5f5dc] pb-2">Matías Carrera</h3>
              <p className="text-[#f5f5dc]">
                Crecí junto a las herramientas hoy líderes, las vi hacerse
                grandes de cerca y por eso sé cómo hacer que cualquier empresa
                brille con ellas.
              </p>
              <p className="text-[#f5f5dc]">
                Mi pasión por estar siempre a la vanguardia me llevó a conocer a
                fondo el mundo de la Inteligencia Artificial: una tendencia para
                muchos, una nueva herramienta para mi.
              </p>
              <ul
                class="pt-6 text-[#f5f5dc] list-disc list-inside space-y-4 text-justify md:text-left"
                id="listDisc"
              >
                <li class="text-base">
                3 negocios co-fundados
                </li>
                <li class="text-base">
                5 startups de las que formé parte
                </li>
                <li class="text-base">
                +1 millón de users superados

                </li>
                <li class="text-base">
                +12 equipos de alto rendimiento gestionando más de 5 millones de USD en pauta

                </li>
                <li class="text-base">
                +10 años de experiencia ayudando a crecer empresas en diferentes mercados: Fintech, Adtech, Edtech y Social Media”

                </li>                
              </ul>
            </div>
          </div>
          <div className="card group">
            <div className="overflow-hidden rounded-md">
              <img
                className="rounded-md group-hover:scale-110 duration-500 ease-in-out grayscale group-hover:grayscale-0"
                src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png"
                alt="Instructores"
              />
            </div>
            <div className="pt-8">
              <h3 className="text-2xl text-[#f5f5dc] pb-2">Jan Kostadinov</h3>
              <p className="text-[#f5f5dc]">
              Co-Founder & CEO de GrowthX y Bookster App
              </p>
              <p className="text-[#f5f5dc]">
              Como Head of Partnerships, Affiliate y SEO, llevé la extensión de Speechify para Chrome de 20.000 a más de 2.000.000 de usuarios. Mis campañas virales lograron un increíble ROI superior al 1000%, contribuyendo al objetivo de la empresa de más de 20 millones de instalaciones.
              </p>              
            </div>
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-center text-lg font-semibold leading-8 text-[#f5f5dc]">
            Empresas y Universidades Asociadas
          </h2>
          <div className="mx-auto px-8 md:px-0 mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
              alt="Transistor"
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
              alt="Transistor"
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
              alt="Transistor"
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
              alt="Transistor"
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
              alt="Transistor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructores;
