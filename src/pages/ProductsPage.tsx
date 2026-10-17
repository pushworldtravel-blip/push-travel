import { Link } from 'react-router-dom';
import { DropCapAccordionList, DropCapOption } from '../components/DropCapAccordion';
import { COMPANY_INFO, SAFARI_STANDARD_INCLUSIONS } from '../data/travelData';
import { heroSafari, destDiani, destDubai, sceneResort } from '../assets/images';
import { Palmtree, ArrowLeft, Headphones, Sparkles, MessageSquare } from 'lucide-react';

interface ProductsPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ProductsPage({ onOpenBooking }: ProductsPageProps) {
  const productOptions: DropCapOption[] = [
    {
      id: 'east-africa-big-five-safaris',
      dropCap: 'E',
      badge: 'Bestseller Package',
      title: 'East Africa Big Five Wildlife Safari Packages',
      subtitle: 'Maasai Mara, Amboseli, Samburu, Lake Nakuru & Tsavo Circuits',
      description: 'Our signature wildlife safari packages immerse you into the quintessential African wilderness. Witness the dramatic predator-prey dynamics of the Maasai Mara, gaze at Mount Kilimanjaros snow peaks towering above hundreds of elephants in Amboseli, and encounter rare northern species like grevys zebras and reticulated giraffes in Samburu.',
      pricingOrTerms: 'All-Inclusive Packages Quoted for 2026 Departures',
      durationOrTimeline: '3 Days / 2 Nights to 8 Days / 7 Nights',
      image: heroSafari,
      features: [
        'Guaranteed window seat in custom 4x4 Safari Land Cruiser with pop-up roof',
        'Top-rated safari lodge or tented camp accommodation with full-board dining',
        'Certified bilingual driver-naturalist guide throughout the circuit',
        'All national park entry permits, conservation fees & bottled drinking water',
      ],
      subOptions: [
        { title: 'Maasai Mara 3-Day Fly-In Safari', desc: 'Direct 45-min bush hop from Wilson Airport with 2 nights in luxury river camp.' },
        { title: 'Amboseli & Tsavo 4-Day Road Expedition', desc: 'Kilimanjaro vistas, red elephants, and Mzima Springs hippo observation pools.' },
        { title: 'Great Rift Valley 5-Day Circuit', desc: 'Maasai Mara combined with Lake Nakuru rhinos and flamingo sanctuaries.' },
      ],
      inclusions: SAFARI_STANDARD_INCLUSIONS,
    },
    {
      id: 'diani-watamu-coastal-packages',
      dropCap: 'D',
      badge: 'Beach Getaways',
      title: 'Coastal Beachfront Resort & Island Holiday Packages',
      subtitle: 'Diani Beach, Watamu Marine Reserve, Chale Island & Malindi',
      description: 'Relax on award-winning powder-white sands bordered by warm Indian Ocean turquoise waters. Our coastal packages include vetted 4-star and 5-star beachfront resorts, return flight or SGR Madaraka Express train ticketing, seamless private station/airport transfers, and complimentary coral reef marine excursions.',
      pricingOrTerms: 'Tailored Resort Packages Quoted per Person Sharing',
      durationOrTimeline: '4 Days / 3 Nights & 5 Days / 4 Nights',
      image: destDiani,
      features: [
        'Beachfront ocean-view rooms with private balconies & sea breezes',
        'Flexible meal plans: Half-Board, Full-Board, or All-Inclusive Drinks & Dining',
        'Private airport / SGR train station meet-and-greet transfers included',
        'Complimentary glass-bottom boat reef excursion and snorkeling equipment',
      ],
      subOptions: [
        { title: 'Diani Beachfront Turquoise Escape (3D/2N)', desc: 'Short weekend recharge on Kenyas premier tropical white sand coastline.' },
        { title: 'Watamu Marine & Malindi Heritage Break (4D/3N)', desc: 'Pristine marine sanctuary reefs combined with Vasco da Gama pillar history.' },
        { title: 'Chale Island Private Resort Retreat (5D/4N)', desc: 'Exclusive mangrove island sanctuary with private overwater suites.' },
      ],
      inclusions: [
        'Resort accommodation on chosen meal plan (Breakfast, Dinner & Beverages)',
        'Roundtrip transfers from Ukunda Airstrip or Mombasa SGR / Moi Airport',
        'Glass-bottom boat coral garden tour with snorkeling gear',
        '24/7 Pushworld Travel concierge desk assistance throughout your stay',
      ],
    },
    {
      id: 'dubai-international-tours',
      dropCap: 'U',
      badge: 'Global City Break',
      title: 'Dubai Futuristic City & Desert Safari Tour Packages',
      subtitle: 'Burj Khalifa, Desert Safari, Marina Dinner Cruise & Gold Souks',
      description: 'Step into the glittering metropolis of the Middle East. Our complete Dubai packages take care of every detail: 4-star city or beach hotel accommodation, Dubai tourist visa processing assistance, airport transfers, Burj Khalifa At the Top observation deck tickets, thrilling 4x4 red dune desert safaris, and romantic luxury Marina dhow cruises.',
      pricingOrTerms: 'From USD $650 per Adult Sharing (Excl. Flight) · Flight Add-On Available',
      durationOrTimeline: '5 Days / 4 Nights & 6 Days / 5 Nights',
      image: destDubai,
      features: [
        'Centrally located 4-star hotel in Downtown Dubai or Deira with daily breakfast',
        'Official 30-day or 60-day UAE tourist visa processing assistance included',
        'Burj Khalifa 124th & 125th floor At the Top tickets with Dubai Mall fountain show',
        'Full evening 4x4 desert safari with dune bashing, camel rides, and BBQ dinner',
        'Marina glass-enclosed luxury dinner cruise with live entertainment and buffet',
      ],
      subOptions: [
        { title: 'Dubai City Explorer (5D/4N)', desc: 'The classic introductory package covering iconic architecture, shopping & desert.' },
        { title: 'Dubai & Abu Dhabi Grand Combo (7D/6N)', desc: 'Includes full-day excursion to Sheikh Zayed Grand Mosque and Ferrari World.' },
        { title: 'Luxury Atlantis Palm Jumeirah Escape (5D/4N)', desc: 'Stay at Palm Jumeirah with unlimited access to Aquaventure Waterpark.' },
      ],
      inclusions: [
        'Private roundtrip airport transfers between Dubai International Airport (DXB) and hotel',
        'Daily buffet breakfast at the hotel restaurant',
        'All described sightseeing tours with English-speaking guides and admission tickets',
        'All local Dubai municipal taxes and Tourism Dirham fees',
      ],
    },
    {
      id: 'august-school-break-specials',
      dropCap: 'A',
      badge: 'Family Favorite',
      title: 'August Holiday & Seasonal School Break Family Specials',
      subtitle: 'Family-Friendly Safaris, Kids Clubs, Beach Breaks & Train Packages',
      description: 'Specially engineered for families, teachers, and school-break travelers. These packages feature interconnecting family suites, child-friendly swimming facilities, junior safari tracker educational bush walks, and convenient SGR train connections between Nairobi and the Mombasa coast for stress-free family travel.',
      pricingOrTerms: 'Family Package Rates (2 Adults + Children Sharing Discounts)',
      durationOrTimeline: '4 Days / 3 Nights & 5 Days / 4 Nights',
      image: sceneResort,
      features: [
        'Accommodations specifically vetted for family safety and kid-friendly amenities',
        'Interconnecting family rooms or 2-bedroom serviced beach apartments',
        'Return SGR train tickets and private station transfers included',
        'Flexible cancellation and date-change terms for peace of mind',
      ],
      subOptions: [
        { title: 'August Diani Beach Family Escape', desc: 'Resort stay with swimming pools, water slides, and shallow lagoon waters.' },
        { title: 'Great Wildebeest Migration Family Safari', desc: 'See millions of wildebeest crossing the Mara River during the peak August season.' },
        { title: 'Lake Naivasha & Crescent Island Break', desc: 'Family boat safari walking safely among giraffes and zebras on Crescent Island.' },
      ],
      inclusions: [
        'Resort/Lodge accommodation with full meal plans suitable for children',
        'SGR Madaraka Express train tickets (First or Economy class) or domestic flights',
        'All station transfers in private family-sized vans',
        'Complimentary resort entertainment and kids club activities',
      ],
    },
    {
      id: 'thailand-bangkok-phuket',
      dropCap: 'P',
      badge: 'Tropical Asia',
      title: 'Thailand Bangkok Temples & Phuket Tropical Island Escapes',
      subtitle: 'Grand Palace, Floating Markets, Phi Phi Islands & Beachfront Resorts',
      description: 'The golden jewel of Southeast Asia. Combine the electric energy, ornate golden temples, and street food markets of Bangkok with the serene tropical beaches and limestone karsts of Phuket and the Phi Phi Islands. A seamless vacation with inter-city flights and private transfers.',
      pricingOrTerms: 'Bespoke International Package Quoted with Flights',
      durationOrTimeline: '7 Days / 6 Nights Total',
      image: sceneResort,
      features: [
        '3 Nights in vibrant Bangkok (4-star central hotel) with Grand Palace guided tour',
        '3 Nights in Phuket (beachfront resort) with direct access to Andaman Sea',
        'Domestic flight between Bangkok and Phuket with baggage allowance included',
        'Full-day speedboat island-hopping excursion to Phi Phi Islands and Maya Bay',
      ],
      subOptions: [
        { title: 'Bangkok & Phuket Classic (7D/6N)', desc: 'Perfect balance of city culture, shopping, and tropical beach relaxation.' },
        { title: 'Phuket & Krabi Island Explorer (8D/7N)', desc: 'Extended island stay exploring Railay Beach and four-island speedboats.' },
      ],
      inclusions: [
        'All 4-star hotel accommodations with daily international buffet breakfast',
        'Domestic one-way airfare from Bangkok to Phuket with luggage',
        'Private airport transfers in both Bangkok and Phuket',
        'Phi Phi Island full-day tour with buffet lunch and snorkeling equipment',
      ],
    },
    {
      id: 'south-africa-cape-town-wine',
      dropCap: 'S',
      badge: 'Southern Africa',
      title: 'South Africa Cape Town, Garden Route & Winelands Escapes',
      subtitle: 'Table Mountain Cable Car, Boulders Beach Penguins & Cape Point',
      description: 'Explore the Mother City of Africa. Ride the revolving aerial cable car to the summit of Table Mountain, visit the African penguin colony at Boulders Beach, drive the breathtaking Chapman’s Peak marine drive, and taste fine cuisine in the Franschhoek and Stellenbosch wine valleys.',
      pricingOrTerms: 'Custom International Itinerary · Direct Flights Available',
      durationOrTimeline: '6 Days / 5 Nights & 8 Days / 7 Nights',
      features: [
        'Luxury 4-star accommodation in Cape Town along the V&A Waterfront or Sea Point',
        'Table Mountain aerial cableway tickets with panoramic ocean views',
        'Full-day Cape Peninsula tour: Cape of Good Hope, Cape Point & Boulders Beach',
        'Guided scenic drive through Franschhoek and Stellenbosch wine estates',
      ],
      subOptions: [
        { title: 'Cape Town Highlights (6D/5N)', desc: 'City sightseeing, Robben Island, Table Mountain, and coastal peninsulas.' },
        { title: 'Cape Town & Garden Route Adventure (9D/8N)', desc: 'Self-drive or guided journey through Knysna, Tsitsikamma, and Plettenberg Bay.' },
      ],
      inclusions: [
        'Hotel accommodation with daily breakfast included',
        'Private roundtrip airport transfers at Cape Town International (CPT)',
        'All described day tours with luxury air-conditioned coaches and entrance fees',
      ],
    },
    {
      id: 'digital-brochures-field-guides',
      dropCap: 'B',
      badge: 'Digital Guides',
      title: 'Digital Travel Brochures & Destination Field Guides',
      subtitle: 'Downloadable PDF Itineraries, Migration Schedules & Packing Checklists',
      description: 'Access our official digital travel publications prepared for the 2026 travel season. These guides provide comprehensive day-by-day breakdowns, recommended camera lenses, yellow fever and malaria health guidelines, tipping etiquette, and seasonal weather patterns across Kenya and global circuits.',
      pricingOrTerms: 'Complimentary Digital Access & PDF Download',
      durationOrTimeline: 'Immediate Access & Download',
      features: [
        'Detailed day-by-day itineraries with route maps and driving distances',
        'Wildlife migration timing calendars for Maasai Mara and Serengeti',
        'Comprehensive safari packing lists and luggage restriction guidelines',
        'Itemized inclusion breakdowns to avoid unexpected travel expenses',
      ],
      subOptions: [
        { title: '2026 Big Five Safari Guide', desc: '5-part guide to Maasai Mara, Amboseli, Samburu, and Tsavo circuits.' },
        { title: 'Coastal Holiday & SGR Guide', desc: 'Resort profiles, SGR train schedules, and marine park safety tips.' },
        { title: 'Global Travel & Visa Advisory Catalogue', desc: 'Embassy requirements and checklists for UK, Dubai, and Schengen travel.' },
      ],
      inclusions: [
        'Instant digital PDF download to your smartphone, tablet, or desktop',
        'Shareable links via WhatsApp and email for group travel planning',
        'Direct consultation hotline with the authors of each guide',
      ],
    },
    {
      id: 'corporate-travel-passes',
      dropCap: 'M',
      badge: 'Corporate Program',
      title: 'Corporate Travel Retainers & Annual Business Account Passes',
      subtitle: 'Consolidated Billing, Preferred Airfare Rates & Fast-Track Service',
      description: 'Streamline your enterprise travel procurement with our corporate account program. We provide consolidated monthly billing, dedicated account managers, zero-stress employee booking portals, priority flight reservations, and vetted airport chauffeur services for organizations in Nairobi and across East Africa.',
      pricingOrTerms: 'Custom Corporate Account Agreement · Net 30 Terms Available',
      durationOrTimeline: 'Annual Corporate Retainer Program',
      features: [
        'Consolidated monthly tax invoicing compliant with Kenya Revenue Authority (KRA)',
        'Designated senior corporate travel account manager reachable 24/7',
        'Pre-negotiated corporate rates at major business hotels in Nairobi and Mombasa',
        'Flexible ticket reissue and cancellation waivers on key airline partners',
      ],
      subOptions: [
        { title: 'SME Business Travel Pass', desc: 'Tailored for growing companies with 5 to 50 frequent executive travelers.' },
        { title: 'NGO & Diplomatic Mission Program', desc: 'Customized per-diem management, field transfers, and tax-exempt processing.' },
        { title: 'Annual Corporate Offsite Retainer', desc: 'Guaranteed venue reservations and team-building coordination twice per year.' },
      ],
      inclusions: [
        'Dedicated corporate service level agreement (SLA) with 15-minute response times',
        'Detailed quarterly travel expenditure reporting and analytics',
        'Emergency 24-hour traveler re-routing and crisis support desk',
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold">
            <Palmtree className="w-3.5 h-3.5 text-emerald-600" />
            <span>Top-Level Category: Products</span>
          </div>
        </div>

        {/* Sub-Page Header - Clean & Minimal Interface */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Curated Travel Packages & Products</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Travel Products Directory
          </h1>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Organized in our clean, single-open <strong>Drop-Cap Accordion</strong>. Click any product package heading below to cleanly expand its day-by-day highlights, inclusions, and tailored quote options.
          </p>
        </div>

        {/* Drop-Cap Interactive Accordion Layout */}
        <DropCapAccordionList
          items={productOptions}
          onOpenBooking={onOpenBooking}
          categoryLabel="Pushworld Travel Products"
        />

        {/* Minimal Bottom Help Desk Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Looking for a specific destination or package not listed?</div>
              <div className="text-xs text-slate-500 mt-0.5">Speak with our product team at <span className="font-semibold text-slate-800">{COMPANY_INFO.phone}</span></div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking('Custom Travel Package Inquiry')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
            >
              Request Custom Quote
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to inquire about customized holiday packages.')}`}
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
