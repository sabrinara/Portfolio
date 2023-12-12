import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skill",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "education",
    },
    {
      id: 7,
      link: "contact",
    },
  ]
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white backdrop-filter backdrop-blur-lg mb-8 fixed top-0 left-0 z-50 lg:px-16">
        <div className="flex justify-between items-center">
          <img src={"https://i.ibb.co/7g3GrH5/sr.png"} className="w-14" alt="dsadv" />
          <h1 className="text-2xl ml-2 italic font-bold text-sky-500">Portfolio</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <a className="text-white font-semibold" href="https://drive.google.com/uc?export=download&id=1WUvxqWFGzLbTKzQ4Vd6lgoMNR2iUcfWn" target="_blank" rel="noreferrer">Resume</a>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white  md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul data-aos="fade-left" data-aos-duration="500" className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-[32rem] mt-20 bg-slate-900  text-sky-100 opacity-90 ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-xl font-extrabold hover:text-sky-400 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
            <a className="text-xl pt-4 font-extrabold hover:text-sky-400" href="https://drive.google.com/uc?export=download&id=1WUvxqWFGzLbTKzQ4Vd6lgoMNR2iUcfWn" target="_blank" rel="noreferrer">Resume</a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;