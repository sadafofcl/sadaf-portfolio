import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement | null;
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(item.href.replace("#", ""));
        }
      });
    };

    handleScroll(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white dark:bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "text-pink-900 dark:text-pink-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:bg-pink-900 dark:after:bg-pink-400
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.name}
              </a>
            );
          })}

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium
                  ${
                    isActive
                      ? "text-pink-900 dark:text-pink-400"
                      : "text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
