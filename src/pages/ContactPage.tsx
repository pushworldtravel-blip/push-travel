import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, GOOGLE_DATA } from '../data/travelData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Star, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ExternalLink,
  ArrowLeft,
  Headphones
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ContactPage({ onOpenBooking }: ContactPageProps) {
  const [filterRating, setFilterRating] = useState<'all' | '5star'>('all');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const filteredReviews = filterRating === '5star' 
    ? GOOGLE_DATA.reviews.filter(r => r.rating === 5)
    : GOOGLE_DATA.reviews;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Contact Inquiry - Pushworld Travel*\n` +
      `• *Name:* ${inquiryName}\n` +
      `• *Phone:* ${inquiryPhone}\n` +
      `• *Email:* ${inquiryEmail || 'N/A'}\n` +
      `• *Message:* ${inquiryMessage}`;
    
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(msg)}`, '_blank');
    setFormSent(true);
  };

  return (
    <main className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Contacts</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Headphones className="w-3.5 h-3.5 text-amber-600" />
            <span>24/7 Travel Desk & Office</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Find Us in Nairobi or Call Our Office
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach us in Nairobi or call our office anytime. Our travel desk is on standby 24/7 to assist with your bookings, safaris, flights, and holiday arrangements.
          </p>
        </div>

        {/* 2-Column Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Office Telephone & Verified Business Profile */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Direct Office Number
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-400 transition-colors tracking-tight font-display block"
              >
                {COMPANY_INFO.phone}
              </a>
              <div className="text-xs text-slate-400 mt-1">
                International Line: <span className="text-slate-300 font-medium">{COMPANY_INFO.phoneInternational}</span>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-slate-400">Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operating Hours</div>
                    <div className="text-slate-400">{COMPANY_INFO.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex-1 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Office Now</span>
                </a>

                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to consult with an advisor.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Verified Rating Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center font-extrabold text-2xl font-display shrink-0">
                {GOOGLE_DATA.rating}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Google Verified Business Profile
                </div>
                <div className="text-xs text-slate-500">
                  Based on {GOOGLE_DATA.reviewsCount}+ verified client reviews in Kenya
                </div>
              </div>
            </div>

          </div>

          {/* Right: Direct Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Send a Direct Travel Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below and our travel desk will prepare an itemized quote immediately.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">Inquiry Dispatched to WhatsApp!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you! Our concierge team has received your message and will follow up with quotation options.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Grace Wanjiru"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="e.g. 0725..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:bg-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travel Plan or Service Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Specify your desired destination (e.g. Maasai Mara, Diani, Dubai), dates, group size, and any special requests..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit via Concierge Desk</span>
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Instant reply · No spam · 100% confidential
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Verified Google Reviews Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                Client Testimonials
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Verified Google Traveler Reviews
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterRating('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterRating === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setFilterRating('5star')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterRating === '5star'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                5-Star Only
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs flex items-center gap-1">
                          <span>{rev.author}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <div className="text-[10px] text-slate-400">{rev.badge}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-emerald-700 font-semibold">Verified Client Experience</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>Traveled with Pushworld Travel recently? Leave feedback on Google.</span>
            <a
              href={GOOGLE_DATA.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-700 font-bold hover:underline"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
