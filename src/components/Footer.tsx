
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { FaSnapchat } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="flex-shrink-0 flex items-center">
              <img src='img/all img/logo/P whitelog.png' className="text-2xl font-bold h-36 w-auto"></img>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md lg:mt-[-40px]">
              {/* {t('footer.description')} */}
              Fresh, healthy, and delivered straight <br/>to your doorstep
            </p>
            <div className="flex space-x-4">
  <a href="https://www.facebook.com/people/Pulse-Restaurant-KSA/61577630969077/" target="_blank" rel="noopener noreferrer">
    <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.instagram.com/pulsefoods.sa/" target="_blank" rel="noopener noreferrer">
    <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
  </a>
  <a href="https://www.snapchat.com/add/pulsefoods?share_id=PDxjxioAAeE&locale=en-US" target="_blank" rel="noopener noreferrer">
    <FaSnapchat className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
  </a>
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-green-400 transition-colors">
                  {t('nav.subscription')}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+966 133479961 </span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@pulsefood.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Fanatheer, Jubail, KSA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Pulse Food. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
