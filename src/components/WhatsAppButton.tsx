import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '96170123456'; // Replace with actual Lebanese number

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Hello RIWA Beauty 🌸\nI have a question about your products!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-elevated hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-2 rounded-lg shadow-card text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with us!
      </span>
    </button>
  );
};

export default WhatsAppButton;