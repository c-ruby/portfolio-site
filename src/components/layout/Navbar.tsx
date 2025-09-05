import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/resume" className="hover:text-blue-600">Resume</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
