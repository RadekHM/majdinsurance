import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';

const FinalCTASection = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971503814993', '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-2 bg-gold/20 border-2 border-gold rounded-full">
            <p className="text-gold font-semibold text-xs md:text-base">
              {t('⚡ استجابة فورية', '⚡ Instant Response')}
            </p>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
            {t('جاهز تبدأ؟', 'Ready to get started?')}
          </h2>

          <p className="text-base md:text-2xl mb-8 md:mb-10 text-white/90 px-2">
            {t(
              'أرسل لنا تفاصيل سيارتك الآن، ودع فريق مجد للتأمين يبحث لك عن أفضل خيار في السوق.',
              'Send us your car details today and let Majd Insurance find the best offer in the market for you.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button
              variant="whatsapp"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              {t('تواصل عبر الواتساب', 'Message on WhatsApp')}
            </Button>
            <Button
              variant="gold"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto"
              onClick={handleWhatsApp}
            >
              <FileText className="h-5 w-5" />
              {t('اطلب اتصال هاتفي', 'Request a call')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/20">
            <div>
              <p className="text-xl md:text-2xl font-bold text-gold mb-1 md:mb-2">
                {t('استجابة فورية', 'Instant Response')}
              </p>
              <p className="text-white/80 text-xs md:text-sm">
                {t('نرد خلال دقائق', 'We reply within minutes')}
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-gold mb-1 md:mb-2">
                {t('أفضل الأسعار', 'Best Rates')}
              </p>
              <p className="text-white/80 text-xs md:text-sm">
                {t('أسعار تنافسية مضمونة', 'Competitive prices guaranteed')}
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-gold mb-1 md:mb-2">
                {t('دعم كامل', 'Full Support')}
              </p>
              <p className="text-white/80 text-xs md:text-sm">
                {t('نحن معك في كل خطوة', "We're with you every step")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
