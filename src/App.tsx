import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './data/travelData';

// Code-split pages for near-instant initial render and zero browser hang
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BookingModal = lazy(() => import('./components/BookingModal').then(m => ({ default: m.BookingModal })));

function PageSkeleton() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center" aria-label="Loading page">
      <div className="w-10 h-10 border-3 border-amber-600/30 border-t-amber-600 rounded-full animate-spin mb-4" />
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Loading Pushworld Travel...</span>
    </div>
  );
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingPkg, setSelectedBookingPkg] = useState<PackageItem | null>(null);

  const handleOpenBooking = (customTitle?: string) => {
    if (customTitle) {
      setSelectedBookingPkg({
        id: 'custom',
        title: customTitle,
        category: 'safari',
        destination: 'Custom Selection',
        duration: 'Flexible',
        validity: '2026',
        image: '',
        overview: 'Customized itinerary tailored to your travel specifications.',
        highlights: ['Personalized consultation', 'Flexible scheduling', 'Dedicated travel manager'],
        summaryInclusion: 'Tailored package inclusions',
        inclusions: [
          'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
          'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
          'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
          'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
        ],
        exclusions: ['Personal expenses and optional extras'],
        callToAction: 'Request a Custom Quote',
      });
    } else {
      setSelectedBookingPkg(null);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingPkg(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
        
        {/* Main Website Navigation Menu displaying top-level headings */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Multi-Page Routes with Non-Blocking Lazy Loading */}
        <div className="flex-grow">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              {/* 1. Home Page: Landing Hub only, no detailed lists */}
              <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />

              {/* 2. About Us Page: Dedicated standalone page with brand story & values */}
              <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />

              {/* 3. Services Page: Dedicated standalone page with Drop-Cap Accordion */}
              <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />

              {/* 4. Products Page: Dedicated standalone page with Drop-Cap Accordion */}
              <Route path="/products" element={<ProductsPage onOpenBooking={handleOpenBooking} />} />

              {/* Aliases redirecting to respective parent categories */}
              <Route path="/packages" element={<Navigate to="/products" replace />} />
              <Route path="/tours" element={<Navigate to="/services?tab=tours" replace />} />
              <Route path="/excursions" element={<Navigate to="/services?tab=tours" replace />} />
              <Route path="/activities" element={<Navigate to="/services?tab=tours" replace />} />

              {/* 5. Contacts Page: Dedicated standalone page with office contact and reviews */}
              <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
              <Route path="/contacts" element={<ContactPage onOpenBooking={handleOpenBooking} />} />

              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Quotation & Consultation Modal (Dynamically loaded on-demand) */}
        {isBookingOpen && (
          <Suspense fallback={null}>
            <BookingModal
              isOpen={isBookingOpen}
              onClose={handleCloseBooking}
              selectedPackage={selectedBookingPkg}
            />
          </Suspense>
        )}

        {/* Floating WhatsApp Quick Connect Button */}
        <FloatingWhatsApp />

      </div>
    </BrowserRouter>
  );
}
