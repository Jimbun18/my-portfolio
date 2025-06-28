const projects = [
  {
    title: "Personal Portfolio",
    description: "Website portfolio modern dengan Next.js dan Tailwind CSS.",
    link: "#",
  },
  {
    title: "To-Do App",
    description: "Aplikasi manajemen tugas harian berbasis React.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Desain frontend toko online responsive.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
