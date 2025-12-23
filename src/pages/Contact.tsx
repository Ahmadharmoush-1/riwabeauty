import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/layout/Layout';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate WhatsApp message for contact
    const message = encodeURIComponent(
      `Hello RIWA Beauty! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`https://wa.me/961?text=${message}`, '_blank');
    
    toast({
      title: "Message prepared!",
      description: "Please send the message via WhatsApp.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Beirut, Lebanon',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+961 XX XXX XXX',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@riwabeauty.com',
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="input-field min-h-[150px] resize-none"
                    required
                  />
                </div>
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-accent/50 rounded-2xl"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-heading text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-10 p-6 bg-primary/10 rounded-2xl">
                <h3 className="font-heading text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For faster response, chat with us directly on WhatsApp!
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <a href="https://wa.me/961" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
