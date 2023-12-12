import Title from "./Title";


const Experience = () => {
    return (
        <div name="experience" className="pt-20">
            <Title title="Experience"></Title>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 my-20 p-20">
                <div className="text-left w-1/2" >
                    <p className="text-2xl leading-relaxed opacity-80 ml-10">As fresher, I'm still learning. But from last six months I've learned many things. I have done different types of projects on HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.</p>

                    <p className="text-xl leading-relaxed opacity-80">Some of them are : </p>

                    <li className="ml-10 text-xl">
                        <a href="https://tech-and-gaming-events-ac75e.web.app/">TechShade</a>
                    </li>
                    <p className="text-xl leading-relaxed opacity-80 ml-10">A technological event management website. Where login visitor can book different types of event management packages for the event they want to organize.</p>
                    <li className="ml-10 text-xl">
                        <a href="https://guileless-cascaron-8d6a6c.netlify.app/">Donation Campaing</a>
                    </li>
                    <p className="text-xl leading-relaxed opacity-80 ml-10">A donation website. With statistic and donation chart.</p>

                </div>
                <div>
                    <img src={"https://i.ibb.co/4JRD8Kf/Animation-1702301234769.gif"} className="w-full h-96" alt="svg" />
                </div>
            </div>
        </div>
    );
};

export default Experience;