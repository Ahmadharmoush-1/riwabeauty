import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Truck, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { categories, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#FFB7CE] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/30 blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/40 blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Premium Beauty Collection
              </span>
            </div>

           <h1
  className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
  style={{ animationDelay: '0.1s' }}
>
  Soft Skin <span className="text-white">Strong Beauty</span>
</h1>


            <p
  className="text-lg text-white mb-8 animate-fade-in-up"
  style={{ animationDelay: '0.2s' }}
>
  Discover our curated collection of premium cosmetics, hair care, and body care products
  designed to bring out your inner glow.
</p>


            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button asChild variant="secondary" size="lg">
                <Link to="/shop">
                  Shop Now <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Premium Quality', desc: 'Carefully selected products' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Across Lebanon' },
              { icon: Heart, title: 'Customer Care', desc: 'Always here for you' },
              { icon: Shield, title: 'Secure Orders', desc: 'Via WhatsApp' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Baby pink background for icons */}
                <div className="h-12 w-12 rounded-full bg-[#FFB7CE] flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Shop by Category</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 gradient-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most loved items</p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <Link to="/shop">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/shop">
                View All Products <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#FFB7CE]">
  <div className="container mx-auto px-4 text-center">
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
      Ready to Glow?
    </h2>

    <p className="mb-8 max-w-lg mx-auto text-white/90">
      Order now and receive your favorite beauty products delivered straight to your door. Easy ordering via WhatsApp!
    </p>

    <Button
      asChild
      size="lg"
      className="bg-pink-600 text-white hover:bg-pink-700"
    >
      <Link to="/shop">
        Start Shopping <ArrowRight className="h-5 w-5 ml-2" />
      </Link>
    </Button>
  </div>
</section>

    </Layout>
  );
};

export default Index;
