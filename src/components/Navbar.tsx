import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled
          ? 'bg-[#0D1117]/90 border-b border-[#30363D] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-white tracking-tight">
          Md Irshad
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[#58A6FF] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://sarkora.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3FB950] hover:underline font-semibold"
            >
              Sarkora
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden p-2 text-gray-300"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <ul
          id="mobile-nav"
          className="md:hidden border-t border-[#30363D] bg-[#0D1117] px-4 py-4 space-y-3"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-gray-300 hover:text-[#58A6FF]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
