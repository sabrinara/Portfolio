import Title from "./Title";


const Education = () => {
    const EDUCATION = [
        {
            id: 1,
            category: "Bachelor of Science in Computer Science and Engineering",
            institution: "Dhaka City College, Dhaka",
            duration: "2018 - 2023",
            result: "3.43",
        },
        {
            id: 2,
            category: "Higher Secondary Certificate",
            institution: "Dhaka City College, Dhaka",
            duration: "2014 - 2016",
            result: "4.83",
        },
        {
            id: 3,
            category: "Secondary School Certificate",
            institution: "University Laboratory School and College, Dhaka",
            duration: "2018 - 2023",
            result: "5.00",
        },
    ]
    return (
        <div>
            <Title title = "Education"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-6 md:mx-40">
                {
                    EDUCATION?.map(({ id, category, institution, duration, result }) => (
                        <div key={id} className="my-3 border border-box border-sky-900 shadow-2xl shadow-teal-400 p-6 md:p-10">
                            <h3 className="text-2xl font-bold">🎓  {category}</h3>
                            <p className="text-xl"> 🏤 {institution}</p>
                            <p className="text-xl">🕛 {duration}</p>
                            <p className="text-xl"> 📈  {result}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Education;

/**
 *
 * icon : "🎓",
 *  import { Icon } from "@iconify/react";


    return (
        <>
            <div className="flex justify-center space-x-5">
                {SOCIAL_LINKS?.map(({ icon, link }, index) => (
                    <a
                        key={`link ${index}`}
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="rounded-full border-2 p-1 text-white border-sky-900 hover:bg-sky-800 hover:text-sky-100 duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    >
                        <Icon className="text-xl" icon={icon} />
                    </a>
                ))}
            </div>
        </>
    );
};

export default SocialLinks;
 */