import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  images: string[]; // ✅ now an array
  comingSoon?: boolean;
}

const CategoryCard = ({
  id,
  name,
  description,
  images,
  comingSoon = false,
}: CategoryCardProps) => {
  const [activeImage, setActiveImage] = useState(images[0] || '/photos/placeholder.png');

  // Optional: auto-rotate images every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage(prev => images[(images.indexOf(prev) + 1) % images.length]);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl aspect-[4/3] block shadow-card transition-all duration-300",
        comingSoon ? "cursor-not-allowed" : "hover:shadow-elevated"
      )}
    >
      <img
        src={activeImage}
        alt={name}
        loading="lazy"
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
          comingSoon ? "grayscale opacity-60" : "group-hover:scale-110"
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

      {comingSoon && (
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <Clock className="h-3 w-3" />
          Coming Soon
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-background mb-1">
          {name}
        </h3>
        <p className="text-background/80 text-sm hidden md:block mb-2">{description}</p>

        {!comingSoon && (
          <div className="flex items-center gap-2 text-background text-sm font-medium group-hover:gap-3 transition-all">
            <span>Shop Now</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (comingSoon) return content;

  return <Link to={`/shop/${id}`}>{content}</Link>;
};

export default CategoryCard;
