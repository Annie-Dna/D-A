'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-white">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/logo.png"
                alt="Dream N Achieve"
                width={150}
                height={60}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-500 mb-6">
              Empowering young minds to dream big and achieve bigger. Join our vibrant community where every youth has the opportunity to grow, learn, and excel.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#5A90A8] flex items-center justify-center hover:bg-white hover:text-[#5A90A8] transition-colors">
                <FaFacebookF size={16} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#5A90A8] flex items-center justify-center hover:bg-white hover:text-[#5A90A8] transition-colors">
                <FaTwitter size={16} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#5A90A8] flex items-center justify-center hover:bg-white hover:text-[#5A90A8] transition-colors">
                <FaInstagram size={16} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#5A90A8] flex items-center justify-center hover:bg-white hover:text-[#5A90A8] transition-colors">
                <FaLinkedinIn size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#002147] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/collaboration" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-[#5A90A8] transition-colors flex items-center gap-2">
                  <FaArrowRight className="text-[#5A90A8]" size={12} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#002147] mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-[#5A90A8] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <div className="space-y-4">
                    <Link href="tel:03109585555" className="text-gray-500 hover:text-[#5A90A8] transition-colors">
                      0310 958 5555
                    </Link>
                    <br />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#5A90A8] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <div className="space-y-4">
                    <Link href="mailto:DnaYouthClub@gmail.com" className="text-gray-500 hover:text-[#5A90A8] transition-colors">
                      DnaYouthClub@gmail.com
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#5A90A8] mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <address className="text-gray-500 not-italic">
                    Office 301, Business Bay, Dubai, UAE
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-[#002147] mb-6">Stay Connected</h3>
            <p className="text-gray-500 mb-6">
              Join our newsletter to stay updated with youth programs, events, and opportunities for growth.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-white/10 border border-gray-200 text-gray-500 px-4 py-3 rounded focus:outline-none focus:border-[#5A90A8]"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-[#5A90A8] text-white rounded-r hover:bg-[#4d7789] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-black">
        <div className="container py-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Dream N Achieve. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-300 hover:text-[#5A90A8] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#5A90A8] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
