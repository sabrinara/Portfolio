import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

interface Skill {
  id: number;
  icon: string;
  name: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { id: 1, icon: "vscode-icons:file-type-html", name: "HTML" },
    { id: 2, icon: "vscode-icons:file-type-css", name: "CSS" },
    { id: 3, icon: "logos:bootstrap", name: "Bootstrap" },
    { id: 4, icon: "devicon:tailwindcss", name: "Tailwind" },
    { id: 5, icon: "simple-icons:shadcnui", name: "Shadcn UI" },
    { id: 6, icon: "skill-icons:javascript", name: "JavaScript" },
    { id: 7, icon: "skill-icons:typescript", name: "TypeScript" },
    { id: 8, icon: "skill-icons:react-dark", name: "React.js" },
    { id: 9, icon: "skill-icons:redux", name: "Redux" },
    { id: 10, icon: "logos:nextjs-icon", name: "Next.js" },
    { id: 11, icon: "devicon:reactrouter", name: "React Router" },
    { id: 12, icon: "vscode-icons:file-type-node", name: "Node.js" },
    { id: 13, icon: "logos:daisyui", name: "DaisyUI" },
    { id: 14, icon: "skill-icons:expressjs-dark", name: "Express.js" },
    { id: 15, icon: "logos:axios", name: "Axios" },
    { id: 16, icon: "logos:stripe", name: "Stripe" },
    { id: 17, icon: "logos:firebase", name: "Firebase" },
    { id: 18, icon: "logos:vercel", name: "Vercel" },
    { id: 19, icon: "devicon:netlify", name: "Netlify" },
    { id: 20, icon: "skill-icons:mongodb", name: "MongoDB" },
    { id: 21, icon: "devicon:mongoose-wordmark", name: "Mongoose" },
    { id: 22, icon: "logos:mysql", name: "MySQL" },
    { id: 23, icon: "logos:python", name: "Python" },
    { id: 24, icon: "vscode-icons:file-type-django", name: "Django" },
    { id: 25, icon: "devicon:djangorest", name: "DRF" },
    { id: 26, icon: "skill-icons:postgresql-dark", name: "PostgreSQL" },
    { id: 27, icon: "logos:jwt-icon", name: "JWT" },
    { id: 28, icon: "ant-design:ant-design-outlined", name: "Ant Design" },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-8 md:mt-16"
    >
          <h1 className="md:hidden text-2xl font-medium text-text my-10 text-center">
               Skills
            </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 justify-items-center">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1 }}
            className="flex flex-col items-center"
          >
            <Icon
              icon={skill.icon}
              width="30"
              height="30"
              className="ease-in-out duration-300"
            />
            <h3 className="text-hovertext mt-2 text-xs md:text-sm">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
