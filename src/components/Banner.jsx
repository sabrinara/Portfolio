import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import { Icon } from "@iconify/react";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">

            <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:w-[50%]  mb-6 pt-24 text-gray-500 text-center min-h-[420px]" name="home">
            
            <div data-aos="fade-down" data-aos-duration="1500" data-aos-mirror="true" className="">
                <h3 className="text-white text-4xl font-bold md:text-6xl md:font-semibold">Hi,<span className="text-5xl">👋
                    </span></h3>
                <h3 className="text-white text-4xl font-bold md:text-6xl md:font-semibold">I&apos;m Sabrina Rashid</h3>
                <span className="text-white text-4xl font-bold md:text-6xl md:font-semibold mr-2">I&apos;m a</span> <br />
                <TypeAnimation
                    sequence={['Web Developer', 1500, 'MERN Stack Developer', 1500]}
                    style={{ fontSize: '4em', color: '#7cd1fd', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
             
                <div className="my-4 space-x-4 md:space-x-6">
                    <a className="text-md mb-2 mx-auto inline-flex w-28 items-center justify-center rounded-lg border bg-sky-700 px-1 py-2.5 font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 "
                        href="https://drive.google.com/uc?export=download&id=1PYvXQPrpfDVRIJhZbJ3qDK38CLG7w-bU" target="_blank" rel="noreferrer">Resume <Icon icon={'material-symbols:download'} className="ml-2"></Icon></a>
                    <Link to="contact" className="text-md mb-2 mx-auto inline-flex w-28 items-center justify-center rounded-lg border bg-sky-700 px-1 py-2.5 font-medium text-white hover:bg-sky-400 focus:outline-none focus:ring-2 " smooth={true} duration={500}>Contact Me</Link>
                </div>
                <SocialLinks></SocialLinks>
            </div>
        </div>

        <div className="md:w-[50%]">
                <img src={"https://i.ibb.co/bHPSD8z/beam-woman-sitting-at-desk-and-programming.gif"} className="w-96 md:w-full my-10" alt="Women" />
            </div>
        </div>
        
    );
};

export default Banner;