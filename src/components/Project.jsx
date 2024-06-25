import { useEffect, useState } from "react";
import Card from "./Cards";
import Title from "./Title";


const Project = () => {
    const [projects, setProjects] = useState();
   useEffect(() => {
       fetch("/projects.json")
       .then(res => res.json())
       .then(data => setProjects(data))
   },[]);
    return (
        <div name="projects" className='pt-20'> 
            <Title title="React Projects"></Title>
           <section className="px-4 pb-4 md:px-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-6" >
            <div className="pb-8">
               
                <p className="text-sky-400 mt-5 text-2xl leading-relaxed text-center font-semibold">Explore my portfolio of innovative projects</p>
            </div>
            <div className="">
                 {projects && projects.map(project => <Card project={project} key={project.id}></Card>)}
            </div>
           
        </section>
        </div>
    );
};

export default Project;