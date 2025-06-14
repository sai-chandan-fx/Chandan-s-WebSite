import * as React from 'react';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import MobileMenu from './MobileMenu';
import { ThemeToggle } from '../ThemeToggle';

const menuItems = {
  VFX: {
    'Popular Categories': ['Explosions', 'Fire', 'Smoke', 'Muzzle Flashes', 'Blood'],
    'Visual Effects': ['Magic', 'Energy', 'Sparks', 'Impacts', 'Shockwaves'],
    'Footage': ['Overlays', 'Transitions', 'Backgrounds', 'Textures', 'Lens Flares'],
  },
  'Motion Graphics': {
    'Elements': ['HUD', 'Infographics', 'Icons', 'Abstract', 'Shapes'],
    'Templates': ['Logo Stings', 'Intros', 'Lower Thirds', 'Product Promos', 'Video Walls'],
  },
  '3D': {
    'Models': ['Props', 'Vehicles', 'Characters', 'Environments', 'Architecture'],
    'Materials': ['Metals', 'Fabrics', 'Woods', 'Plastics', 'Concrete'],
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center space-x-8">
            <a href="/">
              <img src="/lovable-uploads/e0e406b0-0578-4c00-be4e-e6fbbcaa3901.png" alt="Chandan VFX Logo" className="h-[100px] w-[200px] invert dark:invert-0" />
            </a>
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {Object.keys(menuItems).map((item) => (
                    <NavigationMenuItem key={item}>
                      <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-popover border-border">
                        <div className="grid gap-x-8 gap-y-4 p-6 md:w-[600px] lg:w-[800px] grid-cols-3">
                          {Object.entries(menuItems[item as keyof typeof menuItems]).map(([category, links]) => (
                            <div key={category}>
                              <h3 className="font-bold text-brand-blue mb-2">{category}</h3>
                              <ul className="space-y-1">
                                {links.map((link) => (
                                  <li key={link}>
                                    <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">{link}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem>
                    <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Sounds
                    </a>
                  </NavigationMenuItem>
                   <NavigationMenuItem>
                    <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Plugins
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
