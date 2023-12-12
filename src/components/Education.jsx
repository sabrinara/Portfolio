import Title from "./Title";


const Education = () => {
    const EDUCATION = [
        {
            id: 1,
            category: "Bachelor of Science in Computer Science and Engineering",
            institution: "Dhaka City College, Dhaka",
            duration: "2018 - 2023",
            result: "CGPA : 3.43 out of 4.00",
        },
        {
            id: 2,
            category: "Higher Secondary Certificate",
            institution: "Dhaka City College, Dhaka",
            duration: "2014 - 2016",
            result: "GPA : 4.83 out of 5.00",
        },
        {
            id: 3,
            category: "Secondary School Certificate",
            institution: "University Laboratory School and College, Dhaka",
            duration: "2008 - 2014",
            result: "GPA : 5.00 out of 5.00",
        },
    ]
    return (
        <div name="education">
            <Title title = "Education"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-6 md:mx-40">
                {
                    EDUCATION?.map(({ id, category, institution, duration, result }) => (
                        <div key={id} className="my-3 border border-box border-sky-900 shadow-2xl shadow-sky-500 p-6 md:p-10">
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
