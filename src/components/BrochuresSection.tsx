import { useState } from 'react';
import { BROCHURES, BrochureItem, COMPANY_INFO } from '../data/travelData';
import { 
  BookOpen, 
  Download, 
  Share2, 
  Check, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare,
  ShieldCheck,
  Compass,
  FileText
} from 'lucide-react';

export function BrochuresSection() {
  const [activeBrochure, setActiveBrochure] = useState<BrochureItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllChapters, setShowAllChapters] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleOpenBrochure = (brochure: BrochureItem) => {
    setActiveBrochure(brochure);
    setCurrentPage(1);
    setShowAllChapters(false);
    setDownloadSuccess(false);
  };

  const handleShare = (brochure: BrochureItem) => {
    const text = `Explore the official ${brochure.title} from Push World Travel Ltd: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopiedId(brochure.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const chapters = [
    { num: 1, title: 'Overview' },
    { num: 2, title: 'Itinerary' },
    { num: 3, title: "What's Included" },
    { num: 4, title: 'Packing Tips' },
    { num: 5, title: 'Visa Advisory' },
  ];

  return (
    <section id="brochures" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              Official Travel Guides
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Publications & Brochures
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Browse our digital travel guides featuring day-by-day itineraries, packing tips, wildlife migration schedules, and tailored travel planning.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center md:justify-end gap-3">
            <span className="text-xs text-slate-600 font-semibold bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              Updated for 2026 Season
            </span>
          </div>
        </div>

        {/* Brochure Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROCHURES.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200 hover:border-amber-400 p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                {/* Visual Cover Preview */}
                <div 
                  onClick={() => handleOpenBrochure(item)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-slate-200 mb-4"
                >
                  <img
                    src={item.coverImg}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-transparent flex flex-col justify-between p-3.5">
                    <span className="self-end px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] shadow">
                      {item.pages} Sections
                    </span>

                    <div>
                      <div className="text-[10px] text-amber-300 font-semibold">{item.date}</div>
                      <div className="text-white text-sm font-bold leading-snug drop-shadow line-clamp-2">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      Read Guide
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-amber-700 mb-1">
                  {item.tagline}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenBrochure(item)}
                  className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Guide</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleShare(item)}
                    className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
                    title="Share Guide Link"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Reader Modal - Optimized so Mobile Readers Miss NOTHING */}
        {activeBrochure && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 overflow-y-auto">
            <div className="bg-white sm:rounded-2xl max-w-3xl w-full h-full sm:h-auto sm:max-h-[92vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
              
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      Push World Travel Ltd Publication
                    </div>
                    <div className="font-bold text-sm sm:text-base truncate">
                      {activeBrochure.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setActiveBrochure(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Close reader"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Chapter Jump Bar & View Mode Toggle for Mobile Users */}
              <div className="bg-slate-800 border-b border-slate-700/80 px-3 py-2 flex items-center justify-between gap-2 shrink-0 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setShowAllChapters(false)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all whitespace-nowrap ${
                      !showAllChapters
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Paged Chapters
                  </button>
                  <button
                    onClick={() => setShowAllChapters(true)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all whitespace-nowrap flex items-center gap-1 ${
                      showAllChapters
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>📖 Show All Chapters (Full Document)</span>
                  </button>
                </div>

                {!showAllChapters && (
                  <span className="text-[11px] text-amber-400 font-semibold whitespace-nowrap">
                    Part {currentPage} of {activeBrochure.pages}
                  </span>
                )}
              </div>

              {/* Direct Chapter Selector Pills (when in paged mode) */}
              {!showAllChapters && (
                <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 touch-pan-x">
                  <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 mr-1 hidden sm:inline">
                    Jump to:
                  </span>
                  {chapters.map((ch) => (
                    <button
                      key={ch.num}
                      onClick={() => setCurrentPage(ch.num)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all shrink-0 ${
                        currentPage === ch.num
                          ? 'bg-slate-900 text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {ch.num}. {ch.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Reader Body Simulation with Full Mobile Centering & High Contrast */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-100/80">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-5 sm:p-8 border border-slate-200 space-y-6">
                  
                  {/* Document Header */}
                  <div className="text-center pb-4 border-b border-slate-100">
                    <div className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                      PUSH WORLD TRAVEL LTD
                    </div>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-display">
                      {activeBrochure.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1">
                      {activeBrochure.tagline}
                    </div>
                  </div>

                  {/* Document Content: Show Specific Chapter or All Chapters for Complete Mobile Reading */}
                  <div className="space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
                    
                    {/* Chapter 1: Destination Overview */}
                    {(showAllChapters || currentPage === 1) && (
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/70 border border-slate-100">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                          <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Chapter 1: Destination Overview</span>
                        </div>
                        <p className="text-slate-700">
                          Push World Travel Ltd curates journeys that take you beyond the ordinary. Whether traversing the savannahs of East Africa or relaxing on palm-fringed coastlines, each journey is structured to ensure maximum comfort, safety, and authentic local experiences.
                        </p>
                        <p className="text-slate-600">
                          Our team coordinates your flights, private ground transfers, and hotel reservations with personal attention to every requirement.
                        </p>
                      </div>
                    )}

                    {/* Chapter 2: Day-by-Day Itinerary Highlights */}
                    {(showAllChapters || currentPage === 2) && (
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/70 border border-slate-100">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                          <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Chapter 2: Day-by-Day Itinerary Highlights</span>
                        </div>
                        <div className="space-y-2.5">
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <strong className="text-slate-900 block text-xs mb-0.5">Day 1: Arrival & Orientation</strong>
                            <p className="text-slate-600 text-xs">Meet and greet by your Push World Travel representative. Transfer in comfort to your lodge or beachfront resort for check-in and evening relaxation.</p>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <strong className="text-slate-900 block text-xs mb-0.5">Day 2: Prime Exploration</strong>
                            <p className="text-slate-600 text-xs">Comprehensive morning and afternoon game drives or marine boat tours led by experienced local guides.</p>
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200">
                            <strong className="text-slate-900 block text-xs mb-0.5">Day 3 & Beyond: Panoramic Trails & Leisure</strong>
                            <p className="text-slate-600 text-xs">Sundowners, scenic photography stops, cultural encounters, and smooth departure connections.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Chapter 3: Dedicated What's Included */}
                    {(showAllChapters || currentPage === 3) && (
                      <div className="space-y-3 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                        <div className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-800">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Chapter 3: What's Included on Safari & Holiday Packages</span>
                        </div>
                        <p className="text-slate-600 text-xs">
                          Our packages are configured with clarity so you know exactly what is covered on your journey:
                        </p>
                        <ul className="space-y-2 text-xs text-slate-700 mt-2">
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-slate-900">• Passenger Insurance:</span>
                            <span>Passenger insurance cover, subject to the applicable policy terms.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-slate-900">• Safari Transport:</span>
                            <span>Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-slate-900">• Accommodation and Meals:</span>
                            <span>Lodge accommodation and meals as specified in the selected itinerary.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="font-bold text-slate-900">• Park Fees:</span>
                            <span>National park and reserve entry fees as specified in the package itinerary.</span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Chapter 4: Practical Travel & Packing Guidance */}
                    {(showAllChapters || currentPage === 4) && (
                      <div className="space-y-3 p-4 rounded-xl bg-slate-50/70 border border-slate-100">
                        <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                          <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Chapter 4: Practical Travel & Packing Tips</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                          <li><strong className="text-slate-800">Luggage:</strong> Soft-sided duffle bags are strongly recommended for safari vehicle storage.</li>
                          <li><strong className="text-slate-800">Clothing:</strong> Neutral khaki, olive, or beige clothing for game drives; light layers for cool morning breezes.</li>
                          <li><strong className="text-slate-800">Essentials:</strong> High SPF sunscreen, insect repellent, UV sunglasses, and binoculars.</li>
                          <li><strong className="text-slate-800">Health:</strong> Consult your health provider regarding yellow fever vaccination and malaria prophylaxis prior to travel.</li>
                        </ul>
                      </div>
                    )}

                    {/* Chapter 5: Visa Assistance Advisory */}
                    {(showAllChapters || currentPage >= 5) && (
                      <div className="space-y-3 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                        <div className="font-bold text-blue-950 flex items-center gap-1.5 text-xs uppercase tracking-wider text-blue-800">
                          <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>Chapter 5: Visa Assistance & Custom Planning Advisory</span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Visa assistance is provided as a separate administrative advisory service:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          <li><strong className="text-slate-900">Document Review:</strong> We check your travel documents for completeness before submission.</li>
                          <li><strong className="text-slate-900">Application Support:</strong> We help you understand the application process and identify available ways to avoid unnecessary delays.</li>
                          <li><strong className="text-slate-900">Flight Reservation Verification:</strong> We verify flight reservation details when required for your application.</li>
                        </ul>
                        <p className="text-[11px] text-slate-500 pt-1 italic">
                          * Note: Visa approval and processing times depend strictly on the respective embassies and immigration authorities.
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Document Footer Signature */}
                  <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100 gap-1 text-center sm:text-left">
                    <span>Document ID: PWT-{activeBrochure.id.toUpperCase()}</span>
                    <span>Push World Travel Ltd · Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Reader Controls Footer - Centered and Mobile-friendly */}
              <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
                {!showAllChapters ? (
                  <div className="flex items-center justify-between sm:justify-start gap-2">
                    <button
                      disabled={currentPage <= 1}
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 flex items-center justify-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous Part
                    </button>

                    <button
                      disabled={currentPage >= activeBrochure.pages}
                      onClick={() => setCurrentPage(p => Math.min(activeBrochure.pages, p + 1))}
                      className="flex-1 sm:flex-none px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 flex items-center justify-center gap-1"
                    >
                      Next Part
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                    Displaying full brochure guide (all 5 chapters)
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Push World Travel Ltd! I am reviewing the "${activeBrochure.title}" guide and would like to request a tailored quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <button
                    onClick={handleDownload}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    {downloadSuccess ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Guide Saved!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
