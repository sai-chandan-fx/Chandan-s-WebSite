
import * as React from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import MobileMenu from './MobileMenu';

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
    <header className="bg-brand-gray/80 backdrop-blur-lg sticky top-0 z-50 border-b border-brand-light-gray">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <a href="/">
              <img src="/lovable-uploads/e0e406b0-0578-4c00-be4e-e6fbbcaa3901.png" alt="Chandan VFX Logo" className="h-10 invert" />
            </a>
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {Object.keys(menuItems).map((item) => (
                    <NavigationMenuItem key={item}>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-brand-light-gray/50 hover:text-white focus:bg-brand-light-gray/50 focus:text-white data-[active]:bg-brand-light-gray/50 data-[state=open]:bg-brand-light-gray/50">
                        {item}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-brand-gray border-brand-light-gray">
                        <div className="grid gap-x-8 gap-y-4 p-6 md:w-[600px] lg:w-[800px] grid-cols-3">
                          {Object.entries(menuItems[item as keyof typeof menuItems]).map(([category, links]) => (
                            <div key={category}>
                              <h3 className="font-bold text-brand-blue mb-2">{category}</h3>
                              <ul className="space-y-1">
                                {links.map((link) => (
                                  <li key={link}>
                                    <a href="#" className="block text-sm text-gray-300 hover:text-white">{link}</a>
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
                    <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light-gray/50 hover:text-white focus:bg-brand-light-gray/50 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Sounds
                    </a>
                  </NavigationMenuItem>
                   <NavigationMenuItem>
                    <a href="#" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-light-gray/50 hover:text-white focus:bg-brand-light-gray/50 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Plugins
                    </a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
             <div className="relative w-64">
                <input type="search" placeholder="Search..." className="bg-brand-light-gray/50 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost" className="text-white hover:bg-brand-light-gray/50 hover:text-white">Login</Button>
            <Button className="bg-brand-blue hover:bg-blue-600">Register</Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
