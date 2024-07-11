const Footer = () => {

    const data = [
      {
        id: 1,
        title: "Sobre Nosotros",
        href:"#seccion 2",
        icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#242e48"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,        
        logo:"https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cac6100a09fdcd971c391e_LinkedIn.svg",
      },
      {
        id: 2,
        title: "Programa",
        href:"#seccion 4",
        icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#242e48"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#242e48" stroke-width="1.5"></path><path d="M17.5 6.51L17.51 6.49889" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
        logo:"https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cac60f25722942a3c16a16_Instagram.svg",
      },
      {
        id: 3,
        title: "Instructores",
        href:"#seccion 6",
        icon:<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#242e48"><path d="M14 12L10.5 14V10L14 12Z" fill="#242e48" stroke="#242e48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" stroke="#242e48" stroke-width="1.5"></path></svg>,
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
  