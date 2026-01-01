import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, ShoppingBag, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Grid3X3, label: 'Shop', path: '/shop' },
    { icon: ShoppingBag, label: 'Cart', path: '/cart', badge: totalItems },
    { icon: User, label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/shop') {
      return location.pathname.startsWith('/shop');
    }
    return location.pathname === path;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border safe-area-inset-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors relative',
              isActive(item.path)
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-[10px] font-medium flex items-center justify-center text-primary-foreground">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;