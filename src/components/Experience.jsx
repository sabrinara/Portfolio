import Title from "./Title";
import Ex from "../experience.json";
import Lottie from "lottie-react";

const Experience = () => {
    return (
        <div name="experience" className="pt-20">
            <Title title="Experience"></Title>
            <div className="flex flex-col md:flex-row justify-center items-center   md:gap-20 my-10 md:px-20 ">
                <div className="text-left w-full px-10 md:px-1 md:w-1/2" >
                    <p className="text-2xl leading-relaxed opacity-80 md:ml-10">As fresher, I&#39;m still learning. But from last six months I&#39;ve learned many things. I have done different types of projects on HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.</p>
                    <br />
                    <p className="text-xl leading-relaxed opacity-80 md:ml-10">Some of them are : </p>
                    <br />
                    <li className="md:ml-10 text-xl underline text-sky-400">
                        <a href="https://tech-and-gaming-events-ac75e.web.app/">TechShade</a>
                    </li>
                    <p className="text-xl leading-relaxed opacity-80 md:ml-10">A technological event management website. Where login visitor can book different types of event management packages for the event they want to organize.</p> <br />
                    <li className="md:ml-10 text-xl underline text-sky-400">
                        <a href="https://task-management0-react.netlify.app/">Task Management</a>
                    </li>
                    <p className="text-xl leading-relaxed opacity-80 md:ml-10">A task management website. Where login user can easily keep track of their tasks. By adding different priority levels to different types of tasks. They can drag and drop their added task in as they like. </p>

                </div>
                <div className="w-2/3 md:w-1/2 mt-16 md:mt-1">
                    <Lottie animationData={Ex} loop={true} />
                 
                </div>
            </div>
        </div>
    );
};

export default Experience;