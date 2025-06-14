
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  'Explore': ['VFX', 'Graphics', '3D Models', 'Music'],
  'Community': ['Forum', 'Tutorials', 'Blog', 'Contests'],
  'Company': ['About Us', 'Contact', 'License', 'Privacy Policy'],
  'Account': ['My Account', 'Favorites', 'Uploads', 'Affiliates'],
};

const Footer = () => {
  return (
    <footer className="bg-brand-gray border-t border-brand-light-gray text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-brand-light-gray flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Youtube /></a>
          </div>
          <p className="mt-8 md:mt-0 text-base text-gray-400">&copy; {new Date().getFullYear()} ProductionCrate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
