const Header = () => {
  return (
    <header>


<nav className="border-gray-600 bg-black border-solid border-b fixed z-20 w-full">
  <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-7xl px-3 m-auto">
    <img src="/img/logo.png" alt="Logo" class="logo w-20" />
    <div className="flex items-center gap-5">
    <span className="text-white text-base">Programa Validar</span>
          <span className="text-white text-base">Sobre nosotros</span>
          <button className="btn bg-skyblue px-10 rounded-lg py-3 text-base text-white">Inscribirme Ahora</button>
    </div>
  </div>
</nav>

  </header>
  );
};

export default Header;