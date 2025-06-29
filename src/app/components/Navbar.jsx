export default function Navbar() {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-900 shadow-md sticky top-0 z-50">
  <a href="#home" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
    Home
  </a>
  <a href="#about" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
    Tentang
  </a>
  <a href="#skills" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
    Keahlian
  </a>
  <a href="#projects" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
    Proyek
  </a>
  <a href="#contact" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
    Kontak
  </a>
</nav>

  );
}
