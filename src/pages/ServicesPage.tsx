import { Link } from 'react-router-dom';
import { DropCapAccordionList, DropCapOption } from '../components/DropCapAccordion';
import { COMPANY_INFO, MAIN_SERVICES_LIST } from '../data/travelData';
import { sceneResort, heroSafari, sceneMountain, destDubai } from '../assets/images';
import { Briefcase, ArrowLeft, Headphones, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ServicesPage({ onOpenBooking }: ServicesPageProps) {
  const serviceOptions: DropCapOption[] = [
    {
      id: 'luxury-premium-travel',
      dropCap: 'L',
      badge: 'VIP Concierge',
      title: 'Luxury and Premium Travel Management',
      subtitle: 'Tailored High-End Escapes, 5-Star Lodges & Private Aviation',
      description: 'Exclusive luxury travel planning for discerning travelers, executive delegations, and couples seeking the finest hospitality across Kenya and internationally. We orchestrate private chartered flights, presidential safari suites, dedicated 4x4 Land Cruisers with senior naturalist guides, and seamless VIP fast-track airport clearances.',
      pricingOrTerms: 'Itemized Bespoke Proposal',
      durationOrTimeline: 'Flexible Itineraries',
      image: sceneResort,
      features: [
        'Exclusive boutique lodges, private island villas & luxury tented camps',
        'Private 4x4 Land Cruiser with pop-up roof & senior safari guide',
        'Charter flight options & VIP fast-track airport meet-and-assist',
        '24/7 dedicated personal travel director assigned to your booking',
      ],
      subOptions: [
        { title: 'Private Helicopter & Bush Charter Safaris', desc: 'Direct fly-in connections to remote conservancies in Maasai Mara, Samburu & Laikipia.' },
        { title: 'Exclusive Beachfront Villa Buyouts', desc: 'Private chef, butler service, and infinity oceanfront pools in Diani Beach & Zanzibar.' },
        { title: 'Presidential & Diplomatic Delegations', desc: 'Discreet, high-security protocol, executive armored ground transport & luxury suites.' },
      ],
      inclusions: [
        'All private ground transfers in luxury executive vehicles',
        'Curated boutique accommodation with full-board gourmet dining',
        'Private conservancy access & exclusive game drive permits',
        'Comprehensive passenger travel insurance coordination',
      ],
    },
    {
      id: 'custom-trip-planner',
      dropCap: 'C',
      badge: 'Bespoke Design',
      title: 'Custom Trip Planner & Tailored Itineraries',
      subtitle: 'Personalized Journeys Designed Around Your Dates, Budget & Group',
      description: 'Our bespoke trip planner pairs you with a senior Kenya travel advisor to build your journey from the ground up. Whether coordinating a multi-generation family safari, a honeymoon beach break, or a solo discovery trek, we balance driving times, wildlife movements, and accommodation styles to your exact pace.',
      pricingOrTerms: 'Complimentary Consultation & Itemized Quotation',
      durationOrTimeline: '3 to 21+ Days Custom Duration',
      image: heroSafari,
      features: [
        'One-on-one consultation with certified local travel planners',
        'Clear daily schedules with flexible pacing & transparent pricing',
        'Handpicked accommodations across safari, coastal, and city circuits',
        'Option to combine bush safaris with beach relaxation and international flights',
      ],
      subOptions: [
        { title: 'Bush & Beach Combinations', desc: 'Pair a Maasai Mara Big Five safari with turquoise relaxation in Diani Beach.' },
        { title: 'Family Safari & Child-Friendly Lodges', desc: 'Interconnecting rooms, swimming pools, and junior ranger bush activities.' },
        { title: 'Romantic & Honeymoon Itineraries', desc: 'Candlelight bush dinners, private plunge pools, and surprise sundowners.' },
      ],
      inclusions: [
        'Customized day-by-day travel blueprint and digital itinerary document',
        'Full hotel/lodge reservation management with confirmed vouchers',
        '4x4 Land Cruiser transportation with experienced bilingual driver-guide',
        'All park entry fees, conservation levies, and government taxes',
      ],
    },
    {
      id: 'corporate-travel-management',
      dropCap: 'B',
      badge: 'Business & MICE',
      title: 'Corporate Travel, Offsites & Team Building',
      subtitle: 'Executive Business Travel, Group Delegations & Team Retreats',
      description: 'End-to-end corporate travel management for corporate enterprises, NGOs, embassies, and academic institutions. We coordinate group flight tickets, negotiate discounted corporate hotel blocks, organize conference transport, and design high-impact team-building retreats in scenic locations like Naivasha, Nakuru, and Mount Kenya.',
      pricingOrTerms: 'Corporate Retainer & Volume Discount Invoicing',
      durationOrTimeline: 'Day Events, Weekend Offsites & Annual Retainers',
      image: sceneMountain,
      features: [
        'Full corporate retreat planning with certified facilitators',
        'Group airfare reservations & flexible corporate change policies',
        'Executive chauffeur transport, luxury coaches & airport shuttles',
        'Consolidated tax invoicing and dedicated corporate travel account manager',
      ],
      subOptions: [
        { title: 'Executive Strategy Offsites', desc: 'Private boardroom facilities in serene highland and lakeside retreats.' },
        { title: 'Company-Wide Team Building Escapes', desc: 'Outdoor obstacle challenges, leadership simulations, and evening bonfires.' },
        { title: 'Conference & MICE Logistics', desc: 'Airport welcome desks, delegate transfers, and VIP speaker accommodations.' },
      ],
      inclusions: [
        'Conference hall hire with AV equipment, high-speed WiFi & stationery',
        'Buffet lunch, morning & afternoon tea breaks with pastries',
        'Group transport in air-conditioned executive buses or private vans',
        'Facilitated team activities with professional team trainers',
      ],
    },
    {
      id: 'flight-reservations-ticketing',
      dropCap: 'F',
      badge: 'Domestic & Global',
      title: 'Flight Reservations, Ticketing & Airline Desk',
      subtitle: 'Kenya Domestic Safari Bush Flights & Global International Fares',
      description: 'Access competitive airfares through our direct airline partnerships. We manage domestic scheduled bush hops into Maasai Mara, Amboseli, Diani/Ukunda, Lamu, and Samburu, as well as international long-haul itineraries connecting Nairobi to Dubai, London, Europe, South Africa, and Asia.',
      pricingOrTerms: 'Best Available Published & Negotiated Group Fares',
      durationOrTimeline: 'Instant Issuance & Schedule Monitoring',
      image: destDubai,
      features: [
        'Direct bush flights from Wilson Airport (WIL) to national park airstrips',
        'International airline booking with checked luggage allowances',
        'Assistance with seat selections, extra baggage, and special meal requests',
        '24/7 flight delay rebooking assistance and schedule tracking',
      ],
      subOptions: [
        { title: 'Safari Bush Hop Flights', desc: 'Save 6+ hours of road travel with scenic 45-minute flights into reserve airstrips.' },
        { title: 'Group & Delegation Airfares', desc: 'Flexible name change policies and staggered payment deadlines for groups.' },
        { title: 'Business Class Upgrades', desc: 'Negotiated premium cabin ticketing on major international carriers.' },
      ],
      inclusions: [
        'Electronic ticket issuance with verifiable PNR airline confirmation',
        'Real-time flight schedule monitoring and SMS/WhatsApp updates',
        'Airstrip transfer coordination with your destination safari lodge',
      ],
    },
    {
      id: 'hotel-villas-vacation-homes',
      dropCap: 'H',
      badge: 'Vetted Stays',
      title: 'Hotels, Beachfront Villas, Vacation Homes & B&Bs',
      subtitle: 'Curated Accommodations Across Cities, Coastlines & Savannahs',
      description: 'We take the guesswork out of booking accommodation by offering personally vetted properties. From 5-star international business hotels in Nairobi to secluded beachfront pool villas in Diani and Watamu, rustic eco-cottages, and serviced apartments, every stay matches our high safety and comfort standards.',
      pricingOrTerms: 'Negotiated Agency Rates & Exclusive Value Add-Ons',
      durationOrTimeline: 'Nightly, Weekly & Monthly Stays',
      image: sceneResort,
      features: [
        'Handpicked beachfront villas with private swimming pools and private chefs',
        'Safari luxury tented camps situated along major wildlife migratory paths',
        'Serviced urban apartments in Westlands and Nairobi CBD for business trips',
        'Negotiated rates including complimentary breakfast, room upgrades & late check-out',
      ],
      subOptions: [
        { title: 'Private Diani Beachfront Villas', desc: 'Spacious 2 to 6-bedroom private compounds ideal for families and friend groups.' },
        { title: 'Authentic Safari Tented Camps', desc: 'Immersive bush luxury under canvas with en-suite bathrooms and private verandas.' },
        { title: 'Nairobi Airport Transit Stays', desc: 'Quiet, secure hotels within 15 minutes of Jomo Kenyatta International Airport.' },
      ],
      inclusions: [
        'Confirmed accommodation voucher with guaranteed room category',
        'Specified meal plans (Bed & Breakfast, Half-Board, or All-Inclusive)',
        'Direct concierge line with the property management',
      ],
    },
    {
      id: 'airport-transfers-ground-transport',
      dropCap: 'A',
      badge: 'Reliable Fleet',
      title: 'Airport Transfers & Chauffeur Ground Transportation',
      subtitle: 'Punctual JKIA, Wilson & SGR Pickups in Clean, Insured Vehicles',
      description: 'Enjoy peace of mind upon landing in Kenya with our punctual airport transfer desk. Our professional drivers track your flight status in real time and greet you inside the arrival terminal. Our modern fleet includes executive sedans, spacious Toyota Alphard/Voxy minivans, 4x4 Safari Land Cruisers, and 33-seater executive buses.',
      pricingOrTerms: 'Transparent Fixed Pricing · Zero Surge Fees',
      durationOrTimeline: '24/7 On-Demand & Advance Scheduled Pickups',
      features: [
        'Personal meet-and-greet with name signboard at arrival gate',
        'Flight delay tracking with complimentary wait time',
        'Clean, air-conditioned vehicles with commercial PSV passenger insurance',
        'Transfers between JKIA, Wilson Airport, Nairobi CBD, and Mombasa SGR stations',
      ],
      subOptions: [
        { title: 'Executive Chauffeur Drive', desc: 'Dedicated full-day vehicle hire with experienced driver for city appointments.' },
        { title: '4x4 Safari Cruiser Safari Hire', desc: 'Customized Land Cruisers with pop-up roofs, cooler boxes, and VHF radios.' },
        { title: 'Inter-City Transfers', desc: 'Direct road travel between Nairobi, Naivasha, Nakuru, and Mount Kenya.' },
      ],
      inclusions: [
        'All vehicle fuel, highway tolls, and airport parking fees included',
        'Professional, licensed chauffeur dressed in company uniform',
        'Complimentary luggage handling and bottled drinking water',
      ],
    },
    {
      id: 'travel-insurance-cover',
      dropCap: 'T',
      badge: 'Protection Advisory',
      title: 'Travel Insurance & Travel Cover Advisory',
      subtitle: 'Comprehensive Medical, Emergency Evacuation & Baggage Cover Guidance',
      description: 'Travel with absolute confidence. Our advisors assist you in reviewing and selecting appropriate travel insurance policies from accredited insurance underwriters. Protect your journey against medical emergencies, flying doctor bush evacuations, trip interruptions, flight cancellations, and lost luggage.',
      pricingOrTerms: 'Policy Quoted Based on Age, Destination & Trip Duration',
      durationOrTimeline: 'Single-Trip, Annual Multi-Trip & Family Cover',
      features: [
        'Emergency medical treatment and hospitalization coverage guidance',
        'AMREF Flying Doctors airborne emergency bush evacuation add-ons',
        'Reimbursement for non-refundable trip cancellations and travel delays',
        'Luggage loss, baggage delay, and personal document replacement support',
      ],
      subOptions: [
        { title: 'Inbound Kenya Safari Cover', desc: 'Specialized medical & air-ambulance evacuation cover for visitors in Kenya.' },
        { title: 'Outbound Schengen & Worldwide Insurance', desc: 'Compliant with visa requirements for Europe, UK, USA, Dubai, and Asia.' },
        { title: 'Corporate Multi-Trip Annual Cover', desc: 'Comprehensive year-round insurance for frequent business executives.' },
      ],
      inclusions: [
        'Direct consultation on policy comparison and exclusions review',
        'Official certificate of insurance ready for embassy visa submission',
        'Emergency 24-hour worldwide assistance contact numbers',
      ],
    },
    {
      id: 'visa-assistance-advisory',
      dropCap: 'V',
      badge: 'Document Advisory',
      title: 'Visa Assistance & Administrative Concierge',
      subtitle: 'Checklist Verification, Application Guidance & Reservation Auditing',
      description: 'Navigate international visa requirements smoothly with our administrative travel advisory desk. We review application requirements for key international destinations including the UK, Schengen Area, USA, Dubai, South Africa, and Thailand, helping you prepare verified flight itineraries and hotel bookings to avoid costly delays.',
      pricingOrTerms: 'Fixed Administrative Advisory Fee',
      durationOrTimeline: 'Pre-Submission Verification within 24 Hours',
      features: [
        'Comprehensive checklist audit based on current embassy requirements',
        'Issuance of verifiable flight reservations and hotel booking confirmations',
        'Application portal navigation and document formatting guidance',
        'Clear distinction: Final approval decisions rest solely with immigration authorities',
      ],
      subOptions: [
        { title: 'Dubai Tourist Visa Services', desc: 'Expedited 30-day and 60-day UAE tourist visa processing assistance.' },
        { title: 'UK & Schengen Document Review', desc: 'Detailed file checking before your appointment at TLScontact or VFS Global.' },
        { title: 'Kenya Electronic Travel Authorisation (eTA)', desc: 'Guidance for international inbound tourists entering Kenya smoothly.' },
      ],
      inclusions: [
        'Document review for completeness and consistency',
        'Verifiable flight itinerary for visa processing',
        'Confirmed accommodation voucher meeting consular standards',
      ],
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Landing Hub</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>Top-Level Category: Services</span>
          </div>
        </div>

        {/* Sub-Page Header - Clean & Minimal Interface */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>8 Core Travel Management Solutions</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Travel Services Directory
          </h1>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Organized in our clean, single-open <strong>Drop-Cap Accordion</strong>. Click any service heading below to cleanly expand its details, specifications, and tailored quote options.
          </p>
        </div>

        {/* Drop-Cap Interactive Accordion Layout */}
        <DropCapAccordionList
          items={serviceOptions}
          onOpenBooking={onOpenBooking}
          categoryLabel="Pushworld Travel Services"
        />

        {/* Minimal Bottom Help Desk Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Need a custom combination of services?</div>
              <div className="text-xs text-slate-500 mt-0.5">Call our Nairobi concierge desk at <span className="font-semibold text-slate-800">{COMPANY_INFO.phone}</span></div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking('Custom Travel Package Consultation')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
            >
              Request Custom Quote
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I need assistance combining multiple travel services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
