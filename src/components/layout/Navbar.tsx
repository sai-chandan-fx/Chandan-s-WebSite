
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const toSlug = (str: string) => str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

const menuItems = {
  'Composition': ['Super bike', 'Marvel 10', 'Electro blast', 'Apple disintegrate effect', 'Snow', 'Aurora', 'Christmas', 'Car CGI', 'Smart vector', 'Shazam', 'Dr. Strange', 'Camera ghost', 'Ben 10', 'Watch ads'],
  'Fx': ['Force field', 'Mewtwo Shadow ball', 'Snow', 'Fire pose', 'Fire kick', 'Tornado', 'Flare gun', 'Growth fx', 'Godzilla fx', 'Vellum hair', 'Spawn fx', 'Cloud img', 'Portal', 'River sim', 'Dust shockwave', 'Wall breaking'],
  'Experience': ['SCP – Resonance', 'D Square vfx – Internship', 'Freelance videoEditing', 'Udemy course', 'WAFX-Competition'],
  'Show Reels': ['composition reel', 'FX Reel', 'Screen Replacement'],
};

const navLinkClasses = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50";
const navTriggerClasses = "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const Navbar = () => {
  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 border-b border-border">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center space-x-12">
            <a href="/">
              <div className="bg-white p-1 rounded-md border-2 border-primary">
                <img
                  src="/lovable-uploads/e0e406b0-0578-4c00-be4e-e6fbbcaa3901.png"
                  alt="Chandan VFX Logo"
                  className="h-[100px] w-[200px]"
                />
              </div>
            </a>
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center space-x-2">
                  <NavigationMenuItem>
                    <a href="/" className={navLinkClasses}>Home</a>
                  </NavigationMenuItem>

                  {Object.keys(menuItems).map((item) => (
                    <React.Fragment key={item}>
                      <span className="text-muted-foreground">|</span>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={navTriggerClasses}>
                          {item}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-popover border-border">
                          <ul className="grid p-4 md:w-[500px] lg:w-[600px] grid-cols-3 gap-2">
                            {(menuItems as any)[item].map((link: string) => (
                              <li key={link}>
                                <a href={`/${toSlug(item)}/${toSlug(link)}`} className="block text-sm text-muted-foreground hover:text-foreground p-2 rounded-md hover:bg-accent">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </React.Fragment>
                  ))}
                  
                  <span className="text-muted-foreground">|</span>
                  <NavigationMenuItem>
                    <a href="/contact" className={navLinkClasses}>Contact</a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
