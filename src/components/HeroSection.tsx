import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-dubai-cars.jpg';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971XXXXXXXXX', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to ${isRTL ? 'left' : 'right'}, rgba(30, 64, 175, 0.95), rgba(30, 64, 175, 0.85)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-gold/20 border-2 border-gold rounded-full">
            <p className="text-gold font-semibold text-sm md:text-base">
              {t('🎉 عروض خاصة على التأمين الكهربائي', '🎉 Special EV Insurance Offers')}
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t(
              'تأمين سيارتك في دبي… أسرع، أوضح، وبأفضل سعر',
              'Fast & Clear Car Insurance in Dubai'
            )}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t(
              'مجد للتأمين يساعدك في الحصول على أفضل عروض التأمين لسيارتك في دبي، مع خصومات خاصة لسيارات تسلا والسيارات الصينية. خلال دقائق تحصل على عرض واضح بدون تعقيدات.',
              'Majd Insurance helps you find the best car insurance offers in Dubai, with special discounts for Tesla and Chinese cars. Get a clear quote in minutes with no hidden surprises.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gold"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('احصل على عرض الآن', 'Get a Quote')}
              {isRTL ? <ArrowRight className="h-5 w-5 rotate-180" /> : <ArrowRight className="h-5 w-5" />}
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              {t('تواصل عبر الواتساب', 'Message on WhatsApp')}
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">20%</p>
              <p className="text-white/80 text-sm">{t('خصم على السيارات الكهربائية', 'Off EV Insurance')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</p>
              <p className="text-white/80 text-sm">{t('دعم عبر الواتساب', 'WhatsApp Support')}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">5 {t('دقائق', 'min')}</p>
              <p className="text-white/80 text-sm">{t('احصل على عرضك', 'Get Your Quote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
