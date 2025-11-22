import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Languages, MessageCircle } from 'lucide-react';
import majdLogo from '@/assets/majd-logo-transparent.png';

const Header = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { ar: 'الرئيسية', en: 'Home', href: '#home' },
    { ar: 'عروض السيارات الكهربائية', en: 'EV Offers', href: '#offers' },
    { ar: 'لماذا مجد؟', en: 'Why Majd?', href: '#why' },
    { ar: 'كيف يعمل', en: 'How It Works', href: '#how' },
    { ar: 'الأسئلة الشائعة', en: 'FAQ', href: '#faq' },
    { ar: 'اتصل بنا', en: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img src={majdLogo} alt="Majd Insurance" className="h-14 w-auto" />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {t(item.ar, item.en)}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gold-outline"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              <MessageCircle className="h-4 w-4" />
              {t('واتساب', 'WhatsApp')}
            </Button>
            <Button
              variant="gold"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              {t('احصل على عرض الآن', 'Get a Quote')}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2"
            >
              <Languages className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
            >
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-start px-4 py-2"
                >
                  {t(item.ar, item.en)}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-border">
                <Button
                  variant="gold-outline"
                  onClick={() => scrollToSection('#contact')}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('واتساب', 'WhatsApp')}
                </Button>
                <Button
                  variant="gold"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('احصل على عرض الآن', 'Get a Quote')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
