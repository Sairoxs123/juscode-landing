'use client'; // This is critical for hooks like useState and usePathname

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Mock function if you don't have createLog yet
const createLog = (event: string, data?: object) => {
  console.log('Log Event:', event, data);
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsResourcesDropdownOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/features', label: 'Features', icon: '✨' },
    { href: '/pricing', label: 'Pricing', icon: '💲' },
    { href: '/faq', label: 'FAQ', icon: '❓' },
  ];

  // Get the dashboard URL from environment variables
  const dashboardUrl =
    process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://dashboard.juscode.local:5173';

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => createLog('navbar_link_click', { link_text: 'Logo' })}
          >
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-200 shadow-md">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 hidden sm:block">
              Jus<span className="text-indigo-600">Code</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    createLog('navbar_link_click', { link_text: item.label })
                  }
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Resources Dropdown (Replaces Contact) */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                }
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  pathname.includes('/about') || pathname.includes('/contact')
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                <span className="text-base">📞</span>
                <span>Resources</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isResourcesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isResourcesDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-1 border border-gray-200 z-20 animate-slideDown">
                    <Link
                      href="/about"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false);
                        createLog('navbar_link_click', { link_text: 'About Us' });
                      }}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {/* SVG for About Us */}
                      <span>About Us</span>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => {
                        setIsResourcesDropdownOpen(false);
                        createLog('navbar_link_click', {
                          link_text: 'Contact Us',
                        });
                      }}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {/* SVG for Contact Us */}
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side Actions: Login & Sign Up */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                createLog('navbar_link_click', { link_text: 'Login' });
                alert('🚀 Login feature coming soon! Stay tuned for updates.');
              }}
              className="hidden lg:flex items-center space-x-2 px-4 py-2 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-50 transform transition-all duration-200 cursor-pointer"
            >
              <span>Login</span>
            </button>
            <button
              onClick={() => {
                createLog('navbar_link_click', { link_text: 'Sign Up' });
                alert('🚀 Sign Up feature coming soon! Stay tuned for updates.');
              }}
              className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:from-indigo-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>Sign Up</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                createLog('navbar_hamburger_click');
              }}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {/* Mobile Menu Icon (Hamburger/Close) */}
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* ... Mobile nav items ... */}
            {/* ... Mobile resources section ... */}
            {/* ... Mobile Login/Sign Up buttons ... */}
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;