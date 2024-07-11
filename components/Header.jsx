import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const iconList = [{ icon: <FaBars className="w-6 h-6" /> }];

const Header = () => {
  const data = [
    {
      id: 1,
      title: "Sobre Nosotros",
      href: "#nosotros",
    },
    {
      id: 2,
      title: "Programa",
      href: "#programa",
    },
    {
      id: 3,
      title: "Instructores",
      href: "#instructores",
    },
    {
      id: 4,
      title: "Testimonios",
      href: "#testimonios",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".cerrarMov");
    elements.forEach((element) => {
      element.addEventListener("click", toggleMenu);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", toggleMenu);
      });
    };
  }, [menuOpen]);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "tween", // Set transition type to 'tween'
        duration: 0.3, // Specify duration
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // Add ease-out easing function
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut", // Add ease-out easing function
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const closeHeaderMov = () => {
    setShowModal(false);
  };

  return (
    <header>
      <nav className="border-gray-600 bg-[#030016] border-solid border-b fixed z-20 w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl px-3 m-auto">
          <a href="#">
            <img
              src="https://res.cloudinary.com/dswzcvwem/image/upload/v1720678241/growth/nuevologo_zafgkm.png"
              alt="Logo"
              className="logo w-24"
            />
          </a>
          <div className="hidden md:flex flex items-center gap-6">
            {data.map((item) => (
              <a key={item.id} href={item.href} className="text-[#f5f5dc] text-base">
                {item.title}
              </a>
            ))}
            <button className="btn bg-[#4C1C24] px-10 rounded-lg py-3 text-base text-[#f5f5dc]">
              Aplica ahora
            </button>
          </div>
          <div className="md:hidden block">
        <ul className="flex text-white gap-6 items-center cursor-pointer">
          {iconList.map((item, index) => (
            <div
              key={index}
              onClick={index === iconList.length - 1 ? toggleModal : null}
            >
              {item.icon}
            </div>
          ))}
        </ul>
      </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="w-screen fixed inset-0 flex justify-center items-center bg-[#030016] z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FaTimes
              className="w-6 h-6 absolute top-6 right-4 text-white cursor-pointer"
              onClick={toggleModal}
              style={{ fontSize: "16px" }}
            />
            <motion.div
              className="relative w-full"
              variants={navLinksVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-8 items-center justify-center h-full ">
                {data.map((link, index) => (
                  <motion.a
                    href={link.href}
                    key={index}
                    onClick={closeHeaderMov}
                    className="text-white font-light text-2xl cursor-pointer"
                    variants={linkItemVariants}
                    aria-label={link.ariaLabel}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
