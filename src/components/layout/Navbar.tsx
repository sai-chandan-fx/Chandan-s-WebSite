
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
  'Fx': ['Dancing girl','Force field', 'Mewtwo Shadow ball', 'Snow', 'Fire pose', 'Fire kick', 'Tornado', 'Flare gun', 'Growth fx', 'Godzilla fx', 'Vellum hair', 'Spawn fx', 'Cloud img', 'Portal', 'River sim', 'Dust shockwave', 'Wall breaking'],
  'Experience': ['SCP – Resonance', 'D Square vfx – Internship', 'Freelance video Editing', 'Udemy course', 'WAFX-Competition'],
  'Show Reels': ['composition reel', 'FX Reel', 'Screen Replacement'],
};

const navLinkClasses = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50";
const navTriggerClasses = "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const Navbar = () => {
  return (
    <header className="backdrop-blur-lg sticky top-0 z-50 border-b border-border bg-gradient-to-r from-gray-500 via-emerald-950 to-gray-950">
      <nav className=" max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex items-center justify-between h-22">
          <div className="flex items-center space-x-12">
            <a href="/">
              <div className="bg-transparent p-1 rounded-md ">
                <img
                  src="/Contents/logo.png"
                  alt="Chandan VFX Logo"
                  className="h-[90px] w-[180px]"
                />
              </div>
            </a>
            <div className="hidden lg:flex">
              <NavigationMenu delayDuration={200}>
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
                        <NavigationMenuContent className="bg-background/95 backdrop-blur-sm border-border shadow-xl">
                          <ul className="grid p-6 md:w-[500px] lg:w-[600px] grid-cols-3 gap-1">
                            {(menuItems as any)[item].map((link: string) => (
                              <li key={link}>
                                <a 
                                  href={`/${toSlug(item)}/${toSlug(link)}`} 
                                  className="block text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent transition-colors"
                                >
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
                    <a href="/software" className={navLinkClasses}>Software</a>
                  </NavigationMenuItem>
                  
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