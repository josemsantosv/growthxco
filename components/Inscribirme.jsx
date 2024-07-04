import "../src/index.css";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabContent, setTabContent] = useState({
    tab1: (
      <div class="flex justify-center my-10">
                <div class="p-4 w-3/5 rounded-2xl overflow-hidden shadow-md border border-gray-500 h-60 text-center flex flex-col items-center justify-center gap-3">
                  <p class="text-red-500 line-through text-2xl">8.000 USD</p>
                  <p class="text-white mt-2 text-5xl font-semibold">
                    4.400 USD
                  </p>
                  <p className="text-gray-400">En un pago</p>
                </div>
            </div>
    ),
    tab2: (
      <div class="flex justify-center my-10">
          <div class="p-4 w-3/5 rounded-2xl overflow-hidden shadow-md border border-gray-500 h-60 text-center flex flex-col items-center justify-center gap-3">
            <p class="text-white mt-2 text-5xl font-semibold">
              1200 USD<span className="text-3xl">/mes</span>
            </p>
            <p className="text-gray-400">durante 6 meses</p>
            <p className="text-sm italic text-gray-400">
              Valor total: 8.000 USD
            </p>
          </div>
        </div>
    ),
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-[#030016]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-medium text-white py-12 tracking-wider	">
          Seleccionaremos a las personas que consideremos más dispuestas a
          lograr resultados reales.
        </h2>
        <div className="w-2/3 mx-auto p-10 bg-grey rounded-2xl shadow-lg">
          <div className="flex justify-center space-x-4">
            <button
              className={`px-16 text-base py-4 rounded-full border border-[#1cb9de] ${
                activeTab === "tab1"
                  ? "bg-[#17bae0] text-grey"
                  : "bg-grey text-[#17bae0]"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              En un pago
            </button>
            <button
              className={`px-16 text-base py-4 rounded-full border border-[#1cb9de] ${
                activeTab === "tab2"
                  ? "bg-[#17bae0] text-grey"
                  : "bg-grey text-[#17bae0]"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              En 6 cuotas
            </button>
          </div>

          <div>
            <div className="mt-4">{tabContent[activeTab]}</div>
            <div>
              <h2 className="text-center text-2xl font-bold py-6 text-white font-medium">
                ¿Qué incluye?
              </h2>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso por tiempo ilimitado al contenido del programa.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a 16 masterclass con emprendedores top.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Mentoría de Expertos líderes en la industria (Q&As semanales).</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a sesiones 1:1 con tus mentores del programa. Las que
                necesites para poder avanzar.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a +300 videos de entrenamiento de 10-20 minutos para que
                aprendas a tu ritmo. (Growth Marketing, Product management y
                Founder Way modules).</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a recursos y bibliografía recomendada.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a GrowthX Community en Circle para que puedas pitchear tu
                idea.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Acceso a la comunidad VIP de GrowthX por 1 año.</p>
                
              </div>
              <div className="text-base flex gap-4 pb-4">
                <img src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d14ca8e2e33453afcfd8b5_info-success%20(1).svg" alt="" />
                <p className="text-white ">Certificación de ‘Especialista’ al finalizar el programa con
                éxito.</p>
                
              </div>
            </div>            
          </div>

          

          <hr className="my-10 bg-[#030016] text-red" />

          <div>
            <h2 className="text-center text-2xl font-bold py-5 text-white font-medium">
              ¿Cómo es el proceso de inscripción?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-8">
                <div className="text-center">
                  <img className="bg-[#a5a5a5] rounded-full w-12 m-auto mb-4 p-2" src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d1023755751cc31412a80e_person-plus.svg" alt="" />
                  <h1 className="text-[#bdbdbd]">1.Agendas una entrevista de 45 minutos</h1>
                </div>
                <div className="text-center">
                  <img className="bg-[#a5a5a5] rounded-full w-12 m-auto mb-4 p-2" src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d102a355751cc31412d5d6_person-plus%20(1).svg" alt="" />
                  <h1 className="text-[#bdbdbd]">2.Evaluamos tu perfil y te respondemos en menos de 96hs</h1>
                </div>
                <div className="text-center">
                  <img className="bg-[#a5a5a5] rounded-full w-12 m-auto mb-4 p-2" src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d102c6b1eaeb5689d64071_coin-dollar.svg" alt="" />
                  <h1 className="text-[#bdbdbd]">3.Realizas el pago del programa</h1>
                </div>
                <div className="text-center">
                  <img className="bg-[#a5a5a5] rounded-full w-12 m-auto mb-4 p-2" src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65d102d2b274ca6722b3cf5d_rocket%20(1).svg" alt="" />
                  <h1 className="text-[#bdbdbd]">4.¡Comenzamos!</h1>
                </div>
            </div>

            <div className="text-center py-10">
              <button class="btn bg-[#17bae0] px-16 rounded-lg py-3 text-base text-white">Aplica ahora</button>
            </div>
            <div className="py-8 text-center">
                <div className="items-center flex justify-center gap-4">
                  <img  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65e5e5f715a6086061f5c25b_calendar.svg" alt="" />
                  <p className="text-white text-xl font-semibold">Comienza el 22 de Julio</p>                  
                </div>
                <p className="py-4 text-white">Cierre de inscripciones: 16 de Julio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
