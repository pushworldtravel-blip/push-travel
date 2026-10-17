import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropCapAccordionList, DropCapOption } from '../components/DropCapAccordion';
import { COMPANY_INFO, SAFARI_STANDARD_INCLUSIONS } from '../data/travelData';
import { heroSafari, destDiani, destDubai, sceneResort, sceneMountain } from '../assets/images';
import { 
  Palmtree, 
  ArrowLeft, 
  Headphones, 
  Sparkles, 
  MessageSquare,
  Globe2,
  Compass,
  FileText
} from 'lucide-react';

interface ProductsPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ProductsPage({ onOpenBooking }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'safari' | 'coastal' | 'international' | 'family' | 'digital'>('all');

  const allProductOptions: (DropCapOption & { category: 'safari' | 'coastal' | 'international' | 'family' | 'digital' })[] = [
    {
      id: 'east-africa-big-five-safaris',
      category: 'safari',
      dropCap: 'E',
      badge: 'Bestseller Safari Package',
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
      category: 'coastal',
      dropCap: 'D',
      badge: 'Beach Holiday Package',
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
      id: 'august-school-break-specials',
      category: 'family',
      dropCap: 'A',
      badge: 'Family & School Break Special',
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
      id: 'dubai-international-tours',
      category: 'international',
      dropCap: 'U',
      badge: 'International Tour Package',
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
      id: 'thailand-bangkok-phuket',
      category: 'international',
      dropCap: 'P',
      badge: 'Tropical Asia Package',
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
      category: 'international',
      dropCap: 'S',
      badge: 'Southern Africa Package',
      title: 'South Africa Cape Town, Garden Route & Winelands Escapes',
      subtitle: 'Table Mountain Cable Car, Boulders Beach Penguins & Cape Point',
      description: 'Explore the Mother City of Africa. Ride the revolving aerial cable car to the summit of Table Mountain, visit the African penguin colony at Boulders Beach, drive the breathtaking Chapman’s Peak marine drive, and taste fine cuisine in the Franschhoek and Stellenbosch wine valleys.',
      pricingOrTerms: 'Custom International Itinerary · Direct Flights Available',
      durationOrTimeline: '6 Days / 5 Nights & 8 Days / 7 Nights',
      image: sceneMountain,
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
      id: 'nairobi-day-excursion-package',
      category: 'safari',
      dropCap: 'N',
      badge: 'Day Tour Package',
      title: 'Nairobi City & Wildlife Sanctuary Day Tour Package',
      subtitle: 'Nairobi National Park, Daphne Sheldrick Elephant Orphanage & Giraffe Centre',
      description: 'Complete all-in-one day excursion package covering the wildlife highlights of Kenyas capital. Includes private transport, professional naturalist guide, guaranteed admission tickets, and optional traditional Kenyan luncheon.',
      pricingOrTerms: 'KES 7,500 (Residents) / USD $135 (Non-Residents) All-Inclusive',
      durationOrTimeline: 'Full Day (06:00 AM - 04:30 PM)',
      features: [
        'Early morning 4-hour safari drive in Nairobi National Park',
        'Official Daphne Sheldrick elephant fostering session attendance',
        'Hand-feeding endangered Rothschild giraffes at the Giraffe Centre',
        'Door-to-door hotel and airport pickup in a private 4x4 safari cruiser',
      ],
      subOptions: [
        { title: 'Standard Wildlife Trio Package', desc: 'Nairobi National Park + Sheldrick Orphanage + Giraffe Centre.' },
        { title: 'Wildlife & Culture Package', desc: 'Adds Bomas of Kenya traditional tribal dances and craft village tour.' },
      ],
      inclusions: [
        'Private 4x4 Land Cruiser with pop-up roof and dedicated chauffeur',
        'All sanctuary admissions and conservation fees included',
        'Complimentary bottled drinking water and cold beverages',
      ],
    },
    {
      id: 'digital-brochures-field-guides',
      category: 'digital',
      dropCap: 'B',
      badge: 'Digital Itinerary Product',
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
  ];

  const displayedOptions = selectedCategory === 'all'
    ? allProductOptions
    : allProductOptions.filter((item) => item.category === selectedCategory);

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
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Curated Travel Packages & Holiday Products</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Travel Products & Packages
          </h1>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Organized in our clean, single-open <strong>Drop-Cap Accordion</strong>. All signature safari packages, coastal escapes, family breaks, and international holiday products are curated below. Click any heading to cleanly reveal day-by-day highlights, inclusions, and tailored quote options.
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setSelectedCategory('safari')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                selectedCategory === 'safari'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Wildlife Safaris</span>
            </button>
            <button
              onClick={() => setSelectedCategory('coastal')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                selectedCategory === 'coastal'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Palmtree className="w-3.5 h-3.5" />
              <span>Coastal & Beach</span>
            </button>
            <button
              onClick={() => setSelectedCategory('family')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                selectedCategory === 'family'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Family Specials</span>
            </button>
            <button
              onClick={() => setSelectedCategory('international')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                selectedCategory === 'international'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Tours</span>
            </button>
            <button
              onClick={() => setSelectedCategory('digital')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1 ${
                selectedCategory === 'digital'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Field Brochures</span>
            </button>
          </div>
        </div>

        {/* Drop-Cap Interactive Accordion Layout */}
        <DropCapAccordionList
          items={displayedOptions}
          onOpenBooking={onOpenBooking}
          categoryLabel="Package"
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
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd, I would like to inquire about customized holiday packages.')}`}
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
