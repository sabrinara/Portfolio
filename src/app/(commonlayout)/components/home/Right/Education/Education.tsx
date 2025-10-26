import { motion } from "framer-motion";

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
    category: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka City College, Dhaka",
    duration: "2014 - 2016",
    result: "GPA : 4.83 out of 5.00",
  },
  {
    id: 3,
    category: "Secondary School Certificate (SSC)",
    institution: "University Laboratory School and College, Dhaka",
    duration: "2008 - 2014",
    result: "GPA : 5.00 out of 5.00",
  },
];

const Education = () => {
  return (
    <section
      className="scroll-mt-[100px] md:scroll-mt-[60px] my-4 md:mt-20"
      id="education"
    >
      <h1 className="md:hidden text-2xl font-semibold text-center text-text mb-10">
        Education
      </h1>

      <div className="relative space-y-12 max-w-3xl mx-auto">
        {EDUCATION.map(({ id, category, institution, duration, result }) => (
          <motion.div
            key={id}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Circle marker */}
            {/* <span className="absolute -left-3 md:-left-5 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"></span> */}

            <div className="bg-card backdrop-blur-sm border border-secondary rounded-2xl p-4 md:p-6 hover:shadow-sky-400/30 hover:shadow-lg transition duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-hovertext">
                🎓 {category}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">🏫 {institution}</p>
              <p className="text-sm text-muted-foreground mt-1">🕛 {duration}</p>
              <p className="text-sm text-muted-foreground mt-1">📈 {result}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
