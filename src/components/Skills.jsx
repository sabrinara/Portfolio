import { Icon } from "@iconify/react";
import { motion } from "framer-motion"
import Title from "./Title";

const Skills = () => {
    const skills = [
        { id: 1, icon: "vscode-icons:file-type-html", width: "80", name: "HTML" },
        { id: 2, icon: "vscode-icons:file-type-css", width: "94", name: "CSS" },
        { id: 3, icon: "logos:bootstrap", width: "80", name: "Bootstrap" },
        { id: 4, icon: "devicon:tailwindcss", width: "80", name: "Tailwind" },
        { id: 5, icon: "simple-icons:shadcnui", width: "80", name: "Shadcn UI" },
        { id: 6, icon: "skill-icons:javascript", width: "70", name: "JavaScript" },
        { id: 7, icon: "skill-icons:typescript", width: "70", name: "TypeScript" },
        { id: 8, icon: "skill-icons:react-dark", width: "80", name: "React.js" },
        { id: 9, icon:"skill-icons:redux", width: "80", name: "Redux" },
        { id: 10, icon: "logos:nextjs-icon", width: "80", name: "Next.js" },
        { id: 11, icon: "devicon:reactrouter", width: "80", name: "React Router" },
        { id: 12, icon: "vscode-icons:file-type-node", width: "80", name: "Node.js" },
        { id: 13, icon: "logos:daisyui", width: "85", name: "Daisyui" },
        { id: 14, icon: "skill-icons:expressjs-dark", width: "90", name: "Express.js" },
        { id: 15, icon: "logos:axios", width: "130", name: "Axios" },
        { id: 16, icon: "logos:stripe", width: "150", name: "Stripe" },
        { id: 17, icon: "logos:firebase", width: "50", name: "Firebase" },
        { id: 18, icon: "logos:vercel", width: "80", name: "Vercel" },
        { id: 19, icon: "devicon:netlify", width: "80", name: "Netlify" },
        { id: 20, icon: "skill-icons:mongodb", width: "80", name: "MongoDB" },
        { id: 21, icon: "devicon:mongoose-wordmark", width: "80", name: "Mongoose" },
        { id: 22, icon: "logos:mysql", width: "80", name: "MySql" },
        { id: 23, icon: "logos:python", width: "80", name: "Python" },
        { id: 24, icon: "vscode-icons:file-type-django", width: "80", name: "Django" },
        { id: 25, icon:"devicon:djangorest", width: "80", name: "DRF" },
        { id: 26, icon: "skill-icons:postgresql-dark", width: "80", name: "postgreSQL" },
        { id: 27, icon: "logos:jwt-icon", width: "80", name: "JWT" },
       
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
                            whileTap={{ scale: 1 }} className="flex items-center " key={skill.id}>
                            <div className="flex flex-col items-center">
                                <Icon icon={skill.icon} className='w-10 h-10 md:h-10 md:w-10 hover:scale-105 hover:bg-teal-50 rounded-full ease-in-out duration-300' />
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