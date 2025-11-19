import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Car, CheckCircle2 } from 'lucide-react';

const SpecialOffersSection = () => {
  const { t } = useLanguage();

  const offers = [
    {
      icon: Zap,
      title: { ar: 'تأمين تسلا', en: 'Tesla Insurance' },
      discount: '20%',
      features: [
        { ar: 'تغطية شاملة للبطارية', en: 'Comprehensive battery coverage' },
        { ar: 'صيانة مجانية لمدة سنة', en: 'Free maintenance for 1 year' },
        { ar: 'قطع غيار أصلية', en: 'Genuine parts replacement' },
        { ar: 'مساعدة على الطريق 24/7', en: '24/7 roadside assistance' },
      ],
      gradient: 'from-primary to-primary/80',
    },
    {
      icon: Car,
      title: { ar: 'السيارات الصينية', en: 'Chinese Cars' },
      discount: '15%',
      subtitle: { ar: 'BYD، MG، جيلي، والمزيد', en: 'BYD, MG, Geely & More' },
      features: [
        { ar: 'أسعار خاصة للسيارات الصينية', en: 'Special rates for Chinese brands' },
        { ar: 'تغطية شاملة', en: 'Comprehensive coverage' },
        { ar: 'معالجة سريعة للمطالبات', en: 'Fast claim processing' },
        { ar: 'خدمة باللغة العربية', en: 'Arabic language support' },
      ],
      gradient: 'from-gold/90 to-gold',
    },
  ];

  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('عروض خاصة', 'Special Offers')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'خصومات حصرية على تأمين السيارات الكهربائية والصينية',
              'Exclusive discounts on electric and Chinese car insurance'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${offer.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <offer.icon className="h-8 w-8" />
                  </div>
                  <div className="text-end">
                    <p className="text-4xl font-bold">{offer.discount}</p>
                    <p className="text-sm">{t('خصم', 'OFF')}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {t(offer.title.ar, offer.title.en)}
                </h3>
                {offer.subtitle && (
                  <p className="text-white/90 text-sm">
                    {t(offer.subtitle.ar, offer.subtitle.en)}
                  </p>
                )}
              </div>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        {t(feature.ar, feature.en)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('احصل على عرض', 'Get Quote')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
