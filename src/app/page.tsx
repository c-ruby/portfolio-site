export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Caleb</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          An aspiring software developer and recent graduate from the computer science program at PennWest California.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browser-based learning tool with adaptive questioning.
            </p>
          </article>
          <article className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Something else cool you’ve built.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
