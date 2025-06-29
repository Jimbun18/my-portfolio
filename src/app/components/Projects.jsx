export default function Projects() {
  const projects = [
    {
      title: "Website Portfolio",
      desc: "Website pribadi menggunakan Next.js dan Tailwind CSS.",
      link: "#"
    },
    {
      title: "Landing Page UMKM",
      desc: "Landing page untuk usaha kecil, full responsive.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Proyek</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="border p-6 rounded-xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-700 mb-4">{proj.desc}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">Lihat Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
