const Footer = () => {

    const data = [
      {
        id: 1,
        title: "Sobre Nosotros",
        href:"#seccion 2",
        logo:"https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cac6100a09fdcd971c391e_LinkedIn.svg",
      },
      {
        id: 2,
        title: "Programa",
        href:"#seccion 4",
        logo:"https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cac60f25722942a3c16a16_Instagram.svg",
      },
      {
        id: 3,
        title: "Instructores",
        href:"#seccion 6",
        logo:"https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cac61008d5bcc53738af39_Youtube.svg",
      },      
    ]
  
    return (
      <footer>
        <nav className="bg-[#030016] w-full">
          <div className="flex flex-wrap items-center justify-between mx-auto p-8 max-w-7xl m-auto">
            <img src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720678241/growth/nuevologo_zafgkm.png" className="w-24" alt="Logo"  />
            <div className="flex items-center gap-5">
              {data.map((item) => (	
                <a key={item.id} href={item.href} className="text-white text-base">
                    <img src={item.logo} alt="Logo" class="logo w-10" />
                </a>
              ))}                         
            </div>
          </div>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  