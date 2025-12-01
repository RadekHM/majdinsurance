import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Car, CheckCircle2 } from 'lucide-react';

const SpecialOffersSection = () => {
  const { t } = useLanguage();

  const offers = [
    {
      icon: Zap,
      title: { ar: 'باقات خاصة لملاك تسلا', en: 'Exclusive Tesla Packages' },
      discount: '20%',
      features: [
        { ar: 'تغطية شاملة مع خصم حتى 20٪', en: 'Up to 20% discount on comprehensive cover' },
        { ar: 'تغطية الأعطال المتعلقة بالنظام الكهربائي (حسب الشروط)', en: 'Coverage for electric system issues (terms apply)' },
        { ar: 'إجراءات سريعة في حالة الحوادث', en: 'Fast claim handling for accidents' },
      ],
      gradient: 'from-primary to-primary/80',
    },
    {
      icon: Car,
      title: { ar: 'مزايا إضافية لسيارات BYD وMG وGeely وغيرها', en: 'Extra Value for BYD, MG, Geely & more' },
      discount: '',
      subtitle: { ar: '', en: '' },
      features: [
        { ar: 'أسعار تنافسية مقارنة بالشركات الأخرى', en: 'Very competitive pricing' },
        { ar: 'خيارات متعددة للدفع (دفعة واحدة أو أقساط عبر البنك)', en: 'Flexible payment options (lump sum or bank instalments)' },
        { ar: 'إمكانية توسعة التغطية حسب احتياجك', en: 'Optional add-ons depending on your needs' },
      ],
      gradient: 'from-gold/90 to-gold',
    },
  ];

  return (
    <section id="offers" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            {t('عروض خاصة لسيارات تسلا والسيارات الصينية', 'Special Offers for Tesla & Chinese Cars')}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-6 px-2">
            {t(
              'إذا كنت تملك تسلا أو سيارة صينية كهربائية أو هجينة، فأنت في المكان الصحيح. نوفر لك باقات تأمين مصممة خصيصًا لهذه الفئة من السيارات، مع:',
              'Own a Tesla or a Chinese EV/hybrid? You\'re in the right place. We provide insurance packages specially tailored for these cars with:'
            )}
          </p>
          <ul className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-start list-disc list-inside space-y-1.5 md:space-y-2 px-4">
            <li>{t('خصومات على التأمين الشامل', 'Discounts on comprehensive insurance')}</li>
            <li>{t('تغطية للبطارية والمحرك الكهربائي (حسب الباقة)', 'Coverage for battery and EV components (depending on the plan)')}</li>
            <li>{t('مساعدة على الطريق 24/7 داخل الإمارات', '24/7 roadside assistance across the UAE')}</li>
            <li>{t('دعم كامل باللغة العربية والإنجليزية', 'Full support in Arabic and English')}</li>
          </ul>
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
                  {offer.discount && (
                    <div className="text-end">
                      <p className="text-4xl font-bold">{offer.discount}</p>
                      <p className="text-sm">{t('خصم', 'OFF')}</p>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(offer.title.ar, offer.title.en)}
                </h3>
                {offer.subtitle && offer.subtitle.ar && (
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
