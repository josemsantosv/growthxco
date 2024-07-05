const Header = () => {

  const data = [
    {
      id: 1,
      title: "Sobre Nosotros",
      href:"#seccion 2"
    },
    {
      id: 2,
      title: "Programa",
      href:"#seccion 4"
    },
    {
      id: 3,
      title: "Instructores",
      href:"#seccion 6"
    },
    {
      id: 4,
      title: "Testimonios",
      href:"#seccion 7"
    }
  ]

  return (
    <header>
      <nav className="border-gray-600 bg-[#030016] border-solid border-b fixed z-20 w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-7xl px-3 m-auto">
          <img src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720119539/growth/logo_y9bej1.png" alt="Logo" class="logo w-20" />
          <div className="flex items-center gap-6">
            {data.map((item) => (	
              <a href={item.href} className="text-white text-base">{item.title}</a>
            ))}           
            <button className="btn bg-[#17bae0] px-10 rounded-lg py-3 text-base text-white">
            Aplica ahora
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
