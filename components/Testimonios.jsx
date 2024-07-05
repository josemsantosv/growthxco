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
          <h5 className="text-2xl text-[#030016]">#Nuestros</h5>
          <h2 className=" text-[#030016] mb-10 mt-7 text-4xl md:text-9xl font-bold text-center anton-sc-regular">
            Testimonios
          </h2>
        </div>
        <div className="slider-container my-20">
          <Slider {...settings}>
            <div>
              <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div>
            <figure class="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div class="author">
                  <img
                    src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3d969458582102f9a9b_Alex%20Dantart-p-500.png"
                    alt="sq-sample1"
                  />
                  <h5 className="text-[#030016]">
                    Pelican Steve <span> LittleSnippets</span>
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
