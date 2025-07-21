
import { Film, Clapperboard, Sparkles, Wand2, WandSparkles, Mic2, Puzzle, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'VFX', icon: Sparkles },
  { name: 'Motion Graphics', icon: Film },
  { name: '3d-models', icon: Wand2 },
  { name: 'Graphics', icon: Clapperboard },
  { name: 'Composition', icon: WandSparkles },
  { name: 'Music', icon: Mic2 },
  { name: 'Photos', icon: Puzzle},
  { name: 'Scripts', icon: FileCode },
];

const CategoryGrid = () => {
  return (
    <div className="bg-brand-gray py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-4 rounded-lg bg-brand-light-gray hover:bg-brand-blue transition-colors duration-300 flex flex-col items-center justify-center aspect-square"
            >
              <category.icon className="mx-auto h-10 w-10 text-gray-400 group-hover:text-white transition-colors" />
              <p className="mt-2 text-sm font-semibold text-white">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
