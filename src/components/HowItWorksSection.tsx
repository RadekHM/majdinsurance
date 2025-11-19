import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, CheckCircle, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      step: '1',
      title: { ar: 'أرسل لنا معلومات سيارتك', en: 'Share your car details' },
      description: {
        ar: 'موديل السيارة، سنة الصنع، رقم اللوحة، ونوع الاستخدام.',
        en: 'Model, year, plate number, and usage type.',
      },
    },
    {
      icon: FileText,
      step: '2',
      title: { ar: 'نبحث لك عن أفضل العروض', en: 'We search the market for you' },
      description: {
        ar: 'نقارن بين شركات التأمين ونختار الأنسب لك.',
        en: 'We compare offers from insurance companies on your behalf.',
      },
    },
    {
      icon: CheckCircle,
      step: '3',
      title: { ar: 'نرسل لك العرض النهائي بوضوح', en: 'You receive a clear quote' },
      description: {
        ar: 'تغطيات، سعر، وطريقة الدفع – كل شيء مكتوب وواضح.',
        en: 'Coverage, price, and payment options – all explained.',
      },
    },
    {
      icon: Shield,
      step: '4',
      title: { ar: 'توافق؟ نُكمِل الإجراءات إلكترونيًا', en: 'Confirm & complete online' },
      description: {
        ar: 'بدون زيارات مكتبية أو أوراق معقّدة.',
        en: 'No office visits or complicated paperwork.',
      },
    },
  ];

  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('كيف تبدأ؟', 'How It Works')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'احصل على تأمين سيارتك في 4 خطوات بسيطة',
              'Get your car insurance in 4 simple steps'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 ltr:left-full rtl:right-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
              )}
              <Card className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -end-2 bg-gold text-gold-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t(step.title.ar, step.title.en)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(step.description.ar, step.description.en)}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
