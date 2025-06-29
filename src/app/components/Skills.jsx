export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Github"];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Keahlian</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
