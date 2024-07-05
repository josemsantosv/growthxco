import React from 'react'

const data = [
    {
        id: 1,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    },
    {
        id: 2,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    },
    {
        id: 3,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    },
    {
        id: 4,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    },
    {
        id: 5,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    },
    {
        id: 6,
        title: "Juanjo Mostazo",
        description: "Escaló Homa Games a 250+ empleados, +100M de facturación y levantó rondas de financiación por valor de 100m+.",
        image: "https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/65cfa3dda5f9c9e9feb7009c_Jorge%20Dob%C3%B3n-p-500.png",
        alt:"Instructores",
    }
]

const Card = ({ title, description, image }) => {
    return (
        <div className="card group">
                <div className='overflow-hidden rounded-md'>
                    <img className='rounded-md group-hover:scale-110 duration-500 ease-in-out grayscale group-hover:grayscale-0' src={image} alt="Instructores" />
                </div>
                <div className="pt-8">
                    <h3 className='text-2xl text-white pb-2'>{title}</h3>
                    <p className='text-gray-400'>{description}</p>
                </div>
            </div> 
    )   
}

function Instructores() {
  return (
    <section id='instructores' className="border-t-[1px] border-[#6d6d6d] bg-[#030016] py-20 HeroSection text-white py-20 HeroSection text-white flex items-center justify-items-center">
      <div className="max-w-7xl px-3 m-auto flex flex-col items-center mx-auto justify-items-center">
        <h5 className="text-2xl text-[#d4ff78]">
          #Nuestros
        </h5>
        <h2 className="mb-10 mt-7 text-4xl md:text-9xl font-bold text-center anton-sc-regular">
        Instructores
        </h2>          
        <div className='grid md:grid-cols-3 gap-8 py-12 px-8 md:p-0'>
            {data.map((item) => (
                <Card  key={item.id} {...item} />
            ))}               
        </div>  
        <div className="py-20">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Empresas y Universidades Asociadas
        </h2>
        <div className="mx-auto px-8 md:px-0 mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
            alt="Transistor"            
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
            alt="Transistor"            
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
            alt="Transistor"            
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
            alt="Transistor"            
          />
          <img
            className="col-span-2 w-full object-contain lg:col-span-1"
            src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/65c501782fe111f228dc433f_Newtopia.png"
            alt="Transistor"            
          />
        </div>
      </div>   
                 
      </div>
    </section>
  )
}

export default Instructores