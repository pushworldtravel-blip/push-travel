import { Link } from 'react-router-dom';
import { DropCapAccordionList, DropCapOption } from '../components/DropCapAccordion';
import { COMPANY_INFO } from '../data/travelData';
import { heroSafari, destDiani, sceneMountain, destDubai } from '../assets/images';
import { Compass, ArrowLeft, Headphones, Sparkles, MessageSquare } from 'lucide-react';

interface ActivitiesPageProps {
  onOpenBooking: (title?: string) => void;
}

export function ActivitiesPage({ onOpenBooking }: ActivitiesPageProps) {
  const activityOptions: DropCapOption[] = [
    {
      id: 'big-five-game-drives',
      dropCap: 'G',
      badge: 'Iconic Safari',
      title: 'Big Five Wildlife Safari Game Drives',
      subtitle: 'Maasai Mara, Amboseli, Tsavo & Samburu in Custom 4x4 Land Cruisers',
      description: 'Embark on world-class game viewing drives across the most celebrated savannahs on Earth. Led by certified gold-level and silver-level bilingual naturalists, you will track lions, leopards, rhinos, cheetahs, and majestic elephant herds with uninterrupted 360-degree views from pop-up roof safari vehicles.',
      pricingOrTerms: 'Included in Safari Packages · Custom Day Rate Quoted',
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
      pricingOrTerms: 'USD $450 - $480 per Adult · Special Child Rates Available',
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
      badge: 'Marine Adventure',
      title: 'Coral Reef Snorkeling & Wasini Island Dhow Excursions',
      subtitle: 'Kisite-Mpunguti Marine Park, Wild Dolphins & Swahili Seafood Feasts',
      description: 'Sail the azure waters of the Kenyan coast aboard a traditional wooden Arabian dhow. Cruise into Kisite-Mpunguti Marine National Park, East Africas premier coral reef sanctuary, where you will snorkel alongside sea turtles, manta rays, and playful wild bottlenose dolphins, followed by a fresh Swahili crab and seafood feast on Wasini Island.',
      pricingOrTerms: 'From KES 7,500 (Residents) / USD $95 (Non-Residents)',
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
        { title: 'Scuba Diving Excursion', desc: 'Certified PADI 2-tank dives for qualified divers exploring reef walls.' },
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
      badge: 'Highland Wilderness',
      title: 'Mount Kenya & Aberdare Highland Forest Nature Treks',
      subtitle: 'Karuru Waterfalls, Chania Falls, Alpine Moorlands & Bamboo Forests',
      description: 'Escape the heat of the plains and explore Kenyas breathtaking alpine highlands. Hike through misty bamboo forests and high-altitude moorlands in Aberdare National Park, gazing down into dramatic plunging ravines at Karuru Falls (the tallest waterfall in Kenya) and breathing in crisp alpine mountain air.',
      pricingOrTerms: 'Custom Guided Trek Rates · Daily Departures',
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
      id: 'cultural-maasai-swahili-encounters',
      dropCap: 'C',
      badge: 'Heritage & Community',
      title: 'Authentic Maasai Village & Swahili Cultural Encounters',
      subtitle: 'Living Traditions, Ancient Dances, Beadwork & Historic Coastal Towns',
      description: 'Engage respectfully with the vibrant communities that have shaped Kenyas heritage for centuries. Visit an authentic Maasai Manyatta village to witness traditional jump dances (Adumu), learn fire-making techniques, and understand community conservation, or stroll through centuries of maritime history in Mombasa Old Town, Fort Jesus, and Lamu Island.',
      pricingOrTerms: 'KES 2,500 - 4,500 per person · Direct Community Contribution',
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
      id: 'desert-safari-dune-bashing',
      dropCap: 'D',
      badge: 'Dubai & UAE Escapes',
      title: 'Dubai Desert 4x4 Dune Bashing, Sandboarding & Bedouin Camp',
      subtitle: 'Red Dunes Adrenaline, Sunset Camel Rides & Arabian BBQ Under Stars',
      description: 'Experience the thrilling desert landscapes of Dubai and Abu Dhabi. Ride through towering red dunes in high-powered 4x4 Land Cruisers driven by master desert drivers, try your balance sandboarding down golden ridges, take a sunset camel trek, and enjoy an evening of Tanoura dancing, fire shows, and five-star Arabian BBQ dining.',
      pricingOrTerms: 'From USD $65 per person · Private Hummer / Land Cruiser Available',
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
    {
      id: 'glass-bottom-boat-marine',
      dropCap: 'M',
      badge: 'Family & Coastal',
      title: 'Glass-Bottom Boat Marine Exploration & Sand Island Cruises',
      subtitle: 'Diani Beach Lagoon, Coral Gardens, Sea Turtles & Sandbanks',
      description: 'A gentle, family-friendly ocean adventure perfect for all ages. Board custom-built glass-bottom boats right off the shores of Diani Beach or Watamu. Peer directly into vibrant underwater coral gardens teeming with zebra fish, starfish, and sea turtles without getting wet, or step off onto Robinson Crusoe sandbanks exposed only at low tide.',
      pricingOrTerms: 'From KES 2,000 per person · Group & Family Packages Available',
      durationOrTimeline: '2 to 3 Hours Relaxing Excursion',
      image: destDiani,
      features: [
        'Crystal-clear viewing glass panel in the vessel floor for easy fish observation',
        'Friendly local captain and marine guide explaining coral reef ecology',
        'Opportunity to swim and snorkel in calm, shallow turquoise lagoon water',
        'Low-tide stop at Robinson Island sandbar for refreshing coconut water and beach walks',
      ],
      subOptions: [
        { title: 'Diani Lagoon Glass-Bottom Tour', desc: 'Quick 2-hour coral reef excursion from your beachfront hotel.' },
        { title: 'Watamu Marine National Park Cruise', desc: 'Explore protected coral gardens and view green sea turtles feeding.' },
        { title: 'Sand Island Sunset Cruise', desc: 'Late afternoon excursion with golden hour views over the Indian Ocean horizon.' },
      ],
      inclusions: [
        'Boat transport, life jackets for adults and children, and boat captain',
        'Snorkeling mask and tube provided for guests wishing to swim',
        'Fresh whole madafu (coconut water) refreshment',
      ],
    },
    {
      id: 'nairobi-conservation-day-tours',
      dropCap: 'N',
      badge: 'City & Conservation',
      title: 'Nairobi Conservation Day Tours: Giraffes, Elephants & Park Safari',
      subtitle: 'Hand-Feeding Endangered Giraffes, Sheldrick Orphanage & Nairobi National Park',
      description: 'Experience the unique wildlife capital of the world in a single action-packed day. Hand-feed endangered Rothschild giraffes at the Giraffe Centre, witness orphaned baby elephants drinking milk and playing in mud baths at the Daphne Sheldrick Wildlife Trust, and track lions and rhinos against the city skyline in Nairobi National Park.',
      pricingOrTerms: 'From KES 6,500 (Residents) / USD $120 (Non-Residents)',
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Top-Level Category: Activities</span>
          </div>
        </div>

        {/* Sub-Page Header - Clean & Minimal Interface */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Curated Experiential Activities</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Activities & Excursions
          </h1>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Organized in our clean, single-open <strong>Drop-Cap Accordion</strong>. Click any activity option heading below to cleanly expand its details, duration, pricing, and booking options.
          </p>
        </div>

        {/* Drop-Cap Interactive Accordion Layout */}
        <DropCapAccordionList
          items={activityOptions}
          onOpenBooking={onOpenBooking}
          categoryLabel="Pushworld Travel Activities"
        />

        {/* Minimal Bottom Help Desk Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Want to book multiple activities or customize a private group?</div>
              <div className="text-xs text-slate-500 mt-0.5">Contact our Nairobi activity desk at <span className="font-semibold text-slate-800">{COMPANY_INFO.phone}</span></div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking('Custom Activities & Excursion Booking')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
            >
              Book Custom Activity
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I want to book activities for my upcoming trip.')}`}
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
