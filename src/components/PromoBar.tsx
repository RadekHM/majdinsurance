import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const PromoBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-primary text-primary-foreground py-2 md:py-3 px-3 md:px-4">
      <div className="container mx-auto flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-base font-medium">
        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-gold shrink-0" />
        <p className="text-center leading-tight md:leading-normal">
          {t(
            'خصم حتى 20٪ على تأمين تسلا والسيارات الصينية – لفترة محدودة فقط.',
            'Up to 20% off Tesla & Chinese car insurance – Limited time only.'
          )}
        </p>
        <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-gold shrink-0" />
      </div>
    </div>
  );
};

export default PromoBar;
