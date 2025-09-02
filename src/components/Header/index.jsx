import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          GameVerse 🎮
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Games
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Profile
          </NavLink>
        </div>

        {/* Login / User Button */}
        <div>
          <Link
            to="/profile"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
