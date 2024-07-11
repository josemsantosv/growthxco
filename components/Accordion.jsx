import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-[#030016] mt-7 anton-sc-regular">
        Temario por Semana
      </h2>
      <div className="mx-auto w-full max-w-5xl divide-y divide-white/5 rounded-xl bg-[#030016]">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:md:text-xl font-medium text-[#f5f5dc] group-data-[hover]:text-[#f5f5dc]/80">
              Introducción 3 carreras
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-[#f5f5dc]/50">
            <div class="px-5 py-4 text-[#f5f5dc]">
              <ul className="space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Introducción a todo el programa
                </h2>
                <li>Introducción al programa, cómo va a conformarse.</li>
                <li>Actividades y sesiones en vivo.</li>
                <li>Comunidad y Networking.</li>
                <li>Clases de consultas y prácitcas.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Introducción al mundo Startup</h2>
                <li>¿Qué es una Startup?</li>
                <li>Fases y etapas de las Startups.</li>
                <li>Introducción a las rondas de financiamiento.</li>
                <li>Casos de éxitos y unicornios.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Introducción a roles del programa ¿Cómo se relaciona cada rol
                  con el mundo Startup?
                </h2>
                <li>
                  Introducción al programa de Growth Manager ¿Qué se va a ver?
                  ¿Cuál es su rol?
                </li>
                <li>
                  Introducción al programa de Product Director ¿Qué se va a ver?
                  ¿Cuál es su rol?
                </li>
                <li>
                  Introducción al programa Founder Way ¿Qué se va a ver? ¿Cuál
                  es su rol?
                </li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:md:text-xl font-medium text-[#f5f5dc] group-data-[hover]:text-[#f5f5dc]/80">
              Growth General
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-[#f5f5dc]/50">
            <div class="px-5 py-4 text-[#f5f5dc]">
              <ul className="space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Introducción Growth Marketing</h2>
                <li>¿Qué es el growth marketing?</li>
                <li>Growth Marketing: 7 maneras de aplicarlo</li>
                <li>Modelos de datos: North Star Metrics, Startup Metrics</li>
                <li>KPI & definiciones</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Adquisición Introducción</h2>
                <li>Qué es adquisición y cómo funciona</li>
                <li>¿Qué canales existen?</li>
                <li>Atribución: Qué es y cómo funciona</li>
                <li>Atribución: Qué modelos existen</li>
                <li>Cómo diseñar creatividades que performen</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Adquisición - Meta Ads</h2>
                <li>
                  Meta Ads (Facebook & Instagram): un recorrido por la
                  plataforma
                </li>
                <li>Formatos que funcionan</li>
                <li>Instalar un pixel y medir las conversiones</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Adquisición - Google Ads</h2>
                <li>Google Ads & Search: Qué es y cómo funciona</li>
                <li>
                  Youtube Ads, Google Ads & Display: Qué es y cómo medir
                  resultados
                </li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Adquisición - SEO</h2>
                <li>Introducción a SEO</li>
                <li>SEO técnico</li>
                <li>Tipos de SEO</li>
                <li>Keyword research: ¿Por dónde empiezo?</li>
                <li>Content calendar: ¿Cómo crear uno?</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Adquisición - SEO ll</h2>
                <li>Optimización on page, relevación y blindaje</li>
                <li>Optimización off page & autoridad de un sitio web</li>
                <li>Local SEO & estrategias de nichos</li>
                <li>Youtube SEO & WordPress SEO</li>
                <li>ASO: Top 3 tools</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Medición y atribución: Google Tag Manager
                </h2>
                <li>Introducción a GTM: Qué es y cómo instalarlo</li>
                <li>Tag, Trigger & Variable: ¿Qué son? ¿Cómo se relacionan?</li>
                <li>Variables: Qué son y cómo funcionan</li>
                <li>Acercamiento a los Triggers: Qué son y para qué sirven</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Medición y atribución: Google Tag Manager ll
                </h2>
                <li>Etiquetas avanzadas Google Tag Manager</li>
                <li>Cómo crear etiquetas Javascipt + html con Chat GPT</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Medición y atribución: ¿Qué medir?
                </h2>
                <li>Comprendiendo la atribución.</li>
                <li>IOS 14 y cómo cambió el juego.</li>
                <li>Modelos de Atribución.</li>
                <li>Modelos de Medición.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Medición y atribución: Google Analytics 4
                </h2>
                <li>Introducción a GA4: Para qué sirve y qué puedes hacer</li>
                <li>¿Cómo se configura GA4?</li>
                <li>Crea reportes personalizados con la vista de GA4</li>
                <li>GA4: Los reportes más utilizados</li>
                <li>GA4 & Looker Studio: ¿Cómo se integran?</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Lifecycle - Activación</h2>
                <li>Activación: Definición, medición y análisis</li>
                <li>Estrategias de Activación</li>
                <li>Ejemplos</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Lifecycle - Retención & Engagement
                </h2>
                <li>Retención: Definición, medición y análisis</li>
                <li>Estrategias de Retención y engagement</li>
                <li>Ejemplos</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Lifecycle - Churn</h2>
                <li>Predicción del Churn</li>
                <li>
                  Cómo diferenciar usuarios no-activados vs usuarios inactivos
                </li>
                <li>Casos de éxito</li>
                <li>Ejemplos prácticos</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Lifecycle - Referral</h2>
                <li>
                  Programas de referidos. Qué son y qué deben tener para
                  funcionar
                </li>
                <li>
                  Comunicación efectiva para lanzar un programa de referidos
                </li>
                <li>Ser referido de manera simple y viral: ¿Cómo lo logro?</li>
                <li>Programas de referidos: Análisis y medición</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Lifecycle - Monetización</h2>
                <li>Definición de monetización</li>
                <li>Análisis y medición de monetización</li>
                <li>Estrategias de monetización</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Modelos de Growth</h2>
                <li>
                  Growth models: Identificar oportunidades y priorizar esfuerzos
                </li>
                <li>Crea y escala tu sistema de generación de contenidos</li>
                <li>Mejora continua y evaluación</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Growth tools</h2>
                <li>Growth Loops</li>
                <li>Micro & Macro growth loops</li>
                <li>Growth Loops & Email Marketing</li>
                <li>Estrategias de growth imparables</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Martech - Tools esenciales</h2>
                <li>MMPs: Qué son y para qué se utilizan</li>
                <li>
                  Customer Data Platforms (CDP): Qué son y para qué se utilizan
                </li>
                <li>
                  Customer Engagement Platforms (CEP): Qué son y para que se
                  utilizan
                </li>
                <li>Product Analytics (PA): Qué son y para que se utilizan</li>
                <li>
                  Ventajas y desventajas de las herramientas más conocidas
                </li>
                <li>Casos prácticos</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Conversion Rate Optimization AB testing
                </h2>
                <li>
                  Introducción a los A/B test, estadística detrás y frameworks
                </li>
                <li>Fundamentos del CRO</li>
                <li>Landingpage oprimización</li>
                <li>Product Messaging</li>
                <li>Conversión research para sugerir nuevos test</li>
                <li>
                  Diseño, optimización y ejecución de tests en diferentes
                  ecosistemas
                </li>
                <li>Tools recomendadas pros & contras</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Cultura de Experimentación</h2>
                <li>Crecer mediante la experimentación</li>
                <li>Psicología de usuario</li>
                <li>Copywriting: Persuasión con palabras</li>
                <li>Embudo de la persuasión</li>
                <li>Creatividades que performan: Buenas prácticas</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">IA para Growth</h2>
                <li>¿Qué es la Inteligencia Artificial?</li>
                <li>
                  ¿Cómo usarla para disminuir la carga operativa en marketing?
                </li>
                <li>Pros y contras de los procesos “terciarizados” con AI</li>
                <li>
                  10 herramientas recomendadas con ejemplos para usar en la
                  diaria
                </li>
                <li>
                  Limitaciones de la AI para humanizar procesos y cómo
                  resolverlas
                </li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Social Selling I</h2>
                <li>El arte de “vender sin vender”: Introducción</li>
                <li>
                  Sembrar hoy para cosechar en el futuro: Tipos de interacciones
                </li>
                <li>
                  Cómo planificar una estrategia de contenidos en Linkedin
                </li>
                <li>Métricas para entender qué funciona y qué no</li>
                <li>Cómo elegir clientes potenciales</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">Social Selling II</h2>
                <li>7 formas no directas de generar conversión</li>
                <li>
                  Cómo combinar el contenido orgánico y usar nuevas formas de
                  generar conversación
                </li>
                <li>La combinación de Automatización & Personalización</li>
                <li>A/B Test de conversión</li>
                <li>
                  Lead, MQL, Embudos: Qué son y cómo aplicarlos en la práctica
                </li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Cómo Armar un equipo de Growth
                </h2>
                <li>Team growth vs. Team producto</li>
                <li>
                  Perfiles de puestos, tareas y habilidades según cada etapa del
                  negocio
                </li>
                <li>Recruiting</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Estrategias de Growth Avanzadas
                </h2>
                <li>Métodos y frameworks para garantizar el éxito</li>
                <li>Manuales, casos de éxito y buenas prácticas en growth</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Opción A - Especialización Adquisición
                </h2>
                <li>
                  Canales de adquisición alternativos - Twitter Ads - Linkedin
                  Ads
                </li>
                <li>Twitter Ads un recorrido por la plataforma</li>
                <li>Formatos que funcionan en Twitter</li>
                <li>Instalar un pixel y medir las conversiones</li>
                <li>
                  Canales de adquisición alternativos - Tik Tok Ads - Youtube
                  ads
                </li>
                <li>Tik tok Ads un recorrido por la plataforma</li>
                <li>Formatos que funcionan en Tik Tok</li>
                <li>Instalar un pixel y medir las conversiones</li>
                <li>
                  Canales de adquisición alternativos - Canales Programáticos.
                </li>
                <li>Introducción al mundo programático</li>
                <li>Modelos de compra típicos</li>
                <li>Adnetworks y cómo funcionan</li>
                <li>DSP y cómo funcionan</li>
                <li>Canales de adquisición alternativos - ASA</li>
                <li>Martech II - Experto en Appsflyer y Adjust</li>
                <li>Reportes avanzados</li>
                <li>Análisis y reporting</li>
                <li>Optimización de campañas programáticas</li>
                <li>Custom tracking + Influencer Marketing Measurement</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Opción B - Especialización Activación
                </h2>
                <li>Estrategias avanzadas de Activación</li>
                <li>AB testings en activación</li>
                <li>Onboardings optimizados hacia el Aha Moment.</li>
                <li>Follow Up y Medición de Activación.</li>
                <li>Estrategias avanzadas de Retención</li>
                <li>AB testings en Retención</li>
                <li>User experience</li>
                <li>Ofertas y recompensas claves para engagement</li>
                <li>Follow Up y Medición de Engagement</li>
                <li>Programas de referidos que escalan</li>
                <li>Plataformas de programa de referidos.</li>
                <li>Ads para programas de referidos.</li>
                <li>
                  Engagement + Referidos ¿Cómo logro que mis usuarios
                  promocionen?
                </li>
                <li>Martech II - Experto en Braze y Amplitude</li>
                <li>Reportes avanzados.</li>
                <li>Reportes avanzados de Lifecycle</li>
                <li>¿Qué medir y cómo medir en Amplitude?</li>
                <li>Análisis de cohorts por canales de adquisición.</li>
                <li>Customer Journeys para Activación.</li>
                <li>Customer Journeys para Retención.</li>
                <li>Customer Journeys para reducir el Churn.</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:text-xl font-medium text-[#f5f5dc] group-data-[hover]:text-[#f5f5dc]/80">
            Product Manager
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-[#f5f5dc]/50">
            <div class="px-5 py-4 text-[#f5f5dc]">
              <ul className="space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                Introducción a Product Managment
                </h2>
                <li>Introducción ¿Qué hace un Product Manager? ¿Cuál es su rol?</li>
                <li>Habilidades necesarias</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                Cómo trabaja un Product Manager
                </h2>
                <li>Metodologías ágiles</li>
                <li>Todo sobre la metodología Scrum.</li>
                <li>Desarrollo de user stories.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                Stakeholders de un Product Manager
                </h2>
                <li>Identificación de Stakeholders.</li>
                <li>Stakeholders internos.</li>
                <li>Stakeholders externos.</li>
                <li>Equipo de un Product Manager</li>
                <li>¿Cómo trabajan los programadores?</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                Discovery: Primera etapa para el desarrollo de productos
                </h2>
                <li>Qué es y cómo aplicar Design thinking
                </li>
                <li>¿Cómo realizar un User research?</li>
                <li>Fase de Construcción de usuarios</li>
                <li>Identificación de problemas y construcción de soluciones para usuarios.</li>
                <li>Ideación y definición de proptotipos.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Desarrollo de Productos I</h2>
                <li>Definición y fases del Design Sprint.</li>
                <li>Definición de roadmap</li>
                <li>Cómo hacer un Benchmark de competencia adecuado</li>
                <li>Definición de Escenarios ideales y escenario pesimista.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Desarrollo de Productos II</h2>
                <li>Introducción a UX UI: ¿Cómo interactua un usuario con un producto?</li>
                <li>Herramientas de planificación y priorización, miro, trello, clickup, etc.</li>
                <li>Introducción a plataformas no code: Zapier y Airtable</li>
                <li>Fundamentos de la Inteligencia Aritficial.</li>
                <li>¿Qué es y cómo definir un MVP?</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Lanzamiento de Productos</h2>
                <li>Todo sobre prototipado de productos.</li>
                <li>Que es Product Market Fit y cómo alcanzarlo</li>
                <li>Primer gran reto: Obtener 1000 Usuarios, estrategias y lanzamientos.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Lifecycle - Activación</h2>
                <li>Activación: Definición, medición y análisis</li>
                <li>Estrategias de Activación</li>
                <li>Creación de customer journeys para lograr el Aha Moment & Habit Moment</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Lifecycle - Retención & Engagement</h2>
                <li>Retención: Definición, medición y análisis</li>
                <li>Estrategias de Retención y engagement</li>
                <li>Califiación y ponderación de engagement</li>
                <li>Definición de estrategias según cada tipo de usuario engagement.</li>
                <li>Ejemplos</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Lifecycle - Churn</h2>
                <li>Predicción del Churn</li>
                <li>Cómo diferenciar usuarios no-activados vs usuarios inactivos</li>
                <li>Estrategias de Resurrección de usuarios.</li>
                <li>Metricas claves y ejecutables.</li>
                <li>Casos de éxito</li>
                <li>Ejemplos prácticos</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Medición y atribución: Google Analytics 4</h2>
                <li>Introducción a GA4: Para qué sirve y qué puedes hacer</li>
                <li>¿Cómo se configura GA4?</li>
                <li>Crea reportes personalizados con la vista de GA4</li>
                <li>GA4: Los reportes más utilizados</li>
                <li>GA4 & Looker Studio: ¿Cómo se integran?</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Martech - Tools esenciales</h2>
                <li>Customer Data Platforms (CDP): Qué son y para qué se utilizan</li>
                <li>Customer Engagement Platforms (CEP): Qué son y para que se utilizan</li>
                <li>Product Analytics (PA): Qué son y para que se utilizan</li>
                <li>Ventajas y desventajas de las herramientas más conocidas</li>
                <li>Casos prácticos</li>
              </ul>              
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Martech ll - Experto en Braze y Amplitude</h2>
                <li>Reportes avanzados.</li>
                <li>Reportes avanzados de Lifecycle</li>
                <li>¿Qué medir y cómo medir en Amplitude?</li>
                <li>Análisis de cohorts por canales de adquisición.</li>
                <li>Customer Journeys para Activación.</li>
                <li>Customer Journeys para Retención.</li>
                <li>Customer Journeys para reducir el Churn.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Cultura de Experimentación</h2>
                <li>Crecer mediante la experimentación</li>
                <li>Psicología de usuario</li>
                <li>Copywriting: Persuasión con palabras</li>
                <li>Embudo de la persuasión</li>
                <li>Experimentación para Activación, Retención y Engagement.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Conversion Rate Optimization AB testing</h2>
                <li>Introducción a los A/B test, estadística detrás y frameworks</li>
                <li>CRO por Lifecycle del usuario</li>
                <li>Fundamentos del CRO</li>
                <li>Product Insights & Optimization</li>
                <li>Product Messaging</li>
                <li>Conversión research </li>
                <li>Diseño, optimización y ejecución de tests en diferentes ecosistemas</li>
                <li>Tools recomendadas pros & contras</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">ANALISIS DE DATOS PARA PRODUCT MANAGERS</h2>
                <li>Bases de datos, SQL, Python básico y software de analys de datos como qview, tableau, etc</li>                
              </ul>
              <br/>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Opción A - Desarrollo</h2>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Introducción a Front End</h2>
                <li>Introducción al Front-end ¿En qué se diferencia con el back?
                </li>  
                <li>Estructuras básicas de un sitio web HTML + CSS</li>
                <li>Herramientas de desarrollo Visual Studio Code</li>             
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Front End Introducción a JS</h2>
                <li>Fundamentos del JS</li>  
                <li>Manipulación del DOM ¿Qué es? Manipulación y modificación de elementos HTML</li>
                <li>Eventos básicos JS</li>              
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Herramientas y buenas prácticas</h2>
                <li>¿Qué es Git?</li>       
                <li>¿Qué es Github y cual es su importancia?</li>
                <li>Buenas prácticas: estructurado de código y SEO</li>
                <li>Introducción a boostrap.</li>         
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Introducción al Backend</h2>
                <li>¿Qué es el backend?</li>  
                <li>Arquitecturas de aplicaciones web: Cliente-servidore & Principios básicos de HTTP Y REST</li>
                <li>Introducción a JS con Node JS</li>              
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Introducción a servidores y bases de datos</h2>
                <li>¿Qué es un servidor y como funciona?</li>             
                <li>Configuraciones básicas de un servidor Node.JS</li>
                <li>Conceptos básicos de SQL para bases de datos.</li>  
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">API's y Autenticación</h2>
                <li>Introducción a las API's ¿Cuál es su importancia?</li>
                <li>¿Cómo crear una API simple con Node.
                </li>
                <li>Rutas y controladores ¿Cómo definirlos?</li>
                <li>Autenticación y autorización: conceptos básicos y cómo implementar la autenticación básica en la API.</li>
                <li>Implementación de API's</li>                
              </ul>
              <br/>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Opción B - UX/UI</h2>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Introducción a UX</h2>
                <li>¿Qué es DCU? ¿Cómo se aplica?</li>  
                <li>UX research y metodologi2as de diseño</li>
                <li>¿Cómo ejecutar entrevistas?</li>             
                <li>MVP & POV</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Diseño y organización de la información</h2>
                <li>¿Cómo realizar una buena arquitectura de la informacio2n?</li>  
                <li>Cómo diseñar userflows.</li>
                <li>Patrones de diseño y contenido.</li>             
                <li>Sistema de grilla.</li>
                <li>Estandares y guidelines.</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Creación de un prototipo</h2>
                <li>Diseño de un prototipo funcional.</li>  
                <li>Metricas UX.</li>
                <li>Evaluación euristica.</li>             
                <li>Pruebas de usabilidad</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Introducción a UI</h2>
                <li>¿Qué es UI? Kits & Moodboard.</li>  
                <li>Accesabilidad del usuario.
                </li>
                <li>Motion UI.
                </li>                             
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">               
              <h2 className="font-semibold">UI/UX Avanzado</h2>                          
              </ul>

              <br/>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Opción C - Product Development</h2>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Priorización en producto</h2>
                <li>Evolución del enfoque de producto</li>  
                <li>Objective-driven development</li>
                <li>Etapas en el proceso de desarrollo</li>             
                <li>Roles dentro de un equipo de desarrollo</li>
                <li>Priorización de oportunidades de negocio</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Discovery</h2>
                <li>Design Thinking
                </li>  
                <li>User Research: metodologías</li>
                <li>Definición: síntesis de la investigación</li>             
                <li>Ideación: definición de conceptos</li>
                <li>Prototipado: de la idea al prototipo</li>
                <li>Validación: pruebas de usabilidad</li>
                <li>Visión general de Jobs-to-be-done y Shape-Up</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Delivery e iteración</h2>
                <li>Metodologías ágiles: agilidad, manifiesto ágil, equipos ágiles.</li>  
                <li>Arquitectura de software: niveles de abstracción, atributos del software, tipos de arquitecturas, cloud.</li>
                <li>Fundamentos de inteligencia artificial: evolución, redes neuronales.</li>             
                <li>Plataformas no-code: definición, utilidad. Práctica con Airtable y Zapier.</li>
                <li>Proceso de deployment.</li>
                <li>Medición y mejora continua.</li>
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">La organización de producto</h2>
                <li>El rol del Product Owner.</li>  
                <li>Estructuras organizacionales.</li>
                <li>Interacción con el resto de la organización.</li>             
                <li>Gestión de la cultura de producto.</li>                
              </ul>

              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Product Marketing</h2>
                <li>Como hacer productos Virales, Growthloops, desarollar features pedidas por los usuarios, NPS y como acción después de eso.</li>                                 
              </ul>

            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:text-xl font-medium text-[#f5f5dc] group-data-[hover]:text-[#f5f5dc]/80">
              Founder Way
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-[#f5f5dc]/50">
            <div class="px-5 py-4 text-[#f5f5dc]">
              <ul className="space-y-3 text-base list-disc list-inside ">                
                <li>Selección de co-founder - % equity y responsabilidades</li>
                <li>Tipos de Socidedades y base de radicación (Pro y Cons)</li>              
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                Mecanismos de fundraising
                </h2>
                <li>Tipos de deuda y como implementalos, equity - Non equity</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Pitch I</h2>
                <li>Cómo vender tu idea</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Networking Skills</h2>
                <li>Donde encontrar partners, talento, advisors y como atraerlos</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Social Selling I</h2>
                <li>Cómo crear contenidos y una marca personal para posicionarme como referente</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Social Selling II</h2>
                <li>Domina Linkedin</li>                                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Finanzas I</h2>
                <li>Construir y leer balances - Introducción a micro y macro economia</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Finanzas II</h2>
                <li>PNL - Cashflow - Budget - Forcasting - Taxes</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Métricas de Startups</h2>
                <li>Metricas a considerar y monitorear en mi proyecto</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Pitch II</h2>
                <li>Cómo dominar el pitch</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Legales I</h2>
                <li>Requisitos legales societarios + tipos de contratos + Terms Sheets</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Legales II</h2>
                <li>Contratos para key employees, angles investor, proveedores, etc</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Construcción de reportes para investors</h2>
                <li>MoM</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">                
                <li>Construcción de OKRS</li>
                <li>Selección de Personal y atracción de talento</li>
                <li>Construcción de cultura</li>                
                <li>Construcción de Visión de una compania</li>
                <li>Metodologías Agiles I</li>
                <li>Metodologías Agiles II</li>
                <li>Construcción de Organigramas y procesos</li>
                <li>Sales I</li> 
                <li>Sales II</li> 
                <li>Lean Startup Principles - MVP</li> 
                <li>Oratoria</li> 
                <li>Programación Básica</li> 
                <li>Desarrollo de producto Básico</li> 
                <li>Marketing Basico</li> 
                <li>Construcción de equipos de alto rendimiento</li> 
                <li>Manejo de crisis y de la incertidumbre (good y bad moments)</li> 
                <li>Metodologías Agiles I</li> 
                <li>StakeHolders de un Founder</li> 
                <li>Como pasar de ser un Founder handson a un lider que escala una compania</li> 
                <li>Martech - Tools esenciales</li> 
                <li>Cultura de Experimentación</li> 
                <li>Growth Loops</li> 
                <li>IA para Growth</li> 
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Cierre de Carrera</h2>
                <li>Prácticas profesionales</li>
                <li>Prácticas en empresas asociadas o en GrowthX por mes y medio.</li>                
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">Habilidad necesarias otros Ejes</h2>
                <li>Revisión conceptos de Product Director</li>         
                <li>Revisor conceptos de Founder Way</li>     
                <li>Integración 3 programas ¿Cómo se relacionan?</li>  
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </section>
  );
}
