import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/travelData';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Menu, 
  X, 
  Send,
  Compass,
  Briefcase,
  Sparkles,
  Palmtree,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services', badge: '8 Options' },
    { to: '/activities', label: 'Activities', badge: 'Excursions' },
    { to: '/products', label: 'Products', badge: 'Packages' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Bio Tagline & Services */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400">🌍 {COMPANY_INFO.tagline}</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300 hidden md:inline">✈️ {COMPANY_INFO.servicesBio}</span>
            <span className="text-slate-600 hidden lg:inline" aria-hidden="true">·</span>
            <span className="text-amber-300/90 hidden lg:inline">✨ {COMPANY_INFO.promiseBio}</span>
          </div>

          {/* Right: Direct Phone, WhatsApp & Email */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Push World Travel Ltd"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>

            <a 
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to inquire about your travel options.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-emerald-400 font-medium"
              title="WhatsApp Push World Travel Ltd"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              title="Email Push World Travel Ltd"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled ? 'shadow-md border-b border-slate-200/90' : 'border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <Logo variant="full" />
          </Link>

          {/* Top-Level Navigation Menu (Routing to Dedicated Standalone Pages) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl transition-all duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200/80 shadow-2xs'
                      : 'hover:text-amber-600 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-amber-100">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-amber-400 text-slate-800 text-xs font-bold hover:bg-amber-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Request</span>
              <span>Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-amber-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-5 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3">
            Navigation Menu
          </div>

          <div className="flex flex-col space-y-1.5 text-base font-semibold text-slate-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `w-full text-left py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-bold border border-amber-200'
                      : 'hover:bg-slate-50 hover:text-amber-700'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Travel Quote</span>
            </button>

            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to plan a trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>Call Direct: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl text-center flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <span>Email: {COMPANY_INFO.email}</span>
            </a>

            <div className="pt-2 text-[11px] text-slate-500 text-center space-y-1">
              <div>📍 Nairobi, Kenya · 🕒 {COMPANY_INFO.hours}</div>
              <div className="text-amber-700 font-medium">🌍 {COMPANY_INFO.tagline}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
