
import { Button } from '@/components/ui/button';
import { Search, ChevronDown } from 'lucide-react';

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

const MobileMenu = () => {
    return (
        <div className="lg:hidden bg-brand-gray border-t border-brand-light-gray p-4 space-y-4">
            <div className="relative">
                <input type="search" placeholder="Search..." className="bg-brand-light-gray/50 text-white placeholder-gray-400 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="w-full">
                 {Object.keys(menuItems).map((item) => (
                    <details key={item} className="group">
                        <summary className="flex items-center justify-between py-2 font-medium text-white cursor-pointer list-none">
                            {item}
                            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 pt-2 space-y-2">
                         {Object.entries(menuItems[item as keyof typeof menuItems]).map(([category, links]) => (
                            <div key={category}>
                                <h3 className="font-bold text-brand-blue mb-2 text-sm">{category}</h3>
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
                    </details>
                 ))}
                 <a href="#" className="flex items-center py-2 font-medium text-white border-t border-brand-light-gray mt-2 pt-2">Sounds</a>
                 <a href="#" className="flex items-center py-2 font-medium text-white">Plugins</a>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-brand-light-gray">
                <Button variant="ghost" className="text-white hover:bg-brand-light-gray/50 hover:text-white w-full">Login</Button>
                <Button className="bg-brand-blue hover:bg-blue-600 w-full">Register</Button>
            </div>
        </div>
    )
}

export default MobileMenu;

