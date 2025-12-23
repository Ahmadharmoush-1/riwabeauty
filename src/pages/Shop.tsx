import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products, categories, getProductsByCategory } from '@/data/products';
import { cn } from "@/lib/utils";


const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  
  const filteredProducts = category
    ? getProductsByCategory(category)
    : products;

  const currentCategory = category
    ? categories.find(c => c.id === category)
    : null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className={cn(!category && "text-foreground")}>Shop</Link>
          {currentCategory && (
            <>
              <span className="mx-2">/</span>
              <span className="text-foreground">{currentCategory.name}</span>
            </>
          )}
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            {currentCategory ? currentCategory.name : 'All Products'}
          </h1>
          <p className="text-muted-foreground">
            {currentCategory ? currentCategory.description : 'Explore our complete collection'}
          </p>
        </div>

        {/* Category Pills (when no category selected) */}
        {!category && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Link
                to="/shop"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  !category
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-muted-foreground hover:bg-primary/20"
                )}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/shop/${cat.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-muted-foreground hover:bg-primary/20 transition-all"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Cards (when no category selected) */}
        {!category && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {categories.map((cat, index) => (
              <div
                key={cat.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard {...cat} />
              </div>
            ))}
          </div>
        )}

        {/* Category Navigation (when category selected) */}
        {category && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              to="/shop"
              className="px-4 py-2 rounded-full text-sm font-medium bg-accent text-muted-foreground hover:bg-primary/20 transition-all"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop/${cat.id}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  category === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-muted-foreground hover:bg-primary/20"
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
