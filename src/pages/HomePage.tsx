import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/travelData';
import { 
  heroSafari, 
  destDiani, 
  destDubai, 
  sceneResort, 
  sceneMountain 
} from '../assets/images';
import { 
  ArrowRight, 
  Briefcase, 
  Palmtree, 
  Globe2,
  Phone, 
  CheckCircle2, 
  Clock, 
  MapPin
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (title?: string) => void;
}

interface CinematicScene {
  id: string;
  name: string;
  tagline: string;
  categoryTag: string;
  location: string;
  icon: string;
  fallbackImg: string;
  videoUrl?: string;
  fallbackVideoUrl?: string;
}

const CINEMATIC_SCENES: CinematicScene[] = [
  {
    id: 'safari',
    name: 'Maasai Mara Big Five Expedition',
    tagline: 'Witness majestic wildlife on the untamed African savannah',
    categoryTag: 'African Safari & Wildlife',
    location: 'Maasai Mara & Nairobi National Park, Kenya',
    icon: '🦁',
    fallbackImg: heroSafari,
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/24/Safari_at_Nairobi_National_Park%2C_Aug_2025.webm/Safari_at_Nairobi_National_Park%2C_Aug_2025.webm.720p.vp9.webm',
    fallbackVideoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Safari_at_Nairobi_National_Park%2C_Aug_2025.webm',
  },
  {
    id: 'beach',
    name: 'Diani & Watamu Coral Escapes',
    tagline: 'Pristine turquoise waters and powder-white Indian Ocean sands',
    categoryTag: 'Tropical Beaches & Ocean Resorts',
    location: 'Diani Beach & Watamu, Kenya Coast',
    icon: '🏖️',
    fallbackImg: destDiani,
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/A_beach_in_Diani-Morning.webm',
  },
  {
    id: 'city',
    name: 'Dubai & World Cosmopolitan Cities',
    tagline: 'Futuristic architectural wonders, desert dunes & luxury marinas',
    categoryTag: 'International Skylines & Desert Oasis',
    location: 'Downtown Dubai & Arabian Desert, UAE',
    icon: '🏙️',
    fallbackImg: destDubai,
  },
  {
    id: 'mountain',
    name: 'Mount Kenya & Aberdare Highlands',
    tagline: 'Misty bamboo forests, plunging waterfalls & alpine peaks',
    categoryTag: 'Scenic Mountain Landscapes',
    location: 'Mount Kenya & Aberdares, Kenya',
    icon: '⛰️',
    fallbackImg: sceneMountain,
  },
  {
    id: 'resort',
    name: '5-Star Luxury Oceanfront Resorts',
    tagline: 'Private beachfront villas, butler service & tropical sanctuaries',
    categoryTag: 'Hotels, Villas & Island Retreats',
    location: 'Zanzibar & Coastal Sanctuaries',
    icon: '🏝️',
    fallbackImg: sceneResort,
  },
];

export function HomePage({ onOpenBooking }: HomePageProps) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Defer video initialization until after critical paint to avoid page freezing
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoReady(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance scenes smoothly every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % CINEMATIC_SCENES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Reset video error on scene transition
  useEffect(() => {
    setVideoError(false);
  }, [currentSceneIndex]);

  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* =========================================================================
          HERO LANDING HUB WITH OPTIMIZED CINEMATIC VIDEO BACKGROUND
          (Pure landing hub, clean, professional, focused on main navigation)
         ========================================================================= */}
      <section className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center bg-slate-950 overflow-hidden text-white">
        
        {/* Lightweight Multi-Destination Video Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          {CINEMATIC_SCENES.map((scene, idx) => {
            const isActive = idx === currentSceneIndex;
            // Only keep active or next scene in DOM to save memory and avoid GPU thrashing
            const isVisible = isActive || idx === (currentSceneIndex + 1) % CINEMATIC_SCENES.length;
            if (!isVisible) return null;

            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Active Scene Video with Image Fallback */}
                {isActive && scene.videoUrl && videoReady && !videoError ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
                  >
                    <source src={scene.videoUrl} type="video/webm" />
                    {scene.fallbackVideoUrl && (
                      <source src={scene.fallbackVideoUrl} type="video/webm" />
                    )}
                  </video>
                ) : (
                  /* High-Resolution Cinematic Still with Subtle Ken Burns Effect */
                  <img
                    src={scene.fallbackImg}
                    alt={scene.name}
                    decoding="async"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className={`w-full h-full object-cover object-center transform transition-transform duration-8000 ease-out ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            );
          })}

          {/* Deep Cinematic Contrast Scrims for Flawless Text Legibility */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/50" />
          <div className="absolute inset-0 z-20 bg-radial-at-c from-transparent via-slate-950/35 to-slate-950/80" />
        </div>

        {/* Foreground Content - Pure Landing Hub */}
        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Primary Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
            Travel Beyond Ordinary
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm">
            Personalised local and international travel planning, wildlife safaris, coastal escapes, flights, luxury accommodations, and airport transfers.
          </p>

          {/* High-Level Navigation Action Hub */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-2xl">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold backdrop-blur-md border border-white/25 transition-all active:scale-95 text-xs sm:text-sm tracking-wider shadow-sm"
            >
              <span>ABOUT US</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-amber-600/30 transition-all active:scale-95 tracking-wider"
            >
              <span>SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold backdrop-blur-md border border-white/25 transition-all active:scale-95 text-xs sm:text-sm tracking-wider shadow-sm"
            >
              <span>PRODUCTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md border border-white/15 transition-all text-xs sm:text-sm tracking-wider"
            >
              <span>CONTACTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
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
      <section 
        className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}
      >
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
            Multi-Page Travel Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Select a Dedicated Category
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Click any top-level category below or in the navigation bar to visit its dedicated page.
          </p>
        </div>

        {/* 3 Main Top-Level Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. About Us Portal */}
          <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Globe2 className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-amber-700 transition-colors">
                ABOUT US
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Discover our heritage, travel philosophy, mission, vision, and client commitment to making journeys seamless and memorable.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Company Story & Values
              </span>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. Services Portal */}
          <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-blue-700 transition-colors">
                SERVICES
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Complete travel management solutions covering luxury travel, custom trip planning, flights, hotels, airport transfers, plus guided day excursions and wildlife activities.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Services & Excursions
              </span>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open Services</span>
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

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3 group-hover:text-emerald-700 transition-colors">
                PRODUCTS
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Curated wildlife safari packages, coastal beach holiday getaways, August school break family specials, international tours, and digital destination field brochures.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Holiday Packages & Tours
              </span>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Open Products</span>
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
              <span>CONTACTS & REVIEWS</span>
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
