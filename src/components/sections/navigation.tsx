"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: '서비스 소개', href: '/services' },
    { label: '성공 사례', href: '/success-stories' },
    { label: '전문가 팀', href: '/expert-team' },
    { label: '프로세스', href: '/process' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
            >
              RINDA Beauty
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="/apply"
              className="hidden sm:inline-flex px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              바이어 매칭 신청
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-rose-500 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 visible transform translate-y-0' 
          : 'opacity-0 invisible transform -translate-y-4'
      }`}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-rose-500 font-medium py-2 border-b border-gray-100 last:border-b-0 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/apply"
              className="inline-flex justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              바이어 매칭 신청
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};