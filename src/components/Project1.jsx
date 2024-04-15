
import Card from "./Cards";
import Title from "./Title";


const Project1 = () => {
  const project1=  [
        {
          "id": 1,
          "projectName": "NewsQuest",
          "projectType": "Newspaper Django MVT pattern website",
          "fullScreenShot": "https://i.ibb.co/MgV4pzD/newsquest.png",
          "projectDescription": "A full stack newspaper website.User can see articles. Rate the articles after login and the most viewed articles will be shown in the home page. Where editor can publish, edit, delete their news. Also the can see their articles. Admin can add publisher and make premium articles. Admin can also delete  articles, editor and user",
          "technologies": [
          
              { "id": 1, "icon": "logos:python", "width": "40" },
              { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
              { "id": 3, "icon": "logos:mysql", "width": "40" },
              { "id": 4, "icon": "vscode-icons:file-type-django", "width": "40" },
              

          ],
          "liveLink": "https://newsquest.onrender.com/",
    
          "serverLink": "https://github.com/sabrinara/NewsQuest"
        }
    
    
      ]
    return (
        <div name="project1" className='pt-20'> 
            <Title title="Django Projects"></Title>
           <section className="px-4 pb-4 md:px-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-10 pt-6" >
            <div className="pb-8">
               
                <p className="text-sky-400 mt-5 text-2xl leading-relaxed text-center font-semibold">Explore my portfolio of innovative projects</p>
            </div>
            <div className="">
                 {project1 && project1.map((project) => <Card key={project.id} project={project} />)}
            </div>
           
        </section>
        </div>
    );
};

export default Project1;