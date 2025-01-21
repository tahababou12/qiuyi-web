import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed w-full bg-opacity-90 bg-[var(--primary-color)] shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[var(--secondary-color)] text-xl font-bold">QF</h1>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-300 hover:text-[var(--secondary-color)] cursor-pointer transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
