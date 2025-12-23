import { Link } from 'react-router-dom';
import { Heart, Sparkles, Leaf, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product in our collection is carefully selected with your beauty needs in mind.',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients and formulations for lasting results.',
    },
    {
      icon: Leaf,
      title: 'Clean Beauty',
      description: 'Our products are free from harmful chemicals and are cruelty-free.',
    },
    {
      icon: Award,
      title: 'Trusted Results',
      description: 'Join thousands of satisfied customers who trust RIWA Beauty.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-primary">RIWA Beauty</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We believe everyone deserves to feel beautiful. That's why we've curated a collection of premium beauty products that enhance your natural radiance.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                RIWA Beauty was born from a passion for making premium beauty accessible to everyone. Based in Lebanon, we understand the unique beauty needs of our community and strive to bring the best products to your doorstep.
              </p>
              <p className="text-muted-foreground mb-6">
                Our name "RIWA" represents elegance, beauty, and the art of self-care. We carefully curate each product in our collection, ensuring it meets our high standards for quality, effectiveness, and safety.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/shop">
                  Explore Our Collection <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=500&fit=crop"
                alt="Beauty products"
                className="w-full rounded-3xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What makes RIWA Beauty special
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Explore our collection and find the perfect products for your skincare and beauty routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
