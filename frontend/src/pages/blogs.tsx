import React from "react";
import { Briefcase, Cpu, Cloud, Database, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Blogs(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ProjectsPlace – Learn, Build & Grow
            </span>
            <br /> with Real-World Projects
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Skills matter more than certificates. At ProjectsPlace we help students,
            interns, and startups convert ideas into production-ready projects that
            showcase real capability.
          </p>
        </header>

        {/* Overview grid */}
        <section className="grid gap-8 md:grid-cols-3 mb-16">
          {[{
            icon: <Briefcase className="w-7 h-7 text-indigo-600" />,
            title: "What is ProjectsPlace?",
            text: "A hub for project-based learning where you can gain hands-on experience through internships and training, work on real-time projects, and receive mentorship from industry experts."
          }, {
            icon: <Cpu className="w-7 h-7 text-purple-600" />,
            title: "Hands-on Technologies",
            text: "Learn modern tools like FastAPI, React, LangChain, Hugging Face, AWS and Docker — and apply them to real projects."
          }, {
            icon: <Cloud className="w-7 h-7 text-blue-600" />,
            title: "Real-World Workflows",
            text: "Get exposure to GitHub, CI/CD, cloud deployment, APIs, and databases — the workflows recruiters expect to see on your portfolio."
          }].map((card, idx) => (
            <motion.article
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col gap-4 p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-50">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.article>
          ))}
        </section>

        {/* Why Choose section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Why Choose ProjectsPlace for Your Career?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[{
              icon: <Database className="w-6 h-6 text-indigo-600" />,
              title: "Internships & Tracks",
              text: "Internships in AI, ML, Data Science and Full-Stack Development with project-deliverables that strengthen your portfolio."
            }, {
              icon: <Users className="w-6 h-6 text-purple-600" />,
              title: "Mentorship & Support",
              text: "Mentorship from industry experts and end-to-end support for building and deploying products — the same expectations you’ll face in startups."
            }].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex gap-4 items-start p-6 rounded-xl border border-gray-100 shadow-sm bg-white hover:shadow-md"
              >
                <div className="p-3 rounded-md bg-gray-50">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Target Audiences */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Who Should Join?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: "Students",
              text: "Build career-ready projects from scratch.",
              color: "from-indigo-500 to-indigo-600"
            }, {
              title: "Developers",
              text: "Level up with real-world problems and modern stacks.",
              color: "from-purple-500 to-purple-600"
            }, {
              title: "Startups",
              text: "Ship your MVP faster with product and technical support.",
              color: "from-blue-500 to-blue-600"
            }].map((audience, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`p-8 rounded-2xl shadow-md text-center text-white bg-gradient-to-r ${audience.color}`}
              >
                <h5 className="font-semibold text-lg">{audience.title}</h5>
                <p className="text-sm mt-2">{audience.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission + CTA */}
        <section className="mb-16 grid gap-8 md:grid-cols-2 items-center p-8 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-50">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600 text-lg">
              To bridge the gap between learning and real-world application — so every
              learner graduates with projects that prove their skills, not just a degree.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:justify-end gap-4"
          >
            <a
              href="mailto:contact@projectsplace.in"
              className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a
              href="https://www.projectsplace.in"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              Visit Website
            </a>
          </motion.div>
        </section>

       
      </div>
    </main>
  );
}

