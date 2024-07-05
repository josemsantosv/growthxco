import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "../components/Header";
import Programa from "../components/Programa";
import SeccionHero from "../components/SeccionHero";
import SobreNosotros from "../components/SobreNosotros";
import Instructores from "../components/Instructores";
import Testimonios from "../components/Testimonios";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

import Beneficios from "../components/Beneficios";
import Tabs from "../components/Inscribirme";

const MainApp = () => {
  return (
    <>
      <Header />
      <main>
        <SeccionHero />
        <SobreNosotros />
        <Programa />
        <Accordion />
        <Beneficios />
        <Instructores />
        <Testimonios />
        <Tabs />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
