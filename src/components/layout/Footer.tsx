export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 mt-12 shadow-inner">
      <div className="max-w-5xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} My Name. All rights reserved.
      </div>
    </footer>
  );
}
