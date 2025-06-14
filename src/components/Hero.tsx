
import { Search } from 'lucide-react';

const Hero = () => {
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
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          The Best VFX For Your Videos
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
          Download from our library of 10,000+ professional assets, and take your projects to the next level.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search 10,000+ assets..."
              className="w-full py-4 pl-6 pr-16 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-blue p-3 rounded-full hover:bg-blue-600 transition-colors">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
