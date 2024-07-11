import React from "react";
import Slider from "react-slick";
import "../src/styles/testimonials.css";

function Testimonios() {
  const settings = {    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="testimonios" className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-8 md:px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h5 className="text-2xl text-[#030016]">#Nuestros</h5> */}
          <h2 className=" text-[#030016] mb-10 mt-7 text-4xl md:text-8xl font-bold text-center anton-sc-regular">
            Testimonios
          </h2>
          <p className="text-lg text-center mb-10">
          Nuestros graduados han alcanzado un éxito significativo en sus carreras. Lee sus historias y descubre cómo GrowthX Startup College ha transformado sus trayectorias profesionales.
        </p>

        </div>
        <div className="slider-container my-20">
          <Slider {...settings}>
            <div>
              <figure class="snip1192">
                <blockquote>
                Logré cerrar un acuerdo con Hevy para coordinar el área de marketing y ventas, obteniendo un sueldo de 2.000 USD al mes. Este puesto me permitió combinar mis dos pasiones: fitness y tecnología.
                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723328/growth/tomas_bmtfo4.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Tomás Boismene {/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                Me ayudaron demasiado, pude acceder a una oportunidad en Hallow. Comencé como prueba durante tres meses y ahora estoy contratado, desempeñándome en la gestión de campañas de publicidad y marketing de influencers.
                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723328/growth/papazaian_yws46s.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                  Tomás Papazian {/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                Literalmente me cambió la vida, me llevo un círculo de contactos y amigos muy importante, y además, comencé a trabajar como Director de ventas en America Business
                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723328/growth/juan_mibcoc.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                  Juan Cruz Fernandez
                  {/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                Gracias a GrowthX, adquirí los conocimientos y habilidades necesarios para comenzar a trabajar en el área de Growth de Hallow, lo que me permitió dejar los dos trabajos que tenía en ese momento.
                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723329/growth/echavarria_nimtc2.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                  Valentín Echavarría{/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                Me llevo una gran red de contactos y amigos fundamentales en mi viaje emprendedor. <br />
                Me brindaron el asesoramiento y las herramientas necesarias para lanzar Tribes, una startup que une mis tres pasiones: tecnología, comunidades y viajes.
                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723328/growth/bruno_m1vsba.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                  Bruno Pardiñas {/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure className="snip1192">
                <blockquote className="h-full">
                Está semana me llegaron dos ofertas de startups,
                Una, periodo de prueba pago (1k) x un mes y dependiendo cómo salga contrato full time 60k-150,000 USD x año,
                La otra, periodo de prueba gratis, y si sale bien contrato x 4k al mes y un 10%  de lo que genere de profit.
                Ingles, saber venderse y mandar muchos mails, todavía no caigo en los números

                </blockquote>
                <div class="author">
                  <img
                    src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720723328/growth/mati_vdjoql.jpg"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                  Matias orbegozo {/* <span> LittleSnippets</span> */}
                  </h5>
                </div>
              </figure>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default Testimonios;
