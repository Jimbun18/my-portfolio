const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "➡️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Git", icon: "🔧" },
  { name: "Figma", icon: "🎯" },
];

export default function Skills() {
  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
