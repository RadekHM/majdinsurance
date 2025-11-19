import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, MessageCircle, MapPin, Languages } from 'lucide-react';

const WhyMajdSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      title: { ar: 'أسعار شفافة', en: 'Transparent Pricing' },
      description: {
        ar: 'لا رسوم خفية. احصل على أفضل الأسعار مع تغطية شاملة.',
        en: 'No hidden fees. Get the best rates with comprehensive coverage.',
      },
    },
    {
      icon: MessageCircle,
      title: { ar: 'خدمة واتساب سريعة', en: 'Fast WhatsApp Service' },
      description: {
        ar: 'تواصل معنا مباشرة عبر الواتساب واحصل على رد فوري.',
        en: 'Connect with us directly on WhatsApp and get instant responses.',
      },
    },
    {
      icon: MapPin,
      title: { ar: 'خبرة دبي', en: 'Dubai Expertise' },
      description: {
        ar: 'نفهم سوق دبي ونقدم حلول تأمين محلية مخصصة.',
        en: 'We understand Dubai market and offer tailored local insurance solutions.',
      },
    },
    {
      icon: Languages,
      title: { ar: 'دعم ثنائي اللغة', en: 'Bilingual Support' },
      description: {
        ar: 'فريقنا يتحدث العربية والإنجليزية بطلاقة.',
        en: 'Our team speaks both Arabic and English fluently.',
      },
    },
  ];

  return (
    <section id="why" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('لماذا تختار مجد؟', 'Why Choose Majd?')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'نحن نجعل التأمين على السيارات بسيطًا وسريعًا وموثوقًا',
              'We make car insurance simple, fast, and reliable'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(benefit.title.ar, benefit.title.en)}
                </h3>
                <p className="text-muted-foreground">
                  {t(benefit.description.ar, benefit.description.en)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMajdSection;
