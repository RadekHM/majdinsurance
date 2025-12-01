import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971503814993', '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className="fixed bottom-4 md:bottom-6 end-4 md:end-6 z-50 rounded-full w-14 h-14 md:w-16 md:h-16 p-0 shadow-2xl hover:scale-110 transition-transform active:scale-95"
      onClick={handleWhatsApp}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </Button>
  );
};

export default WhatsAppButton;
