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
        { id: 6, icon: "skill-icons:react-dark", width: "80", name: "React.js" },
        { id: 7, icon: "logos:nextjs-icon", width: "80", name: "Next.js" },
        { id: 8, icon: "devicon:reactrouter", width: "80", name: "React Router" },
        { id: 9, icon: "vscode-icons:file-type-node", width: "80", name: "Node.js" },
        { id: 10, icon: "logos:daisyui", width: "85", name: "Daisyui" },
        { id: 11, icon: "skill-icons:expressjs-dark", width: "90", name: "Express.js" },
        { id: 12, icon: "logos:axios", width: "130", name: "Axios" },
        { id: 13, icon: "logos:stripe", width: "150", name: "Stripe" },
        { id: 14, icon: "logos:firebase", width: "50", name: "Firebase" },
        { id: 15, icon: "logos:vercel", width: "80", name: "Vercel" },
        { id: 16, icon: "skill-icons:mongodb", width: "80", name: "MongoDB" },
        { id: 17, icon: "vscode-icons:folder-type-mongodb", width: "80", name: "Mongoose" },
        { id: 18, icon: "logos:mysql", width: "80", name: "MySql" },
        { id: 19, icon: "logos:python", width: "80", name: "Python" },
        { id: 20, icon: "vscode-icons:file-type-django", width: "80", name: "Django" },
        { id: 21, icon:"devicon:djangorest", width: "80", name: "DRF" },
        { id: 22, icon: "skill-icons:postgresql-dark", width: "80", name: "postgreSQL" },
        { id: 23, icon: "logos:jwt-icon", width: "80", name: "JWT" },
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