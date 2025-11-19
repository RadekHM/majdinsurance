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
        ar: 'ما هي المستندات المطلوبة للحصول على عرض؟',
        en: 'What documents do I need for a quote?',
      },
      answer: {
        ar: 'تحتاج إلى: رخصة القيادة، بطاقة الهوية الإماراتية أو جواز السفر، ورخصة السيارة (المُلكية). يمكنك إرسالها عبر الواتساب بكل سهولة.',
        en: 'You need: driving license, Emirates ID or passport, and vehicle registration (Mulkiya). You can easily send them via WhatsApp.',
      },
    },
    {
      question: {
        ar: 'كم من الوقت يستغرق الحصول على عرض؟',
        en: 'How long does it take to get a quote?',
      },
      answer: {
        ar: 'عادةً ما نقدم عروض الأسعار خلال 5-10 دقائق من استلام المستندات. نعمل بسرعة لتوفير وقتك!',
        en: "We typically provide quotes within 5-10 minutes of receiving your documents. We work fast to save your time!",
      },
    },
    {
      question: {
        ar: 'هل يشمل التأمين السيارات الكهربائية والصينية؟',
        en: 'Does the insurance cover electric and Chinese cars?',
      },
      answer: {
        ar: 'نعم! لدينا خطط تأمين خاصة للسيارات الكهربائية مثل تسلا والسيارات الصينية مثل BYD وMG وجيلي مع خصومات حصرية تصل إلى 20٪.',
        en: 'Yes! We have special insurance plans for electric cars like Tesla and Chinese cars like BYD, MG, and Geely with exclusive discounts up to 20%.',
      },
    },
    {
      question: {
        ar: 'هل يمكنني تغيير خطة التأمين الخاصة بي لاحقًا؟',
        en: 'Can I change my insurance plan later?',
      },
      answer: {
        ar: 'نعم، يمكنك ترقية أو تغيير خطة التأمين الخاصة بك في أي وقت. تواصل معنا عبر الواتساب وسنساعدك في إجراء التغييرات.',
        en: "Yes, you can upgrade or change your insurance plan anytime. Contact us on WhatsApp and we'll help you make the changes.",
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
