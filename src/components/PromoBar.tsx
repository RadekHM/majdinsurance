import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const PromoBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-medium">
        <Sparkles className="h-5 w-5 text-gold" />
        <p className="text-center">
          {t(
            'خصم حتى 20٪ على تأمين تسلا والسيارات الصينية – لفترة محدودة فقط.',
            'Up to 20% off Tesla & Chinese car insurance – Limited time only.'
          )}
        </p>
        <Sparkles className="h-5 w-5 text-gold" />
      </div>
    </div>
  );
};

export default PromoBar;
