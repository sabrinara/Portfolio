import SocialLinks from "./SocialLinks";
import Title from "./Title";

const Intro = () => {
    return (
        <div name="about" className='pt-20'>
            <Title title = "About Me"></Title>
            <section className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-10" >
            <div className="pb-8">
               
                <p className="text-2xl mt-5 text-sky-100 leading-relaxed opacity-80 w-[95%] sm:w-full text-center">Passionate Full Stack developer, dedicated to creating impactful solutions.</p>
            </div>
            <div className="md:flex items-center">
                <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                    <img src={"https://i.ibb.co/zxZqymc/wd.gif"} className="text-center" alt="women devloper" />
                </div>
                <div className="text-gray-300 md:w-1/2 text-justify" data-aos="fade-right" data-aos-duration="1000">
                    <p className="text-lg  leading-relaxed opacity-80">
                        Hello, I&#39;m Sabrina Rashid, a passionate junior Django(Backend) and MERN (MongoDB, Express.js, React, Node.js) developer with a strong interest in web development and emerging technologies.
                        What I love most about web development is the continuous learning it requires. I&#39;m constantly exploring new libraries, frameworks, and tools to stay up-to-date with the latest industry trends. I believe that staying updated with the latest tools and techniques is crucial for success in this field.
                    </p>
                    <br />
                    <p className="text-lg leading-relaxed opacity-80">
                        If you&#39;re looking for a dedicated Django or junior MERN developer who is eager to contribute, learn, and grow, I would love to connect. Feel free to reach out to me through email or connect with me on LinkedIn.
                    </p>
                    <br />
                  <SocialLinks></SocialLinks>
                </div>
            </div>
        </section >
        </div>
    );
};

export default Intro;