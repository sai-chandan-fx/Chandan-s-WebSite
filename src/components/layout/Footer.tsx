import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  'Explore': ['VFX', 'Graphics', '3D Models', 'Music'],
  'Social Media': ['Linkedin', 'YouTube', 'Instagram', 'Github'],
};

const socialIcons = {
  'YouTube': <Youtube className="inline-block mr-2 text-gray-400 hover:text-white" />,
  'Instagram': <Instagram className="inline-block mr-2 text-gray-400 hover:text-white" />,
  'Github': <Github className="inline-block mr-2 text-gray-400 hover:text-white" />,
  'Linkedin': <Linkedin className="inline-block mr-2 text-gray-400 hover:text-white" />,
};

const socialLinks = {
  'Linkedin': 'https://www.linkedin.com/in/sai-chandan-susarla-96baa5279',
  'YouTube': 'https://youtube.com/@wargod_007',
  'Instagram': 'https://www.instagram.com/chandan_sai_007',
  'Github': 'https://github.com/sai-chandan-fx',
};

const Footer = () => {
  return (
    <footer className="bg-brand-gray border-t border-brand-light-gray text-gray-400">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {/* Explore Section */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {title === 'Social Media' && socialIcons[link] ? (
                      <a
                        href={socialLinks[link]} // Add the correct link for social media
                        className="flex items-center text-base text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${link}`}
                      >
                        {socialIcons[link]}
                        {link}
                      </a>
                    ) : (
                      <Link
                        to={`/category/${link.toLowerCase().replace(' ', '-')}`}
                        className="text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Credits Section - Added sentences */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Site Details</h3>
            <div className="mt-4 space-y-2">
              <p className="mt-8 md:mt-0 text-base text-gray-400 ">&copy; {new Date().getFullYear()} CVX (Chandan VFX). All rights reserved.</p>
              <p className="text-base text-gray-400">All content and assets on the site are property of S.Sai Chandan.</p>
              <p className="text-base text-gray-400">This website is designed and developed by K.Karthik (karthik63022@gmail.com).</p>
              <p className="text-base text-gray-400">Special thanks to Vercel for providing a deployment platform.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
