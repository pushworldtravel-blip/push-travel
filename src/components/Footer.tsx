import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/travelData';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Lockup & Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Pushworld Travel (Push World Travel Ltd). Personalised local and international travel planning, wildlife safaris, coastal holidays, flights, accommodation, and airport transfers.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-semibold space-y-1">
              <div>🌍 {COMPANY_INFO.tagline}</div>
              <div>✈️ {COMPANY_INFO.servicesBio}</div>
              <div>✨ {COMPANY_INFO.promiseBio}</div>
            </div>

            <div className="pt-3 space-y-2 text-xs text-slate-300">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
                <span className="text-[11px] text-slate-400">(Call & WhatsApp)</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors font-medium">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors font-medium">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors font-medium">
                  SERVICES & DAY TOURS
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors font-medium">
                  PRODUCTS & PACKAGES
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors font-medium">
                  CONTACTS & REVIEWS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Inside Services & Products */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Featured Within Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">
                  Travel Management Services
                </Link>
              </li>
              <li>
                <Link to="/services?tab=tours" className="hover:text-amber-400 transition-colors">
                  Safari & Day Tours
                </Link>
              </li>
              <li>
                <Link to="/services?tab=tours" className="hover:text-amber-400 transition-colors">
                  Hot Air Balloon Flights
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">
                  Big Five Safari Packages
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">
                  Coastal Diani Beach Breaks
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">
                  Dubai & International Tours
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-amber-400 transition-colors">
                  August Family Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Custom Quote & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Travel Advisory Desk
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive tailored proposals and private seasonal departures from our Nairobi concierge desk.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Custom Quotation</span>
            </button>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-700/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! We will share curated travel updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email for deals..."
                    className="flex-1 px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg focus:border-amber-500 outline-none text-white placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Verified Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Push World Travel Ltd. All rights reserved. Registered Travel Agency in Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>Direct Phone: <strong className="text-slate-200">{COMPANY_INFO.phone}</strong></span>
            <span>·</span>
            <span>24/7 Travel Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
