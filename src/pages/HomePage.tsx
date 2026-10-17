import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/travelData';
import { heroSafari, destDiani, sceneResort } from '../assets/images';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Palmtree, 
  Briefcase, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  MapPin
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (title?: string) => void;
}

export function HomePage({ onOpenBooking }: HomePageProps) {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* =========================================================================
          HERO LANDING HUB
          (Completely clean, uncluttered, focused on high-level navigation)
         ========================================================================= */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-slate-950 overflow-hidden text-white">
        
        {/* Background Visual Atmosphere */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={heroSafari}
            alt="Pushworld Travel Experiences"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/60" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/40 to-slate-950/80" />
        </div>

        {/* Foreground Content - Pure Landing Hub */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-xs text-amber-300 font-bold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Nairobi Concierge & Travel Desk · Push World Travel Ltd</span>
          </div>

          {/* Primary Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
            Travel Beyond Ordinary
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Personalised local and international travel planning, wildlife safaris, coastal escapes, flights, luxury accommodations, and airport transfers.
          </p>

          {/* High-Level Navigation Action Hub */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md sm:max-w-none">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-lg hover:shadow-amber-600/30 transition-all active:scale-95"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/activities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold backdrop-blur-md border border-white/25 transition-all active:scale-95 text-sm"
            >
              <span>Discover Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/15 transition-all text-sm"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Office Assistance
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              24/7 Telephone & WhatsApp Desk
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-400" />
              Nairobi, Kenya
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          TOP-LEVEL CATEGORY PORTALS
          (Strictly high-level navigation cards — NO sub-options, detailed lists, or grids)
         ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
            Multi-Page Travel Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Select a Dedicated Category
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Click any top-level category below or in the navigation bar to visit its dedicated page, featuring our interactive drop-cap accordion view.
          </p>
        </div>

        {/* 3 Top-Level Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Services Portal */}
          <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>

              <div className="text-[11px] font-bold text-amber-700 uppercase tracking-widest mb-1">
                TOP-LEVEL HEADING 01
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-amber-700 transition-colors">
                Services
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Complete travel management solutions covering luxury travel, custom trip planning, corporate retreats, flights, hotels, and airport transfers.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                8 Dedicated Solutions
              </span>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open Services Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. Activities Portal */}
          <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-7 h-7" />
              </div>

              <div className="text-[11px] font-bold text-blue-700 uppercase tracking-widest mb-1">
                TOP-LEVEL HEADING 02
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-blue-700 transition-colors">
                Activities
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Curated experiential safari game drives, sunrise hot air balloon flights, coral reef snorkeling, mountain trekking, and cultural encounters.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                8 Curated Excursions
              </span>
              <Link
                to="/activities"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open Activities Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3. Products Portal */}
          <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Palmtree className="w-7 h-7" />
              </div>

              <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest mb-1">
                TOP-LEVEL HEADING 03
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-emerald-700 transition-colors">
                Products
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Curated vacation packages, holiday getaways, August school break specials, international tours, and digital destination field brochures.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                8 Package Products
              </span>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open Products Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          CLEAN LANDING HUB CONTACT & TELEPHONE CALLOUT
         ========================================================================= */}
      <section className="bg-slate-900 text-white py-14 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              Direct Travel Concierge Desk
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Find Us in Nairobi or Call Our Office
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg">
              Telephone hotline: <strong className="text-white">{COMPANY_INFO.phone}</strong> · Email: <strong className="text-white">{COMPANY_INFO.email}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span>View Office & Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
