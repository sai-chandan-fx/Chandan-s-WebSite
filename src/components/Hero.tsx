import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { videoMap } from '@/lib/videos'; // adjust this path if needed

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const videoItems = useMemo(() =>
    Object.keys(videoMap).map((key) => {
      const [category, slug] = key.split('/');
      return {
        key,
        title: slug.replace(/-/g, ' '),
        path: `/${category}/${slug}`,
      };
    }), []
  );

  const filtered = useMemo(() =>
    query
      ? videoItems.filter(v => v.title.toLowerCase().includes(query.toLowerCase()))
      : [], [query, videoItems]
  );

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery('');
  };

  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        style={{ objectFit: 'cover', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <source src="/Contents/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 px-4 w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          Where Imagination Meets Reality
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          - One pixel at a time.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 150)}
              placeholder="Search"
              className="w-full py-4 pl-6 pr-16 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-blue p-3 rounded-full hover:bg-blue-600 transition-colors">
              <Search className="h-6 w-6" />
            </button>

            {isFocused && filtered.length > 0 && (
              <ul className="absolute z-30 mt-2 w-full bg-white text-black rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filtered.map(item => (
                  <li
                    key={item.key}
                    onMouseDown={() => handleSelect(item.path)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
