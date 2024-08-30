import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
      link: "skills",
    },
    // {
    //   id: 4,
    //   link: "experience",
    // }
  ];

  const link2 = [
    {
      id: 1,
      link: "education",
    },
    {
      id: 2,
      link: "contact",
    },
  ];

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white backdrop-filter backdrop-blur-3xl mb-10 fixed top-0 left-0 z-50 lg:px-16">
        <div className="flex justify-between items-center">
          <img src={"https://i.ibb.co/7g3GrH5/sr.png"} className="w-14" alt="sr" />
          <h1 className="text-2xl ml-2 italic font-bold text-sky-500">Portfolio</h1>
        </div>

        <ul className="items-stretch hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="  px-4 cursor-pointer capitalize font-semibold text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth={true} duration={1000} className="hover:border-b-2 hover:border-sky-500">
                {link}
              </Link>
            </li>
          ))}
          <li className="relative px-4 cursor-pointer capitalize font-semibold text-white hover:scale-105 duration-200 hover:border-b-2" onClick={() => setDropdown(!dropdown)}>
            <span>Projects</span>
            {dropdown && (
              <ul className="absolute top-8 left-3 backdrop-filter backdrop-blur-3xl  text-white px-4 bg-slate-800 opacity-80 py-2 rounded-md">
                <li className="py-1">
                  <Link to="project1" smooth={true} duration={1000}>
                    Django
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="project2" smooth={true} duration={1000}>
                    Team
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="projects" smooth={true} duration={1000}>
                    React
                  </Link>
                </li>

              </ul>
            )}
          </li>
          {link2.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold text-white hover:scale-105 duration-200"
            >
              <Link to={link} smooth={true} duration={1000} className=" hover:border-b-2 ">
                {link}
              </Link>
            </li>
          ))}
          <a className="text-white font-semibold hover:border-b-2 hover:scale-105 duration-200" href="https://drive.google.com/uc?export=download&id=1LHX8SS18WRr-ALoGYmchrsvDtjK4hDNV" target="_blank" rel="noreferrer">Resume</a>
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
            <li className="relative px-4 cursor-pointer capitalize py-4 text-xl font-extrabold hover:text-sky-400 " onClick={() => setDropdown(!dropdown)}>
              <span>Projects</span>
              {dropdown && (
                <ul className="absolute top-10 left-32 bg-sky-900 text-sky-100  px-4 py-2 rounded">
                  <li className="py-1">
                    <Link to="project1" smooth={true} duration={500} className="hover:text-sky-400">
                      Django
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="project2" smooth={true} duration={500} className="hover:text-sky-400" >
                      Team
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="projects" smooth={true} duration={500} className="hover:text-sky-400">
                      React
                    </Link>
                  </li>

                </ul>
              )}
            </li>
            {link2.map(({ id, link }) => (
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
            <a className="text-xl pt-4 font-extrabold hover:text-sky-400" href="https://drive.google.com/uc?export=download&id=1LHX8SS18WRr-ALoGYmchrsvDtjK4hDNV" target="_blank" rel="noreferrer">Resume</a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
