export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-400">JimBun</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I build beautiful, fast, and interactive websites.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-full">
            Let’s Talk
          </button>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            My Work
          </button>
        </div>
      </div>
    </section>
  );
}
