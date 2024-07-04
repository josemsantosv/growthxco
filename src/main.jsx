import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import  Header  from "../components/Header";
import  Programa  from "../components/Programa";
import  SeccionHero  from "../components/SeccionHero";
import  SobreNosotros from "../components/SobreNosotros";
import Testimonios from '../components/Testimonios';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Header/>
    <SeccionHero/>
    <SobreNosotros/>
    <Programa/>
    <Testimonios/>
    <Programa/>
  </React.StrictMode>,
)
