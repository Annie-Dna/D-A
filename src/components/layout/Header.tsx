'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaShoppingCart, FaSearch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full ${isScrolled ? 'fixed top-0 left-0 w-full z-50 shadow-lg bg-white' : ''}`}>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden lg:block bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="tel:03109585555" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaPhone className="text-primary" />
                <span className="text-sm">0310 958 5555</span>
              </Link>
              <Link href="mailto:DnaYouthClub@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FaEnvelope className="text-primary" />
                <span className="text-sm">DnaYouthClub@gmail.com</span>
              </Link>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm">Office 301, Business Bay, Dubai, UAE</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-primary transition-colors"><FaFacebookF size={14} /></Link>
                <Link href="#" className="text-white hover:text-primary transition-colors"><FaTwitter size={14} /></Link>
                <Link href="#" className="text-white hover:text-primary transition-colors"><FaInstagram size={14} /></Link>
                <Link href="#" className="text-white hover:text-primary transition-colors"><FaLinkedinIn size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Dream N Achieve"
                width={120}
                height={60}
                className="h-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1 ml-12">
              <nav className="flex items-center gap-8">
                <Link 
                  href="/" 
                  className={`font-semibold text-sm group flex items-center gap-1 ${pathname === '/' ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}`}
                >
                  HOME
                </Link>
                <Link 
                  href="/about" 
                  className={`font-semibold text-sm ${pathname === '/about' ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}`}
                >
                  ABOUT US
                </Link>
                <Link 
                  href="/gallery" 
                  className={`font-semibold text-sm ${pathname === '/gallery' ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}`}
                >
                  GALLERY
                </Link>
                <Link 
                  href="/collaboration" 
                  className={`font-semibold text-sm ${pathname === '/collaboration' ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}`}
                >
                  COLLABORATION
                </Link>
                <Link 
                  href="/membership" 
                  className={`font-semibold text-sm ${pathname === '/membership' ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}`}
                >
                  MEMBERSHIP
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-semibold text-sm">CONTACT</Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/cart" className="relative">
                <FaShoppingCart className="text-xl text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
              </Link>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)} 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaSearch className="text-xl" />
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="lg:hidden text-gray-700"
              >
                {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
              <Link 
                href="/quote" 
                className="hidden lg:flex bg-primary text-white px-8 py-3 rounded font-semibold text-sm hover:bg-[#4d7789] transition-colors items-center"
              >
                Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/images/logo.png"
                alt="Dream N Achieve"
                width={140}
                height={46}
                className="h-auto"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="space-y-6">
              <Link 
                href="/" 
                className={`block font-semibold ${pathname === '/' ? 'text-primary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block font-semibold ${pathname === '/about' ? 'text-primary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/gallery" 
                className={`block font-semibold ${pathname === '/gallery' ? 'text-primary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/collaboration" 
                className={`block font-semibold ${pathname === '/collaboration' ? 'text-primary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collaboration
              </Link>
              <Link 
                href="/membership" 
                className={`block font-semibold ${pathname === '/membership' ? 'text-primary' : 'text-gray-800 hover:text-primary transition-colors'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Membership
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-800 hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8">
              <Link 
                href="/quote" 
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded font-semibold hover:bg-accent-hover transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className={`w-full max-w-2xl bg-white rounded-lg p-8 transform transition-transform duration-300 ${isSearchOpen ? 'scale-100' : 'scale-95'}`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Search</h3>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg py-4 px-6 text-gray-700 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                <FaSearch size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;