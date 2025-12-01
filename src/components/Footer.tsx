import { useLanguage } from '@/contexts/LanguageContext';
import majdLogo from '@/assets/majd-logo-transparent.png';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { ar: 'الرئيسية', en: 'Home', href: '#home' },
    { ar: 'عروض السيارات الكهربائية', en: 'EV Offers', href: '#offers' },
    { ar: 'لماذا مجد؟', en: 'Why Majd?', href: '#why' },
    { ar: 'كيف يعمل', en: 'How It Works', href: '#how' },
    { ar: 'الأسئلة الشائعة', en: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo & About */}
          <div>
            <img src={majdLogo} alt="Majd Insurance" className="h-24 md:h-32 w-auto mb-3 md:mb-4" />
            <p className="text-muted-foreground text-sm">
              {t(
                'وسيط تأمين في دبي – تأمين سيارات سريع وواضح مع عروض خاصة على تسلا والسيارات الصينية.',
                'Insurance intermediary in Dubai – Fast and clear car insurance with special offers on Tesla and Chinese cars.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {t(link.ar, link.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">
              {t('تواصل معنا', 'Contact Us')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/971503814993"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  dir="ltr"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>+971 50 381 4993</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@majdinsurance.ae"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  dir="ltr"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@majdinsurance.ae</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{t('دبي، الإمارات العربية المتحدة', 'Dubai, UAE')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t(
              '© 2024 مجد للتأمين. جميع الحقوق محفوظة.',
              '© 2024 Majd Insurance. All rights reserved.'
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {t(
              'مجد للتأمين – وسيط تأمين في دبي. قد تختلف التغطيات والأسعار حسب شركة التأمين المختارة وشروطها.',
              'Majd Insurance – insurance intermediary in Dubai. Coverage and pricing may vary depending on the selected insurance company and its terms.'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
