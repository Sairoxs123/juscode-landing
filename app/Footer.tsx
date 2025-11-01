import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="w-full px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Jus<span className="text-indigo-400">Code</span>
              </span>
            </Link>
            <p className="mt-4 text-sm">
              The ultimate platform for coders to practice, learn, and compete.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/features" className="text-sm hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JusCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;