import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-foreground">
                RIWA <span className="text-primary">Beauty</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Enhance your natural beauty with our premium collection of cosmetics and skincare products.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/961"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Shop</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shop/cosmetics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cosmetics
              </Link>
              <Link to="/shop/hair-care" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hair Care
              </Link>
              <Link to="/shop/body-care" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Body Care
              </Link>
              <Link to="/shop/others" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Others
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Beirut, Lebanon</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+961 XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@riwabeauty.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RIWA Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
