// components/Footer.tsx

import { NAV_LINKS, CONTACT_INFO } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Column 1: Brand and Socials */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
            madras
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Experience the perfect blend of traditional recipes and modern culinary techniques. Every dish is crafted with passion and the finest ingredients.
          </p>
          {/* Add your social media links here */}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-yellow-400">f</a>
            <a href="#" className="hover:text-yellow-400">i</a>
            <a href="#" className="hover:text-yellow-400">t</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-400 hover:text-white text-sm">{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#reservations" className="text-gray-400 hover:text-white text-sm">Reservations</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{CONTACT_INFO.address}</li>
            <li>{CONTACT_INFO.phone}</li>
            <li>{CONTACT_INFO.email}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="container mx-auto text-center border-t border-gray-800 mt-12 pt-6">
        <p className="text-gray-500 text-xs">
          &copy; {currentYear} madras Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;