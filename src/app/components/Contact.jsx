export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          Have a project or just want to say hi? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:fatahulqorib@gmail.com"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-full transition"
          >
            Email
          </a>
          <a
            href="https://wa.me/6285656216607"
            target="_blank"
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/fatahulqorib"
            target="_blank"
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
