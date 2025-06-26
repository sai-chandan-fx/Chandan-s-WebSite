
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronRight } from 'lucide-react';

const toSlug = (str: string) => str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

// Updated data structure to support nested items
const menuItems = {
  'Composition': ['Super bike', 'Marvel 10', 'Electro blast', 'Apple disintegrate effect', 'Snow', 'Aurora', 'Christmas', 'Car CGI', 'Smart vector', 'Shazam', 'Dr. Strange', 'Camera ghost', 'Ben 10', 'Watch ads'],
  'Fx': ['Force field', 'Mewtwo Shadow ball', 'Snow', 'Fire pose', 'Fire kick', 'Tornado', 'Flare gun', 'Growth fx', 'Godzilla fx', 'Vellum hair', 'Spawn fx', 'Cloud img', 'Portal', 'River sim', 'Dust shockwave', 'Wall breaking'],
  'Experience': [
    { 
      name: 'SCP – Resonance', 
      subItems: ['Behind the Scenes', 'VFX Breakdown', 'Making Process', 'Final Render'] 
    },
    { 
      name: 'D Square vfx – Internship', 
      subItems: ['Projects Overview', 'Skills Learned', 'Team Collaboration', 'Final Presentation'] 
    },
    { name: 'Freelance videoEditing' },
    { name: 'Udemy course' },
    { name: 'WAFX-Competition' },
  ],
  'Show Reels': ['composition reel', 'FX Reel', 'Screen Replacement'],
};

const navLinkClasses = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50";
const navTriggerClasses = "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";

const Navbar = () => {
  const renderExperienceItems = () => {
    return (menuItems.Experience as Array<string | { name: string; subItems?: string[] }>).map((item) => {
      if (typeof item === 'string') {
        return (
          <li key={item}>
            <a 
              href={`/experience/${toSlug(item)}`} 
              className="block text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent transition-colors"
            >
              {item}
            </a>
          </li>
        );
      } else if (item.subItems) {
        return (
          <li key={item.name}>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent transition-colors group">
                {item.name}
                <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                side="right" 
                sideOffset={8}
                className="bg-background/95 backdrop-blur-sm border-border shadow-xl z-[100] min-w-[200px]"
              >
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem key={subItem} asChild>
                    <a 
                      href={`/experience/${toSlug(item.name)}/${toSlug(subItem)}`}
                      className="block text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent cursor-pointer transition-colors w-full"
                    >
                      {subItem}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        );
      } else {
        return (
          <li key={item.name}>
            <a 
              href={`/experience/${toSlug(item.name)}`} 
              className="block text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent transition-colors"
            >
              {item.name}
            </a>
          </li>
        );
      }
    });
  };

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
              <NavigationMenu delayDuration={150}>
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
                            {item === 'Experience' ? (
                              renderExperienceItems()
                            ) : (
                              (menuItems as any)[item].map((link: string) => (
                                <li key={link}>
                                  <a 
                                    href={`/${toSlug(item)}/${toSlug(link)}`} 
                                    className="block text-sm text-muted-foreground hover:text-foreground p-3 rounded-md hover:bg-accent transition-colors"
                                  >
                                    {link}
                                  </a>
                                </li>
                              ))
                            )}
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
