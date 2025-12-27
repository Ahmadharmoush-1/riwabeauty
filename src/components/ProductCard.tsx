import { Link } from 'react-router-dom';
import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/context/CartContext';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const isInCart = items.some(item => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="card-product group block"
    >
      <div className="aspect-square overflow-hidden bg-accent/50 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Button
          onClick={handleAddToCart}
          size="icon"
          className={cn(
            "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-card",
            isAdding && "scale-110",
            isInCart ? "bg-primary" : "bg-background hover:bg-primary"
          )}
        >
          {isInCart ? (
            <Check className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-primary font-semibold mt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;