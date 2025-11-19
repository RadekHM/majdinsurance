import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: {
        ar: 'هل أستطيع الحصول على عرض بدون زيارة مكتب؟',
        en: 'Can I get a quote without visiting an office?',
      },
      answer: {
        ar: 'نعم، كل العملية تتم أونلاين وعبر الواتساب أو الهاتف.',
        en: 'Yes, the entire process can be done online via WhatsApp or phone.',
      },
    },
    {
      question: {
        ar: 'هل التأمين يشمل البطارية في السيارات الكهربائية؟',
        en: 'Is the battery covered for EVs?',
      },
      answer: {
        ar: 'هذا يعتمد على الباقة المختارة. نوضح لك تفاصيل التغطية قبل الموافقة.',
        en: 'It depends on the chosen plan. We explain all coverage details before you agree.',
      },
    },
    {
      question: {
        ar: 'هل أستطيع الدفع بالتقسيط؟',
        en: 'Can I pay in instalments?',
      },
      answer: {
        ar: 'نعم، بعض شركات التأمين توفر خيارات دفع عبر البنوك. نوضح لك كل الخيارات المتاحة.',
        en: 'Yes, some insurance companies offer bank instalment plans. We show you all available options.',
      },
    },
    {
      question: {
        ar: 'كم يستغرق الحصول على عرض؟',
        en: 'How long does it take to get a quote?',
      },
      answer: {
        ar: 'غالبًا ما نرسل لك عرضًا مبدئيًا خلال وقت قصير بعد استلام بيانات سيارتك.',
        en: 'In most cases, we send an initial quote shortly after receiving your car details.',
      },
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('الأسئلة الشائعة', 'Frequently Asked Questions')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا',
              'Answers to the most common questions about our services'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-start text-lg font-semibold text-foreground hover:text-primary">
                  {t(faq.question.ar, faq.question.en)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t(faq.answer.ar, faq.answer.en)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
