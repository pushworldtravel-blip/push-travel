import { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowRight, CheckCircle2, Tag, Clock, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export interface DropCapOption {
  id: string;
  dropCap: string; // The single letter or stylized drop-cap initial (e.g., "S", "L", "H", "A", "C", "F")
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  pricingOrTerms?: string;
  durationOrTimeline?: string;
  features?: string[];
  subOptions?: { title: string; desc: string }[];
  inclusions?: string[];
  recommendedFor?: string;
  image?: string;
}

interface DropCapAccordionListProps {
  items: DropCapOption[];
  onOpenBooking: (itemTitle: string) => void;
  categoryLabel?: string;
}

export function DropCapAccordionList({ items, onOpenBooking, categoryLabel }: DropCapAccordionListProps) {
  // Single-open accordion state: only one item expanded at any time to guarantee zero clutter
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto w-full">
      {items.map((item, index) => {
        const isOpen = activeId === item.id;
        const indexNumber = String(index + 1).padStart(2, '0');

        return (
          <article
            key={item.id}
            className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
              isOpen
                ? 'bg-white border-amber-400 shadow-xl ring-2 ring-amber-400/20'
                : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-amber-300 shadow-xs hover:shadow-md'
            }`}
          >
            {/* Clickable Header Block with Drop-Cap Typography */}
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              className="w-full text-left p-4 sm:p-6 flex items-start gap-3.5 sm:gap-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl select-none"
            >
              {/* Drop-Cap Initial Badge */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 font-display text-2xl sm:text-3xl font-bold transition-all duration-300 shadow-xs ${
                  isOpen
                    ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-amber-500/25 scale-105'
                    : 'bg-slate-100 group-hover:bg-amber-50 text-slate-800 border border-slate-200'
                }`}
                aria-hidden="true"
              >
                {item.dropCap || item.title.charAt(0)}
              </div>

              {/* Title & Metadata Block */}
              <div className="flex-1 min-w-0 pr-2">
                {item.durationOrTimeline && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.durationOrTimeline}
                    </span>
                  </div>
                )}

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>

              {/* Accordion Toggle Indicator */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-amber-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            {/* Collapsible Drop-Cap Detail Panel (Smooth Disclosure) */}
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100/90 text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* Visual Banner (Optional) */}
                {item.image && (
                  <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-semibold drop-shadow">
                        Pushworld Travel · Dedicated Concierge
                      </span>
                    </div>
                  </div>
                )}

                {/* Main Detailed Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Sub-Options Grid if Available */}
                {item.subOptions && item.subOptions.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-amber-600" />
                      <span>Available Sub-Options & Variations</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.subOptions.map((sub, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-amber-50/50 hover:border-amber-200 transition-colors"
                        >
                          <div className="text-xs font-bold text-slate-900">{sub.title}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{sub.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features Bullet Points */}
                {item.features && item.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                      Included Highlights & Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specific Inclusions / Coverage */}
                {item.inclusions && item.inclusions.length > 0 && (
                  <div className="mb-5 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                    <div className="font-bold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>What is Covered Under This Option:</span>
                    </div>
                    <ul className="space-y-1 text-slate-700">
                      {item.inclusions.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing & Terms Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Pricing & Quotation
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white block">
                      {item.pricingOrTerms || 'Call or Submit a Quotation Request for Full Pricing'}
                    </span>
                    <span className="text-xs text-amber-200/90 block font-medium">
                      Notice: To receive full and accurate pricing, please make a phone call to our desk or submit a quotation request tailored to your dates.
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(item.title)}
                      className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call for Price</span>
                    </a>

                    <a
                      href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
                        `Hi Push World Travel, I am inquiring about "${item.title}". Please send full pricing and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 text-center sm:text-left flex items-center justify-between">
                  <span>Pushworld Travel · Nairobi Office Hotline: {COMPANY_INFO.phone}</span>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="text-amber-700 hover:text-amber-900 font-semibold text-xs"
                  >
                    Collapse ↑
                  </button>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
