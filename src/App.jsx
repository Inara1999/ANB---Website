import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Brands from './components/Brands';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoginModal from './components/LoginModal';
import ProductModal from './components/ProductModal';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';

function App() {
  // Theme state persisted in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openLoginModal={() => setIsLoginOpen(true)}
        openSearchModal={() => setIsSearchOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* About & Business Info Section */}
      <About />

      {/* Product Categories Section */}
      <Categories
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          setSelectedBrand(null);
        }}
      />

      {/* Brands Section */}
      <Brands
        selectedBrand={selectedBrand}
        onSelectBrand={(brandName) => {
          setSelectedBrand(brandName);
        }}
      />

      {/* Featured Products Showcase Section */}
      <FeaturedProducts
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        onOpenProductModal={(product) => setSelectedProduct(product)}
      />

      {/* Why Choose Us Animated Statistics */}
      <WhyChooseUs />

      {/* Services Section */}
      <Services />

      {/* Testimonials Review Cards */}
      <Testimonials />

      {/* Contact & Map Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modal Dialogs */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
