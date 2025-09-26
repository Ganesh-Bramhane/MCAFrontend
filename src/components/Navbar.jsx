import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MCA Dept
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/faculty" className="hover:text-yellow-400 transition">
            Faculty
          </Link>
          <Link to="/students" className="hover:text-yellow-400 transition">
            Students
          </Link>
          <Link to="/timetable" className="hover:text-yellow-400 transition">
            Timetable
          </Link>
          <Link to="/notices" className="hover:text-yellow-400 transition">
            Notices
          </Link>
          <Link to="/achievements" className="hover:text-yellow-400 transition">
            Achievements
          </Link>
          <Link to="/developers" className="hover:text-yellow-400 transition">
            Developers
          </Link>
          <Link
  to="/contact"
  className="hover:text-yellow-400 transition"
>
  Contact
</Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-4 space-y-3 font-medium">
          <Link
            to="/"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/faculty"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Faculty
          </Link>
          <Link
            to="/students"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Students
          </Link>
          <Link
            to="/timetable"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Timetable
          </Link>
          <Link
            to="/notices"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Notices
          </Link>
          <Link
            to="/achievements"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Achievements
          </Link>
          <Link
            to="/developers"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Developers
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
