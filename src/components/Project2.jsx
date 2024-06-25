import Card1 from "./Card1";
import Title from "./Title";


const Project2 = () => {

    const teamProject = [
        {
            "id": 1,
            "projectName": "Project Syncify",
            "projectType": "Project Management Website",
            "fullScreenShot": "https://i.ibb.co/0fLYpkY/project-syncify.png",
            "projectDescription": "A full stack website. It has role based functionality. Where users can easily create projects, assign team members, choose team leaders, create plans, assign plans to the team leaders, team leaders can create, edit, delete board, and they can assign tasks to the team members. Users can also join group chat, plans showing calendar, assigned member can drag and drop tasks. Export pdf of the project. One to one chat. Additional profile page for any user.",
            "technologies": [


                { "id": 1, "icon": "skill-icons:react-dark", "width": "40" },
                { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
                { "id": 3, "icon": "logos:python", "width": "40" },
                { "id": 4, "icon": "vscode-icons:file-type-django", "width": "40" },

                { "id": 5, "icon": "devicon:djangorest", "width": "40" },
                { "id": 6, "icon": "logos:jwt-icon", "width": "40" },
                { "id": 7, "icon": "skill-icons:postgresql-dark", "width": "40" },


            ],
            "liveLink": "https://project-syncify.netlify.app/",
            "clientLink": "https://github.com/TechBuilderTeam/Project-Syncify",
            "serverLink": "https://github.com/TechBuilderTeam/syncify-server"
        },
        {
            "id": 1,
            "projectName": "Expo Elite",
            "projectType": "Property Selling & Renting Website",
            "fullScreenShot": "https://i.ibb.co/5BtS3QW/expo-elite-dev-vercel-app.png",
            "projectDescription": "A full stack website. Implemented multi-user dashboards, integrated chat,optimized search/sort, enabled Stripe payments, compare property,dynamic review, like, comment, notification, book appoinment with seller, membership plans for seller and get notify after rent date is over.Archive PDFs of Sell History. Admins oversee user management, contribute dynamic property management.Map features with real time location for rent and purchase the property.",
            "technologies": [

                { "id": 1, icon: "logos:nextjs-icon", width: "40" },
                { "id": 2, "icon": "devicon:tailwindcss", "width": "40" },
                { "id": 3, "icon": "logos:firebase", "width": "40" },
                { "id": 4, "icon": "logos:jwt-icon", "width": "40" },
                { "id": 5, icon: "vscode-icons:folder-type-mongodb", width: "40" },

            ],
            "liveLink": "https://expo-elite-dev.vercel.app/",
            "clientLink": "https://github.com/nerualninjas/ExpoElite",
            "serverLink": "https://github.com/nerualninjas/ExpoElite-server"
        }
    ]
    return (
        <div name="project2" className='pt-20'>
            <Title title="Team Project"></Title>
            <section className="px-4 pb-4 md:px-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mb-6 pt-6" >
                <div className="pb-4">
                    <p className="text-sky-400 mt-5 mb-4 text-2xl leading-relaxed text-center font-semibold">Here are some of my team project, to learn more explore my github</p>
                </div>
                <div className="">
                    {teamProject && teamProject.map(project => <Card1 project={project} key={project.id}></Card1>)}
                </div>

            </section>
        </div>
    );
};

export default Project2;