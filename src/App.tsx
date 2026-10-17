import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { PackageItem } from './data/travelData';

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

        {/* Multi-Page Routes */}
        <div className="flex-grow">
          <Routes>
            {/* 1. Home Page: Landing Hub only, no detailed lists */}
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />

            {/* 2. Services Page: Dedicated standalone page with Drop-Cap Accordion */}
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />

            {/* 3. Activities Page: Dedicated standalone page with Drop-Cap Accordion */}
            <Route path="/activities" element={<ActivitiesPage onOpenBooking={handleOpenBooking} />} />

            {/* 4. Products Page: Dedicated standalone page with Drop-Cap Accordion */}
            <Route path="/products" element={<ProductsPage onOpenBooking={handleOpenBooking} />} />

            {/* 5. Contact Page: Dedicated standalone page with office contact and reviews */}
            <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Quotation & Consultation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          selectedPackage={selectedBookingPkg}
        />

        {/* Floating WhatsApp Quick Connect Button */}
        <FloatingWhatsApp />

      </div>
    </BrowserRouter>
  );
}
