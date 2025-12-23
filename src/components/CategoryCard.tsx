import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryCard = ({ id, name, description, image }: CategoryCardProps) => {
  return (
    <Link
      to={`/shop/${id}`}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] block shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-background mb-1">
          {name}
        </h3>
        <p className="text-background/80 text-sm hidden md:block mb-2">{description}</p>
        <div className="flex items-center gap-2 text-background text-sm font-medium group-hover:gap-3 transition-all">
          <span>Shop Now</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;