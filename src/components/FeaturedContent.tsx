
const featuredItems = [
  { id: 1, title: 'Realistic Fire Pack', category: 'VFX', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop' },
  { id: 2, title: 'Cyberpunk HUD Elements', category: 'Motion Graphics', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop' },
  { id: 3, title: 'Low Poly Nature Pack', category: '3D', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&auto=format&fit=crop' },
  { id: 4, title: 'Action Movie Trailer', category: 'Music', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop' },
];

const FeaturedContent = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">New & Popular Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-sm text-brand-blue font-bold">{item.category}</p>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
