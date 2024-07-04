import { div } from "three/examples/jsm/nodes/Nodes.js";
import "../src/index.css";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabContent, setTabContent] = useState({
    tab1: (
      <ul className="list-disc list-inside text-white space-y-5">
        <div class="flex justify-center my-10">
          <div class="p-4 w-2/5 rounded-2xl overflow-hidden shadow-md border border-gray-500 h-60 text-center flex flex-col items-center justify-center gap-3">
          <p>Individual</p>
            <p class="text-white mt-2 text-5xl font-semibold">4400 USD<span className="text-3xl">/mes</span></p>
            <p className="text-gray-400">En un pago</p>
            <p className="text-sm italic text-gray-400">Valor total: 2.250 USD</p>

           
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold py-5">¿Qué incluye?</h2>
        <li className="text-xl">Acceso por tiempo ilimitado al contenido del programa.</li>
        <li className="text-xl">Acceso a 16 masterclass con emprendedores top.</li>
        <li className="text-xl">Mentoría de Expertos líderes en la industria (Q&As semanales).</li>
        <li className="text-xl">Acceso a sesiones 1:1 con tus mentores del programa. Las que necesites para poder avanzar.</li>
        <li className="text-xl">
          Acceso a +300 videos de entrenamiento de 10-20 minutos para que aprendas a tu ritmo. (Growth Marketing, Product management y Founder Way modules).
        </li>
        <li className="text-xl">Acceso a recursos y bibliografía recomendada.</li>
        <li className="text-xl">Acceso a GrowthX Community en Circle para que puedas pitchear tu idea.</li>
        <li className="text-xl">Acceso a la comunidad VIP de GrowthX por 1 año.</li>
        <li className="text-xl">Certificación de ‘Especialista’ al finalizar el programa con éxito.</li>
      </ul>
    ),
    tab2: (
      <ul className="list-disc list-inside text-white space-y-5">
        <div class="flex justify-center my-10">
          <div class="p-4 w-2/5 rounded-2xl overflow-hidden shadow-md border border-gray-500 h-60 text-center flex flex-col items-center justify-center gap-3">
          <p>Individual</p>
            <p class="text-white mt-2 text-5xl font-semibold">1200 USD<span className="text-3xl">/mes</span></p>
            <p className="text-gray-400">En un pago</p>
            <p className="text-sm italic text-gray-400">Valor total: 2.250 USD</p>

           
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold py-5">¿Qué incluye?</h2>
        <li className="text-xl">Acceso por tiempo ilimitado al contenido del programa.</li>
        <li className="text-xl">Acceso a 16 masterclass con emprendedores top.</li>
        <li className="text-xl">Mentoría de Expertos líderes en la industria (Q&As semanales).</li>
        <li className="text-xl">Acceso a sesiones 1:1 con tus mentores del programa. Las que necesites para poder avanzar.</li>
        <li className="text-xl">
          Acceso a +300 videos de entrenamiento de 10-20 minutos para que aprendas a tu ritmo. (Growth Marketing, Product management y Founder Way modules).
        </li>
        <li className="text-xl">Acceso a recursos y bibliografía recomendada.</li>
        <li className="text-xl">Acceso a GrowthX Community en Circle para que puedas pitchear tu idea.</li>
        <li className="text-xl">Acceso a la comunidad VIP de GrowthX por 1 año.</li>
        <li className="text-xl">Certificación de ‘Especialista’ al finalizar el programa con éxito.</li>
      </ul>
    ),
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-2/3 mx-auto mt-5 p-10 bg-grey rounded-2xl shadow-lg">
      <div className="flex justify-center space-x-4">
        <button
          className={`px-16 text-base py-4 rounded-full border border-verde ${activeTab === "tab1" ? "bg-verde text-grey" : "bg-grey text-verde"}`}
          onClick={() => handleTabClick("tab1")}
        >
          En un pago
        </button>
        <button
          className={`px-16 text-base py-4 rounded-full border border-verde ${activeTab === "tab2" ? "bg-verde text-grey" : "bg-grey text-verde"}`}
          onClick={() => handleTabClick("tab2")}
        >
          En ‘x’ cuotas
        </button>
      </div>
      <div className="mt-4">{tabContent[activeTab]}</div>
    </div>
  );
}

export default Tabs;
