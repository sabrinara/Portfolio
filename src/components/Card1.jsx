import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Icon } from "@iconify/react";

const Card1 = (props) => {
    // eslint-disable-next-line react/prop-types
    const { clientLink, serverLink, fullScreenShot, liveLink, projectName, projectDescription, projectType, technologies } = props.project;
    return (
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center mb-4 border border-box border-sky-400 rounded-md gap-10 p-10" data-aos="fade-up" data-aos-duration="1000">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 h-80 mr-6">

                <img
                    src={fullScreenShot}
                    alt={projectName}
                    className="w-full h-full rounded-lg shadow-lg object-cover object-top ease-in-out duration-[5s] hover:object-bottom"
                />


            </div>

            {/* Description Side */}
            <div className="w-full lg:w-1/2 ">
                <div className="p-4 lg:p-8 ">
                    <h2 className="text-white text-2xl lg:text-4xl font-semibold mb-3">{projectName}</h2>
                    <h2 className="text-white text-lg lg:text-xl font-medium mb-3">{projectType}</h2>
                    <p className="text-primary-50 text-base opacity-80 mb-6">
                        {projectDescription}
                    </p>
                    <div className="flex flex-wrap gap-6 md:gap-10 justify-start items-center my-6">
                        {/* eslint-disable-next-line react/prop-types */}
                        {technologies?.map((technologie) => <Icon icon={technologie.icon} width={technologie.width} className="h-10" key={technologie.id} />)}
                    </div>
                    <div className="flex space-x-5">
                        <a
                            href={clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-300 border border-primary-300 p-1.5 rounded-md duration-300 hover:scale-125"
                        >
                            <span className="flex items-center">Client <FaGithub className="ml-2"></FaGithub></span>
                        </a>
                        <a
                            href={serverLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-300 border border-primary-300 p-1.5 rounded-md duration-300 hover:scale-125"
                        >
                            <span className="flex items-center">Server <FaGithub className="ml-2"></FaGithub></span>
                        </a>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-300 border border-primary-300 p-1.5 rounded-md duration-300 hover:scale-125"
                        >
                            <span className="flex items-center">Live <BsFillArrowUpRightCircleFill className="ml-2"></BsFillArrowUpRightCircleFill></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;