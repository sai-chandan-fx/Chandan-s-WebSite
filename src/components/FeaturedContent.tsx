
import { Link } from 'react-router-dom';

const toSlug = (str: string): string => {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

const featuredItems = [
  { id: 1, title: 'Dancing Girl', category: 'fx', image: '/Contents/fx/dancing-girl.png' },
  { id: 2, title: 'Dr Strange', category: 'composition', image: '/Contents/composition/dr-strange.png' },
  { id: 3, title: 'Supe Bike', category: 'composition', image: '/Contents/composition/super-bike.png' },
  { id: 4, title: 'Mewtwo Shadow Ball', category: 'fx', image: '/Contents/fx/mewtwo-shadow-ball.png' },
  { id: 5, title: 'Cube Animation', category: 'motion-graphics', image: '/Contents/graphics/cube.png' },
  { id: 6, title: 'Marvel 10', category: 'composition',  image: '/Contents/composition/marvel.png' },
  { id: 7, title: 'Ben 10', category: 'composition', image: '/Contents/composition/ben-10.jpg' },
  { id: 8, title: 'Shazam', category: 'composition', image: '/Contents/composition/shazam.png' },
  { id: 9, title: 'Tornado', category: 'fx', image: '/Contents/fx/tornado.png' },
  { id: 10, title: 'Aurora', category: 'composition', image: '/Contents/composition/aurora.png' },
  { id: 11, title: 'Wall Breaking', category: 'fx', image: '/Contents/fx/wall-breaking.png' },
  { id: 12, title: 'Spawn Effect', category: 'fx', image: '/Contents/fx/spawn.png'},
];

const FeaturedContent = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">New & Popular Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/${toSlug(item.category)}/${toSlug(item.title)}`}
              className="group relative overflow-hidden rounded-lg block cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-sm text-brand-blue font-bold">{item.category}</p>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;