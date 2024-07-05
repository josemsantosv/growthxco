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
            <span className="md:md:text-xl font-medium text-white group-data-[hover]:text-white/80">
              Mes 1: Fundamentos y Growth Marketing
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <div class="px-5 py-4 text-white">
              <ul className="space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Semana 1-2: Introducción General
                </h2>
                <li>Introducción a GrowthX College</li>
                <li>Introducción al Mundo Startup</li>
                <li>Roles y Responsabilidades en una Startup</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Semana 3-4: Fundamentos de Startups
                </h2>
                <li>Selección de Cofundadores y Distribución de Equidad</li>
                <li>Tipos de Sociedades y Base de Radicación</li>
                <li>Mecanismos de Financiación</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Semana 5-6: Growth Marketing (Parte 1)
                </h2>
                <li>Introducción al Growth Marketing</li>
                <li>Estrategias de Adquisición (Meta Ads, Google Ads, SEO)</li>
                <li>
                  Medición y Atribución (Google Tag Manager, Google Analytics 4)
                </li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside">
                <h2 className="font-semibold">
                  Semana 7-8: Growth Marketing (Parte 2)
                </h2>
                <li>
                  Marketing de Ciclo de Vida (Activación, Retención, Churn,
                  Referidos, Monetización)
                </li>
                <li>
                  Estrategias y Herramientas Avanzadas de Crecimiento (Martech,
                  IA para Growth)
                </li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:text-xl font-medium text-white group-data-[hover]:text-white/80">
              Mes 2: Gestión de Producto y Habilidades de Liderazgo
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <div class="px-5 py-4 text-white">
              <ul className="space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 9-10: Gestión de Producto (Parte 1)
                </h2>
                <li>Introducción a la Gestión de Producto</li>
                <li>Metodologías Ágiles</li>
                <li>Diseño UI/UX</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 11-12: Gestión de Producto (Parte 2)
                </h2>
                <li>Marketing de Producto</li>
                <li>Coordinación de Equipos de Producto</li>
                <li>Fundamentos de Frontend y Backend</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 13-14: Habilidades de Liderazgo
                </h2>
                <li>Selección de Cofundadores y Construcción de Equipos</li>
                <li>Habilidades de Networking y Pitch</li>
                <li>Fundamentos Financieros y Legales</li>
                <li>Gestión de Crisis</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:text-xl font-medium text-white group-data-[hover]:text-white/80">
              Mes 3: Herramientas Esenciales y Ventas
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <div class="px-5 py-4 text-white">
              <ul className="space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 15-16: Herramientas y Habilidades Esenciales
                </h2>
                <li>Dominio del Inglés</li>
                <li>Excel y Google Suite</li>
                <li>Herramientas de Comunicación (Slack, Discord)</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 17-18: Ventas (Parte 1)
                </h2>
                <li>Introducción a las Ventas en Startups</li>
                <li>Técnicas de Venta y Negociación</li>
                <li>Psicología del Cliente y Comportamiento del Consumidor</li>
              </ul>
              <ul className="mt-5 space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 19-20: Ventas (Parte 2)
                </h2>
                <li>Uso de CRM y Gestión de Clientes.</li>
                <li>Automatización de Ventas con Herramientas Digitales.</li>
                <li>Análisis de Datos para Ventas.</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="md:text-xl font-medium text-white group-data-[hover]:text-white/80">
              Mes 4: Experiencia Práctica y Proyecto Final
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <div class="px-5 py-4 text-white">
              <ul className="space-y-3 text-base list-disc list-inside ">
                <h2 className="font-semibold">
                  Semana 21-22: Experiencia Práctica en Ventas
                </h2>
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
                <h2 className="font-semibold">
                  Presentación del Proyecto Personal:
                </h2>
                <li>
                  Investigación sobre una Startup a la que el estudiante desea
                  ingresar.
                </li>
                <li>
                  Análisis y Plan de Ingreso como entregable sujeto a evaluación
                </li>
                <li>
                  Los proyectos con mejor puntuación serán enviados directamente
                  a los Founders por GrowthX College.
                </li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </section>
  );
}
