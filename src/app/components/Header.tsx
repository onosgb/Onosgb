"use client";

import { useState } from "react";

interface HeaderProps {
  avatarUrl: string;
  githubUserName: string;
}

export default function Header({ avatarUrl, githubUserName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Always use local avatar from public folder
  const imageSrc = "/avatar.png";

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-10 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={imageSrc}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
            loading="eager"
            decoding="async"
            style={{
              display: "block",
              objectFit: "cover",
              objectPosition: "top",
              aspectRatio: "1 / 1",
            }}
          />
          <div className="font-bold text-xl">{githubUserName}</div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background border-b border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <a
            href="#about"
            className="hover:text-blue-500 transition-colors py-2"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 transition-colors py-2"
            onClick={toggleMobileMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-500 transition-colors py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
