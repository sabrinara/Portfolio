import { Icon } from "@iconify/react";
import { motion } from "framer-motion"
import Title from "./Title";

const Skills = () => {
    const skills = [
        { id: 1, icon: "vscode-icons:file-type-html", width: "80", name: "HTML" },
        { id: 2, icon: "vscode-icons:file-type-css", width: "94", name: "CSS" },
        { id: 3, icon: "logos:bootstrap", width: "80", name: "Bootstrap" },
        { id: 4, icon: "devicon:tailwindcss", width: "80", name: "Tailwind" },
        { id: 5, icon: "logos:javascript", width: "70", name: "Javascript" },
        { id: 6, icon: "skill-icons:react-dark", width: "80", name: "React" },
        { id: 7, icon: "devicon:reactrouter", width: "80", name: "React Router" },
        { id: 8, icon: "vscode-icons:file-type-node", width: "80", name: "Node.js" },
        { id: 9, icon: "logos:daisyui", width: "85", name: "Daisyui" },
        { id: 10, icon: "skill-icons:expressjs-dark", width: "90", name: "Express.js" },
        { id: 11, icon: "logos:axios", width: "130", name: "Axios" },
        { id: 12, icon: "logos:jwt", width: "180", name: "JWT" },
        { id: 13, icon: "logos:stripe", width: "150", name: "Stripe" },
        { id: 14, icon: "logos:firebase", width: "50", name: "Firebase" },
        { id: 15, icon: "logos:vercel", width: "80", name: "Vercel" },
        { id: 16, icon: "skill-icons:mongodb", width: "80", name: "MongoDB" },
        { id: 17, icon: "logos:mysql", width: "80", name: "MySql" },
        { id: 18, icon: "logos:python", width: "80", name: "Python" },
        { id: 19, icon: "vscode-icons:file-type-django", width: "80", name: "Django" },
        { id: 20, icon:"devicon-plain:djangorest", width: "80",  name: "Django Rest" },
    ]
    return (
        <div name="skills" className='pt-20'>
            <Title title="Skills" ></Title>

            <div className="px-4 pb-4 md:px-16 lg:px-8 lg:pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-10" >
                <div className="pb-12">
                    <p className="text-sky-300  text-2xl leading-relaxed opacity-80 text-center mb-6">Versatile skill set with a focus on continuous learning</p>
                </div>
                <div className="flex flex-wrap gap-10 md:gap-20 " data-aos="fade-up" data-aos-duration="1000">
                    {skills && skills.map((skill) =>
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 0.9 }} className="flex items-center " key={skill.id}>
                            <div className="flex flex-col items-center">
                                <Icon icon={skill.icon} className='w-12 h-12 md:h-14 md:w-14 hover:scale-105 hover:bg-teal-50 rounded-full ease-in-out duration-300' />
                                <h3 className="text-sky-500">{skill.name}</h3>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Skills;