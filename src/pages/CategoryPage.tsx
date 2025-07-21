import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toTitleCase } from '@/lib/utils';  

// Category data maps
const categoryData = {
  vfx: [
    { id: 1, title: 'Force Field Effect', category: 'fx', slug: 'force-field', image: '/Contents/fx/force-field.png' },
    { id: 2, title: 'Cloud Test', category: 'fx', slug: 'cloud-img', image: '/Contents/fx/cloud.png' },
    { id: 3, title: 'Portal Effect', category: 'fx', slug: 'portal', image: '/Contents/fx/portal.png' },
    { id: 4, title: 'Dancing Girl', category: 'fx', slug: 'dancing-girl', image: '/Contents/fx/dancing-girl.png' },
    { id: 5, title: 'Mewtwo Shadow Ball', category: 'fx', slug: 'mewtwo-shadow-ball', image: '/Contents/fx/mewtwo-shadow-ball.png' },
    { id: 6, title: 'Spawn Effect', category: 'fx', slug: 'spawn-fx', image: '/Contents/fx/spawn.png'},
    { id: 7, title: 'Godzilla ', category: 'fx', slug: 'godzilla-fx', image: '/Contents/fx/godzilla.png'},
    { id: 8, title: 'Flare Gun', category: 'fx', slug: 'flare-gun', image: '/Contents/fx/flare-gun.png' },
    { id: 9, title: 'Tornado', category: 'fx', slug: 'tornado', image: '/Contents/fx/tornado.png' },
    { id: 10, title: 'Fire Kick', category: 'fx', slug: 'fire-kick', image: '/Contents/fx/fire-kick.png' },
    { id: 11, title: 'Vellum Hair', category: 'fx', slug: 'vellum-hair', image: '/Contents/fx/vellum-hair.png' },
    { id: 12, title: 'Snow Breakdown Effect', category: 'fx', slug: 'snow', image: '/Contents/fx/snow.png' },
    { id: 13, title: 'Fire Pose', category: 'fx', slug: 'fire-pose', image: '/Contents/fx/fire-pose.png' },
    { id: 14, title: 'Growth Effect', category: 'fx', slug: 'growth-fx', image: '/Contents/fx/growth.png' },
    { id: 15, title: 'River', category: 'fx', slug: 'river-sim', image: '/Contents/fx/river.png' },
    { id: 16, title: 'Wall Breaking', category: 'fx', slug: 'wall-breaking', image: '/Contents/fx/wall-breaking.png' },
    { id: 17, title: 'Dust shockwave', category: 'fx', slug: 'dust-shockwave', image: '/Contents/fx/dust-shockwave.png' },
  ],
  'motion-graphics': [
    { id: 1, title: 'Cube Animation', category: 'motion-graphics', slug: 'cube-animation', image: '/Contents/graphics/cube.png' },
    { id: 2, title: 'Evil Dead', category: 'motion-graphics', slug: 'evil-dead', image: '/Contents/graphics/evil-dead.png' },
    { id: 3, title: 'KGF', category: 'motion-graphics', slug: 'kgf', image: '/Contents/graphics/kgf.png' },
    { id: 4, title: 'Dance Glow Effect', category: 'motion-graphics', slug: 'dance-effect', image: '/Contents/graphics/dance-effect.png' },
    { id: 5, title: 'Music', category: 'motion-graphics', slug: 'music', image: '/Contents/graphics/music.png' },
  ],
  '3d-models': [
    { id: 1, title: 'Cube Animation', category: 'motion-graphics', slug: 'cube-animation', image: '/Contents/graphics/cube.png' },
    { id: 2, title: 'Flare Gun', category: 'fx', slug: 'flare-gun', image: '/Contents/fx/flare-gun.png' },
    { id: 3, title: 'Tornado', category: 'fx', slug: 'tornado', image: '/Contents/fx/tornado.png' },
    { id: 4, title: 'Fire Pose', category: 'fx', slug: 'fire-pose', image: '/Contents/fx/fire-pose.png' },
    { id: 5, title: 'Wall Breaking', category: 'fx', slug: 'wall-breaking', image: '/Contents/fx/wall-breaking.png' },
    { id: 6, title: 'Mewtwo Shadow Ball', category: 'fx', slug: 'mewtwo-shadow-ball', image: '/Contents/fx/mewtwo-shadow-ball.png' },
    { id: 7, title: 'Fire Kick', category: 'fx', slug: 'fire-kick', image: '/Contents/fx/fire-kick.png' },
  ],
  'graphics': [
    { id: 1, title: 'Cube Animation', category: 'motion-graphics', slug: 'cube-animation', image: '/Contents/graphics/cube.png' },
    { id: 2, title: 'Evil Dead', category: 'motion-graphics', slug: 'evil-dead', image: '/Contents/graphics/evil-dead.png' },
    { id: 3, title: 'KGF', category: 'motion-graphics', slug: 'kgf', image: '/Contents/graphics/kgf.png' },
    { id: 4, title: 'Dance Glow Effect', category: 'motion-graphics', slug: 'dance-effect', image: '/Contents/graphics/dance-effect.png' },
    { id: 5, title: 'Ben 10', category: 'composition', slug: 'ben-10', image: '/Contents/composition/ben-10.jpg' },
    { id: 6, title: 'Aurora', category: 'composition', slug: 'aurora', image: '/Contents/composition/aurora.png' },
    { id: 7, title: 'Snow', category: 'composition', slug: 'snow', image: '/Contents/composition/snow.png' },
    { id: 8, title: 'Shazam', category: 'composition', slug: 'shazam', image: '/Contents/composition/shazam.png' },
  ],
  'composition': [
    { id: 1, title: 'Supe Bike', category: 'composition', slug: 'super-bike', image: '/Contents/composition/super-bike.png' },
    { id: 2, title: 'Marvel 10', category: 'composition', slug: 'marvel-10', image: '/Contents/composition/marvel.png' },
    { id: 3, title: 'Electro Blast', category: 'composition', slug: 'electro-blast', image: '/Contents/composition/electro-blast.png' },
    { id: 4, title: 'Apple Disintegrate Effect', category: 'composition', slug: 'apple-disintegrate-effect', image: '/Contents/composition/apple.png' },
    { id: 5, title: 'Snow', category: 'composition', slug: 'snow', image: '/Contents/composition/snow.png' },
    { id: 6, title: 'Aurora', category: 'composition', slug: 'aurora', image: '/Contents/composition/aurora.png' },
    { id: 7, title: 'Dr Strange', category: 'composition', slug: 'dr-strange', image: '/Contents/composition/dr-strange.png' },
    { id: 8, title: 'Ben 10', category: 'composition', slug: 'ben-10', image: '/Contents/composition/ben-10.jpg' },
    { id: 9, title: 'Shazam', category: 'composition', slug: 'shazam', image: '/Contents/composition/shazam.png' },
    { id: 10, title: 'Car CGI', category: 'composition', slug: 'car-cgi', image: '/Contents/composition/car-cgi.png' },
  ],
  'music': [
    { id: 1, title: 'Music', category: 'motion-graphics', slug: 'music', image: '/Contents/graphics/music.png' },
  ]
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const categoryKey = category?.toLowerCase() as keyof typeof categoryData;
  const items = categoryData[categoryKey] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);
  
  const handleItemClick = (item: any) => {
    navigate(`/${item.category}/${item.slug}`);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4">{toTitleCase(category || '')}</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my collection of {category?.toUpperCase()} projects.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;