import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, MapPin, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const WHATSAPP_NUMBER = '9613349881'; // Lebanese country code - user should add their number

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const orderItems = items
      .map(item => `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const message = `Hello RIWA Beauty 🌸

*Customer Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Address: ${formData.address}

*Order Details:*
${orderItems}

*Total: $${totalPrice.toFixed(2)}*

Thank you! 💕`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to place your order.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and redirect
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order sent to WhatsApp!",
        description: "Please send the message to complete your order.",
      });
      navigate('/');
    }, 500);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">No items to checkout</h1>
          <Button asChild variant="outline">
            <Link to="/shop">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          to="/cart"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h2 className="font-heading text-xl font-semibold mb-6">Your Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <User className="h-4 w-4 text-primary" />
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+961 XX XXX XXX"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Delivery Address
                    </label>
                    <Textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your full delivery address"
                      className="input-field min-h-[100px] resize-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Order via WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      When you click "Place Order", you'll be redirected to WhatsApp with your order details pre-filled. Simply send the message to complete your order!
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Preparing Order...' : 'Place Order via WhatsApp'}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="font-heading text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-primary mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-primary text-sm">To be confirmed</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;