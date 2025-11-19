import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, CheckCircle, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      step: '1',
      title: { ar: 'تواصل معنا', en: 'Contact Us' },
      description: {
        ar: 'أرسل لنا رسالة عبر الواتساب أو املأ نموذج العرض.',
        en: 'Send us a WhatsApp message or fill out the quote form.',
      },
    },
    {
      icon: FileText,
      step: '2',
      title: { ar: 'شارك التفاصيل', en: 'Share Details' },
      description: {
        ar: 'قدم معلومات سيارتك وبياناتك الشخصية.',
        en: 'Provide your car information and personal details.',
      },
    },
    {
      icon: CheckCircle,
      step: '3',
      title: { ar: 'احصل على عرض', en: 'Get Quote' },
      description: {
        ar: 'احصل على عروض مخصصة من شركات التأمين الرائدة.',
        en: 'Receive personalized quotes from leading insurers.',
      },
    },
    {
      icon: Shield,
      step: '4',
      title: { ar: 'أنت محمي', en: 'You are Protected' },
      description: {
        ar: 'اختر أفضل عرض وسنقوم بتفعيل التأمين فورًا.',
        en: 'Choose the best offer and we will activate your insurance instantly.',
      },
    },
  ];

  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('كيف يعمل', 'How It Works')}
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
