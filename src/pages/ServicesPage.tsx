import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { DropCapAccordionList, DropCapOption } from '../components/DropCapAccordion';
import { COMPANY_INFO } from '../data/travelData';
import { 
  sceneResort, 
  heroSafari, 
  sceneMountain, 
  destDubai, 
  destDiani 
} from '../assets/images';
import { 
  Briefcase, 
  Compass, 
  ArrowLeft, 
  Sparkles, 
  Phone,
  Home
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ServicesPage({ onOpenBooking }: ServicesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'tours' || searchParams.get('tab') === 'excursions' ? 'tours' : 'all';
  const [activeFilter, setActiveFilter] = useState<'all' | 'services' | 'tours'>(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'tours' || tab === 'excursions') {
      setActiveFilter('tours');
    }
  }, [searchParams]);

  // Core Travel Management & BnB Stays
  const travelServices: DropCapOption[] = [
    {
      id: 'luxury-premium-travel',
      dropCap: 'L',
      badge: 'VIP Concierge',
      title: 'Luxury and Premium Travel Management',
      subtitle: 'Tailored High-End Escapes, 5-Star Lodges & Private Aviation',
      description: 'Exclusive luxury travel planning for discerning travelers, executive delegations, and couples seeking the finest hospitality across Kenya and internationally. We orchestrate private chartered flights, presidential safari suites, dedicated 4x4 Land Cruisers with senior naturalist guides, and seamless VIP fast-track airport clearances.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
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
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
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
      pricingOrTerms: 'Call or Submit a Quotation Request for Corporate Pricing',
      durationOrTimeline: 'Day Events, Weekend Offsites & Annual Retainers',
      image: sceneMountain,
      features: [
        'Full corporate retreat planning with certified facilitators',
        'Group airfare reservations & flexible corporate change policies',
        'Executive ground transfers with uniformed licensed chauffeurs',
        'Consolidated company monthly invoicing and transparent reporting',
      ],
      subOptions: [
        { title: 'Team Building in Naivasha & Rift Valley', desc: 'Dynamic outdoor obstacle courses, raft building, and scenic lakeside bonfire retreats.' },
        { title: 'Annual General Meetings & Conferences', desc: 'Audio-visual setup, delegate accommodation blocks, and airport shuttle fleets.' },
        { title: 'Executive Board Retreats', desc: 'Ultra-private safari conservancy lodges with dedicated boardroom facilities.' },
      ],
      inclusions: [
        'Designated corporate account manager assigned to your organization',
        'Negotiated group rates with verified hotel and resort partners',
        'Detailed VAT-compliant invoicing and travel expenditure logs',
      ],
    },
    {
      id: 'flight-air-ticketing',
      dropCap: 'F',
      badge: 'Air Travel Desk',
      title: 'Flight Bookings & Air Ticketing Services',
      subtitle: 'Domestic Safari Bush Flights, Regional Connections & International Routes',
      description: 'Effortless flight reservation desk covering scheduled commercial airlines and remote bush airstrip charters. We manage seat selection, extra baggage allowances, flight date changes, and fly-in safari connections to airstrips in Maasai Mara (Keekorok, Ol Kiombo, Musiara), Amboseli, Samburu, Nanyuki, Diani (Ukunda), and Malindi.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Flight Fares',
      durationOrTimeline: 'Instant E-Ticket Issuance & 24/7 Monitoring',
      image: destDubai,
      features: [
        'Direct scheduled bush flights connecting Wilson Airport (WIL) to national parks',
        'Competitive fares on Kenya Airways, Jambojet, Emirates, Qatar, Ethiopian & more',
        'Comprehensive re-routing, cancellation, and date rebooking management',
        'Group flight allocations for weddings, delegations, and safari parties',
      ],
      subOptions: [
        { title: 'Wilson Airport Bush Flights', desc: 'Scheduled scenic Caravans connecting Nairobi directly into Maasai Mara, Amboseli, and Samburu.' },
        { title: 'Coast Commuter Flights', desc: 'Quick 50-minute flights from Nairobi to Ukunda (Diani), Moi Airport (Mombasa), or Malindi.' },
        { title: 'International Airline Ticketing', desc: 'Negotiated economy and business class ticketing on major world carriers.' },
      ],
      inclusions: [
        'Electronic ticket issuance with verifiable PNR airline confirmation',
        'Real-time flight schedule monitoring and SMS/WhatsApp updates',
        'Airstrip transfer coordination with your destination safari lodge',
      ],
    },
    {
      id: 'hotel-lodges-resorts',
      dropCap: 'H',
      badge: 'Hotels & Lodges',
      title: 'Hotels, Luxury Safari Lodges & Boutique Resorts',
      subtitle: 'Curated 5-Star Lodges, Tented Camps & International Hotels',
      description: 'We negotiate and secure the best room rates at top luxury safari lodges, tented camps, beachfront resorts, and business hotels across Kenya and internationally. Every property is hand-selected for premier service, hygiene, and exceptional comfort.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Flexible Nightly, Weekly & Group Bookings',
      image: sceneResort,
      features: [
        'Safari luxury tented camps situated along major wildlife migratory paths',
        'Top 5-star international business hotels in Nairobi and major cities',
        'Beachfront resort rooms and suites in Diani Beach, Nyali, and Watamu',
        'Negotiated preferential rates including breakfast, room upgrades & late checkout',
      ],
      subOptions: [
        { title: 'Luxury Safari Tented Lodges', desc: 'Immersive bush luxury under canvas with en-suite bathrooms and river views.' },
        { title: '5-Star City Executive Hotels', desc: 'Central locations in Westlands, Upper Hill, and CBD with conference facilities.' },
        { title: 'Oceanfront Beach Resorts', desc: 'All-inclusive and half-board beachfront stays in Diani, Mombasa, and Malindi.' },
      ],
      inclusions: [
        'Confirmed accommodation voucher with guaranteed room category',
        'Specified meal plans (Bed & Breakfast, Half-Board, or All-Inclusive)',
        'Direct coordination with property management for special requests',
      ],
    },
    {
      id: 'bnb-furnished-rentals',
      dropCap: 'B',
      badge: 'All Kinds of BnB Available',
      title: 'BnB Services & Furnished Stays (Available on Request)',
      subtitle: 'All Kinds of BnB Available at Your Request Across Nairobi, Coast & Upcountry',
      description: 'Looking for a comfortable bed & breakfast, an executive furnished city apartment, a coastal beach villa, or a serene countryside cottage? We provide all kinds of BnB options available directly at your request. Whether you need a modern studio or 2-3 bedroom apartment in Nairobi (Kilimani, Westlands, Kileleshwa, Upper Hill, Karen), a private oceanfront pool villa in Diani or Watamu, or a peaceful countryside cottage in Naivasha or Nanyuki, our team finds and confirms the ideal vetted stay matching your exact requirements and budget.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Daily, Weekly & Monthly Flexible Bookings',
      image: sceneResort,
      features: [
        'All kinds of BnB available at your request: studios, 1-3 bedroom furnished apartments, private villas & cottages',
        'Prime locations across Nairobi (Westlands, Kilimani, Karen, Upper Hill) & Kenya Coast (Diani, Nyali, Watamu)',
        'High-speed Wi-Fi, fully equipped modern kitchen, smart TV, hot water & 24/7 guarded security',
        'Professional housekeeping, fresh linen, swimming pool access, and optional private chef service',
      ],
      subOptions: [
        { title: 'Executive City BnBs & Apartments', desc: 'Modern furnished suites in Nairobi with work desks, fast Wi-Fi, and gym/pool facilities for business and leisure.' },
        { title: 'Coastal Beachfront Villas & BnBs', desc: 'Private self-catering beach homes, cottages, and villas with direct ocean access in Diani, Nyali & Watamu.' },
        { title: 'Upcountry Retreats & Safari Cottages', desc: 'Peaceful scenic getaways in Naivasha, Nanyuki, Mount Kenya, and Rift Valley for families and weekend retreats.' },
        { title: 'Bespoke BnB on Demand', desc: 'Simply tell us your preferred location, group size, and dates—we locate and confirm vetted options immediately.' },
      ],
      inclusions: [
        'Verified property inspection guaranteeing hygiene, safety, and amenities as described',
        'Seamless host coordination and key handover for smooth check-in and check-out',
        'Optional airport or SGR private transport bundle directly to your BnB doorstep',
        'Dedicated 24/7 guest support for special requests and stay extensions',
      ],
    },
    {
      id: 'airport-transfers-ground-transport',
      dropCap: 'A',
      badge: 'Reliable Fleet',
      title: 'Airport Transfers & Chauffeur Ground Transportation',
      subtitle: 'Punctual JKIA, Wilson & SGR Pickups in Clean, Insured Vehicles',
      description: 'Travel stress-free with guaranteed door-to-door ground transfers. Whether arriving late at night at Jomo Kenyatta International Airport (JKIA), departing from Wilson Airport (WIL) for a bush flight, or catching the SGR Madaraka Express train at Nairobi Terminus, our professional chauffeurs track your flight in real time and meet you inside arrivals with a personalized name-board.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Transfer Rates',
      durationOrTimeline: '24/7 Dedicated Chauffeur Fleet',
      image: heroSafari,
      features: [
        'Flight status tracking to adjust for delays or early aircraft arrivals automatically',
        'Clean, air-conditioned saloon cars, 7-seater Noah/Voxy vans & executive SUVs',
        'Custom 4x4 Safari Land Cruisers with pop-up roof for upcountry safaris',
        'Child safety seats available upon advance request at no extra charge',
      ],
      subOptions: [
        { title: 'JKIA International Airport Transfers', desc: 'Seamless door-to-door transfer between JKIA and any Nairobi hotel or residence.' },
        { title: 'SGR Train Station Transfers', desc: 'Scheduled pickups and drop-offs at Syokimau Terminus and Mombasa Miritini Terminus.' },
        { title: 'Full-Day Chauffeur Hire', desc: 'Dedicated car and driver at your disposal for city meetings, shopping, and dining.' },
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
      pricingOrTerms: 'Call or Submit a Quotation Request for Insurance Quotes',
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
      title: 'Visa Assistance & Administrative Advisory Desk',
      subtitle: 'Checklist Verification, Application Guidance & Reservation Auditing',
      description: 'Navigate international visa requirements smoothly with our administrative travel advisory desk. We review application requirements for key international destinations including the UK, Schengen Area, USA, Dubai, South Africa, and Thailand, helping you prepare verified flight itineraries and hotel bookings to avoid costly delays.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Advisory Fees',
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

  // Guided Day Tours & Activities (Seamlessly integrated into Services)
  const tourActivities: DropCapOption[] = [
    {
      id: 'big-five-game-drives',
      dropCap: 'G',
      badge: 'Iconic Safari Tour',
      title: 'Big Five Wildlife Safari Game Drives',
      subtitle: 'Maasai Mara, Amboseli, Tsavo & Samburu in Custom 4x4 Land Cruisers',
      description: 'Embark on world-class game viewing drives across the most celebrated savannahs on Earth. Led by certified gold-level and silver-level bilingual naturalists, you will track lions, leopards, rhinos, cheetahs, and majestic elephant herds with uninterrupted 360-degree views from pop-up roof safari vehicles.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Half-Day (4 hrs) / Full-Day (8 hrs) with Bush Picnic',
      image: heroSafari,
      features: [
        'Custom 4x4 Safari Land Cruiser with pop-up roof & individual window seating',
        'High-magnification binoculars, beanbags for photography & field reference guides',
        'Licensed naturalist driver-guide with extensive tracking expertise',
        'Chilled bottled mineral water, tea/coffee flask & gourmet bush breakfast picnic',
      ],
      subOptions: [
        { title: 'Early Morning Dawn Drives', desc: 'Depart at 06:00 to catch apex predators hunting and stunning sunrise light.' },
        { title: 'Full-Day Savannah Transits', desc: 'Packed picnic lunch beneath iconic acacia trees beside the Mara or Talek rivers.' },
        { title: 'Night Game Drives (Conservancies)', desc: 'Explore nocturnal wildlife, bush babies, aardvarks, and big cats with spotlights.' },
      ],
      inclusions: [
        'Exclusive vehicle hire with unlimited mileage within park boundaries',
        'National park / game reserve entry permits and conservation fees',
        'Comprehensive passenger liability insurance cover',
      ],
    },
    {
      id: 'hot-air-balloon-safari',
      dropCap: 'B',
      badge: 'Unforgettable Experience',
      title: 'Sunrise Hot Air Balloon Safaris & Champagne Bush Breakfast',
      subtitle: 'Gliding Silently Over the Maasai Mara Savannah at Dawn',
      description: 'The ultimate East African bucket-list adventure. Lift off gently as dawn breaks over the vast plains of the Maasai Mara, floating silently over meandering rivers, herds of wildebeest, and grazing giraffes. Touch down in the wild to a lavish open-air champagne breakfast cooked live on the savannah.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: '4.5 Hours Total (approx 1 Hour Flight + Champagne Feast)',
      image: heroSafari,
      features: [
        'Pre-dawn pickup from your lodge or camp and transfer to the launch site',
        'Comprehensive pilot safety briefing before gentle sunrise inflation and lift-off',
        'Approximately 60 minutes of panoramic aerial flight above the tree canopies',
        'Full champagne breakfast complete with eggs to order, sausages, fresh fruit & pastries',
        'Official flight certificate signed by your veteran FAA-licensed hot air balloon pilot',
      ],
      subOptions: [
        { title: 'Standard Balloon Flight', desc: 'Shared passenger basket (12-16 guests) with personal viewing space.' },
        { title: 'Private Couple / VIP Basket', desc: 'Exclusive flight for couples, proposals, and honeymooners with private butler.' },
        { title: 'Great Migration Flight (July - Oct)', desc: 'Unmatched bird-eye perspective of massive wildebeest herds crossing the Mara River.' },
      ],
      inclusions: [
        'Roundtrip 4x4 transfers between your camp/lodge and the launch site',
        'Champagne and sparkling juices with full hot breakfast in the wilderness',
        'Commemorative personalized flight certificate',
      ],
    },
    {
      id: 'coral-reef-snorkeling-dhow',
      dropCap: 'S',
      badge: 'Marine Boat Tour',
      title: 'Coral Reef Snorkeling & Wasini Island Dhow Tours',
      subtitle: 'Kisite-Mpunguti Marine Park, Wild Dolphins & Swahili Seafood Feasts',
      description: 'Sail the azure waters of the Kenyan coast aboard a traditional wooden Arabian dhow. Cruise into Kisite-Mpunguti Marine National Park, East Africas premier coral reef sanctuary, where you will snorkel alongside sea turtles, manta rays, and playful wild bottlenose dolphins, followed by a fresh Swahili crab and seafood feast on Wasini Island.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Full Day (07:30 AM to 05:00 PM)',
      image: destDiani,
      features: [
        'Scenic motorized Arabian dhow sailing through the Wasini Channel',
        'Guaranteed dolphin spotting opportunities in their natural protected habitat',
        'Top-grade sanitized snorkeling masks, fins, snorkels, and safety life jackets',
        'Professional marine guides and swimming escorts in the water at all times',
        'Lavish 3-course Swahili lunch featuring fresh crab, fish, coconut rice, and chapati',
      ],
      subOptions: [
        { title: 'Kisite-Mpunguti Marine Snorkel', desc: 'Two distinct guided snorkeling stops at the outer coral reef garden.' },
        { title: 'Scuba Diving Tour', desc: 'Certified PADI 2-tank dives for qualified divers exploring reef walls.' },
        { title: 'Shimoni Slave Caves Historical Walk', desc: 'Guided cultural tour through the ancient 18th-century limestone coral caves.' },
      ],
      inclusions: [
        'Roundtrip air-conditioned hotel pickup from Diani Beach or Mombasa resorts',
        'Kenya Wildlife Service (KWS) Kisite-Mpunguti Marine Park admission fees',
        'All snorkeling gear, drinking water, soda, and seasonal tropical fruit on board',
        'Full Wasini Island restaurant seafood lunch (vegetarian/halal options available)',
      ],
    },
    {
      id: 'mount-kenya-aberdare-hiking',
      dropCap: 'T',
      badge: 'Highland Nature Trek',
      title: 'Mount Kenya & Aberdare Highland Forest Nature Treks',
      subtitle: 'Karuru Waterfalls, Chania Falls, Alpine Moorlands & Bamboo Forests',
      description: 'Escape the heat of the plains and explore Kenyas breathtaking alpine highlands. Hike through misty bamboo forests and high-altitude moorlands in Aberdare National Park, gazing down into dramatic plunging ravines at Karuru Falls (the tallest waterfall in Kenya) and breathing in crisp alpine mountain air.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Full-Day Nature Hike (6-8 Hours) or 3-Day Alpine Circuit',
      image: sceneMountain,
      features: [
        'Armed Kenya Wildlife Service (KWS) ranger escort and local naturalist guide',
        'Scenic viewpoints overlooking Karuru Falls, Gura Falls, and Chania Falls',
        'Unique highland flora: giant lobelias, tussock grass, and groundsel gardens',
        'Wildlife sightings of rare mountain bongo, black colobus monkeys, and birds of prey',
      ],
      subOptions: [
        { title: 'Karuru Falls Observation Trek', desc: 'Leisurely 3-hour trek along the scenic Queen Cave and Karuru viewpoint.' },
        { title: 'Old Moses Mount Kenya Acclimatization', desc: 'Day hike to 3,300m above sea level with views of Batian and Nelion peaks.' },
        { title: 'Bamboo Forest Canopy Walk', desc: 'Gentle nature walk through indigenous cedar and bamboo cloud forests.' },
      ],
      inclusions: [
        'Roundtrip 4x4 vehicle transport from Nairobi or Nanyuki lodges',
        'National park entry permits and mandatory armed ranger fee',
        'Packed highland trail lunch, energy snacks, and bottled water',
      ],
    },
    {
      id: 'nairobi-conservation-day-tours',
      dropCap: 'N',
      badge: 'City Wildlife Day Tour',
      title: 'Nairobi Conservation Day Tours: Giraffes, Elephants & Park Safari',
      subtitle: 'Hand-Feeding Endangered Giraffes, Sheldrick Orphanage & Nairobi National Park',
      description: 'Experience the unique wildlife capital of the world in a single action-packed day. Hand-feed endangered Rothschild giraffes at the Giraffe Centre, witness orphaned baby elephants drinking milk and playing in mud baths at the Daphne Sheldrick Wildlife Trust, and track lions and rhinos against the city skyline in Nairobi National Park.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Full Day (06:00 AM to 04:30 PM)',
      features: [
        'Early morning wildlife game drive in Nairobi National Park in 4x4 safari cruiser',
        'Guaranteed close-up viewings of endangered black and white rhinos',
        'Visit to the Sheldrick Wildlife Trust 11:00 AM public elephant foster session',
        'Interactive feeding and photography from raised timber platforms at Giraffe Centre',
        'Authentic Kenyan lunch stop at Carnivore Restaurant or cultural garden café',
      ],
      subOptions: [
        { title: 'Full Nairobi Conservation Trio', desc: 'National Park + Elephant Orphanage + Giraffe Centre all in one seamless day.' },
        { title: 'Karen Blixen & Cultural Heritage Tour', desc: 'Combine Giraffes with Karen Blixen Museum and Bomas of Kenya tribal dance shows.' },
        { title: 'Nairobi National Park Half-Day Drive', desc: 'Early morning 4-hour safari drive starting and ending at your Nairobi hotel.' },
      ],
      inclusions: [
        'All ground transport in comfortable pop-up roof safari vehicle with private driver',
        'Pick-up and drop-off from any hotel or airport in Nairobi',
        'Giraffe Centre and Sheldrick Wildlife Trust entrance bookings',
        'Complimentary chilled bottled drinking water on board',
      ],
    },
    {
      id: 'cultural-maasai-swahili-encounters',
      dropCap: 'C',
      badge: 'Heritage & Community',
      title: 'Authentic Maasai Village & Swahili Cultural Encounters',
      subtitle: 'Living Traditions, Ancient Dances, Beadwork & Historic Coastal Towns',
      description: 'Engage respectfully with the vibrant communities that have shaped Kenyas heritage for centuries. Visit an authentic Maasai Manyatta village to witness traditional jump dances (Adumu), learn fire-making techniques, and understand community conservation, or stroll through centuries of maritime history in Mombasa Old Town, Fort Jesus, and Lamu Island.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: '2 to 3 Hours Cultural Immersion',
      features: [
        'Warm welcoming song and traditional Adumu jumping dance by Maasai warriors',
        'Guided tour through traditional mud-thatched homesteads and bomas',
        'Hands-on demonstration of primitive fire-starting without matches',
        'Visit to the community beadwork market supporting local women artisans',
      ],
      subOptions: [
        { title: 'Maasai Mara Community Manyatta', desc: 'Direct engagement with pastoralist families adjacent to the reserve.' },
        { title: 'Mombasa Old Town & Spice Walk', desc: 'Explore carved wooden Swahili doors, curio markets, and Fort Jesus.' },
        { title: 'Gede Ruins Ancient City Tour', desc: 'Mysterious 13th-century Swahili ruined city hidden within lush coastal jungle.' },
      ],
      inclusions: [
        'Direct village entry fees going toward village education and water projects',
        'Bilingual community elder guide translation and cultural commentary',
        'Photography permissions within the village compound',
      ],
    },
    {
      id: 'glass-bottom-boat-marine',
      dropCap: 'M',
      badge: 'Coastal Marine Tour',
      title: 'Glass-Bottom Boat Marine Exploration & Sand Island Cruises',
      subtitle: 'Diani Beach Lagoon, Coral Gardens, Sea Turtles & Sandbanks',
      description: 'A gentle, family-friendly ocean adventure perfect for all ages. Board custom-built glass-bottom boats right off the shores of Diani Beach or Watamu. Peer directly into vibrant underwater coral gardens teeming with zebra fish, starfish, and sea turtles without getting wet, or step off onto Robinson Crusoe sandbanks exposed only at low tide.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: '2 to 3 Hours Relaxing Boat Tour',
      image: destDiani,
      features: [
        'Crystal-clear viewing glass panel in the vessel floor for easy fish observation',
        'Friendly local captain and marine guide explaining coral reef ecology',
        'Opportunity to swim and snorkel in calm, shallow turquoise lagoon water',
        'Low-tide stop at Robinson Island sandbar for refreshing coconut water and beach walks',
      ],
      subOptions: [
        { title: 'Diani Lagoon Glass-Bottom Tour', desc: 'Quick 2-hour coral reef boat trip from your beachfront hotel.' },
        { title: 'Watamu Marine National Park Cruise', desc: 'Explore protected coral gardens and view green sea turtles feeding.' },
        { title: 'Sand Island Sunset Cruise', desc: 'Late afternoon sunset boat trip with golden hour views over the Indian Ocean horizon.' },
      ],
      inclusions: [
        'Boat transport, life jackets for adults and children, and boat captain',
        'Snorkeling mask and tube provided for guests wishing to swim',
        'Fresh whole madafu (coconut water) refreshment',
      ],
    },
    {
      id: 'desert-safari-dune-bashing',
      dropCap: 'D',
      badge: 'Dubai Desert Safari Tour',
      title: 'Dubai Desert 4x4 Dune Bashing, Sandboarding & Bedouin Camp',
      subtitle: 'Red Dunes Adrenaline, Sunset Camel Rides & Arabian BBQ Under Stars',
      description: 'Experience the thrilling desert landscapes of Dubai and Abu Dhabi. Ride through towering red dunes in high-powered 4x4 Land Cruisers driven by master desert drivers, try your balance sandboarding down golden ridges, take a sunset camel trek, and enjoy an evening of Tanoura dancing, fire shows, and five-star Arabian BBQ dining.',
      pricingOrTerms: 'Call or Submit a Quotation Request for Full Pricing',
      durationOrTimeline: 'Evening Safari (03:00 PM to 09:30 PM)',
      image: destDubai,
      features: [
        'Roundtrip hotel pickup and drop-off in air-conditioned 4x4 Land Cruiser',
        '45 minutes of adrenaline-charged dune bashing across Lahbab Red Dunes',
        'Sunset photography stop atop the highest dune ridge in the desert',
        'Sandboarding down pristine desert slopes with safety instruction',
        'Traditional Bedouin desert camp with shisha lounge, henna painting, and falconry',
        'Live entertainment: Tanoura whirling dance, fire acrobats, and belly dancing',
      ],
      subOptions: [
        { title: 'Standard Evening Desert Safari', desc: 'Complete 6-hour experience with shared 4x4 and camp buffet.' },
        { title: 'VIP Desert Safari with Table Service', desc: 'Private reserved seating, premium grilled meats, and table-side service.' },
        { title: 'Morning Quad Bike & Buggy Adventure', desc: 'Self-drive high-powered 450cc quad bikes and Can-Am buggies over open dunes.' },
      ],
      inclusions: [
        'Hotel pickup and return in Dubai or Sharjah',
        'Full 5-star international buffet dinner with live grill stations',
        'Unlimited soft drinks, Arabic coffee (Gahwa), fresh dates, and mineral water',
      ],
    },
  ];

  // Combined or filtered items based on user selection
  const displayedItems: DropCapOption[] = 
    activeFilter === 'services'
      ? travelServices
      : activeFilter === 'tours'
      ? tourActivities
      : [...travelServices, ...tourActivities];

  const handleFilterChange = (filter: 'all' | 'services' | 'tours') => {
    setActiveFilter(filter);
    if (filter === 'tours') {
      setSearchParams({ tab: 'tours' });
    } else {
      setSearchParams({});
    }
  };

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
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>Services</span>
          </div>
        </div>

        {/* Sub-Page Header - Clean & Minimal Interface */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Travel Services, BnBs & Day Tours</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Services
          </h1>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our travel management solutions, verified BnB and holiday home stays, and guided safari day tours below. For all services, make a call or submit a quotation request to receive full and accurate pricing.
          </p>

          {/* Clean Sub-Category Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-full overflow-x-auto">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Services & Day Tours
            </button>
            <button
              onClick={() => handleFilterChange('services')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'services'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Travel Management & BnB Stays</span>
            </button>
            <button
              onClick={() => handleFilterChange('tours')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'tours'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Safari & Day Tours</span>
            </button>
          </div>
        </div>

        {/* Drop-Cap Interactive Accordion Layout */}
        <DropCapAccordionList
          items={displayedItems}
          onOpenBooking={onOpenBooking}
          categoryLabel={
            activeFilter === 'tours'
              ? 'Tour'
              : activeFilter === 'services'
              ? 'Service'
              : undefined
          }
        />

        {/* Bottom Direct Assistance Strip */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 to-amber-950 p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Need Immediate Pricing or Custom BnB Stays?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our Nairobi travel planners or submit a quotation request for full pricing and immediate room confirmations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking('General Services & BnB Inquiry')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs shadow transition-all cursor-pointer"
            >
              Submit Quotation Request
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
