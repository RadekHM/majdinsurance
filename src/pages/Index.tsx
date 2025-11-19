import { LanguageProvider } from '@/contexts/LanguageContext';
import PromoBar from '@/components/PromoBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SpecialOffersSection from '@/components/SpecialOffersSection';
import WhyMajdSection from '@/components/WhyMajdSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PromoBar />
        <Header />
        <main>
          <HeroSection />
          <SpecialOffersSection />
          <WhyMajdSection />
          <HowItWorksSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
