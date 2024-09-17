
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
        },
        {
          "id": 2,
          "projectName": "SocioLife",
          "projectType": "Social Media Django Rest Framework website",
          "fullScreenShot": "https://i.ibb.co.com/xs44GPJ/social-media-drf.png",
          "projectDescription": "A full stack social media website.User can add posts, like, comment. Also user can see their posts. They can delete,edit their posts also. ",
          "technologies": [
          
              { "id": 1, "icon": "logos:python", "width": "40" },
              { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
              { "id": 3, "icon": "logos:mysql", "width": "40" },
              { "id": 4, "icon": "vscode-icons:file-type-django", "width": "40" },
              { "id": 5, "icon": "skill-icons:react-dark", "width": "40" },
              { "id": 6, "icon": "devicon:tailwindcss", "width": "40" },
              { "id": 5, "icon": "devicon:djangorest", "width": "40" },
              { "id": 6, "icon": "logos:jwt-icon", "width": "40" },
              { "id": 7, "icon": "skill-icons:postgresql-dark", "width": "40" },

          ],
          "liveLink": "https://social-media-drf.netlify.app",
          "clientLink": "https://github.com/sabrinara/Social-Media-React",
          "serverLink": "https://github.com/sabrinara/Social-Media-DRF"
        },
        {
          "id": 3,
          "projectName": "LibraLink",
          "projectType": "Library Management Django MVT website",
          "fullScreenShot": "./LibraLink.png",
          "projectDescription": "A full stack library management website.User can borrow books, edit books. They have to deposite their money. Also they can give rating.",
          "technologies": [
          
            { "id": 1, "icon": "logos:python", "width": "40" },
            { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
            { "id": 3, "icon": "logos:mysql", "width": "40" },
            { "id": 4, "icon": "vscode-icons:file-type-django", "width": "40" },
            

        ],
          "liveLink": "https://library-management-system-2z2w.onrender.com/",
         
          "serverLink": "https://github.com/sabrinara/LibraLink-MVT"
        },
        {
          "id": 4,
          "projectName": "Nothi",
          "projectType": "Note Taking Django Rest Framework website",
          "fullScreenShot": "./Nothi.png",
          "projectDescription": "A full stack note website.User can add notes, edit notes, delete notes. Also they can see their notes. ",
          "technologies": [
          
              { "id": 1, "icon": "logos:python", "width": "40" },
              { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
              { "id": 3, "icon": "logos:mysql", "width": "40" },
              { "id": 4, "icon": "vscode-icons:file-type-django", "width": "40" },
              { "id": 5, "icon": "skill-icons:react-dark", "width": "40" },
              { "id": 6, "icon": "devicon:tailwindcss", "width": "40" },
              { "id": 5, "icon": "devicon:djangorest", "width": "40" },
              { "id": 6, "icon": "logos:jwt-icon", "width": "40" },
              { "id": 7, "icon": "skill-icons:postgresql-dark", "width": "40" },

          ],
          "liveLink": "https://my-notes-drf.netlify.app",
          "clientLink": "https://github.com/sabrinara/My-Nodes-drf/tree/main/mynotes-frontend",
          "serverLink": "https://github.com/sabrinara/My-Nodes-drf"
        }
    
    
      ]
    return (
        <div name="project1" className='pt-10 md:pt-20'> 
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