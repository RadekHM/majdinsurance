import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/971XXXXXXXXX', '_blank');
  };

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className="fixed bottom-6 end-6 z-50 rounded-full w-16 h-16 p-0 shadow-2xl hover:scale-110 transition-transform"
      onClick={handleWhatsApp}
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
