import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { activeSection, scrolled } = useActiveSection()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-surface/95 border-b border-primary/10'
            : 'py-4 bg-surface/60 border-b border-transparent'
        }`}
      >
        <button
          onClick={() => scrollTo('hero')}
          className="text-xl font-extrabold tracking-wider text-gradient cursor-pointer"
        >
          TL://
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`bg-transparent border-none cursor-pointer font-mono text-xs tracking-wide uppercase transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary font-semibold'
                    : 'text-slate-400 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-primary cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-surface/[0.98] backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-4 right-6 bg-transparent border-none text-primary cursor-pointer"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="bg-transparent border-none text-slate-200 text-xl font-medium tracking-wide cursor-pointer hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
