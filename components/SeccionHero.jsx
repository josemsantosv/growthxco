import Header from "./Header";

const SeccionHero = () => {
  return (
    <div className="bg-[#030016] h-[100vh]">
      {/* <Header/> */}
      <div className="HeroSection h-full text-white py-20 HeroSection text-white flex items-center justify-items-center">
        <div className="max-w-7xl text-[#f5f5dc] px-8 md:px-3 m-auto flex flex-col items-start mx-auto justify-items-center">
        {/* <h5 className="md:text-2xl">
          #Explorá el Startup Program disponible en GrowthX.
        </h5> */}
        <h2 className="mb-10 mt-7 text-4xl md:text-8xl font-bold anton-sc-regular">
        Explorá Startup College disponible en GrowthX
        </h2>
        <p className="mb-10 md:text-2xl text-justify md:text-left">
        Queremos proporcionarte las herramientas necesarias de los mejores expertos para aprender, mejorar habilidades y ofrecer soluciones a las problemáticas del mundo como Growth Marketer, Product Manager o Fundador de tu propia Startup.
        </p>
        <button
          type="button"
          class="btn bg-[#4C1C24] px-10 rounded-lg py-3 text-base text-[#f5f5dc]"
        >
          INSCRIBIRME AHORA
        </button>
        <div className="py-10 flex items-center gap-8">
          {/* <div className="flex -space-x-2">
            <img
              className="inline-block h-10 w-10 rounded-full ring-1 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-1 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-1 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-1 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <p>+3.000 personas nos leen cada día... Debe ser por algo.</p> */}
        </div>
        </div>
      </div>
      
    </div>
  ); 
};

export default SeccionHero;
