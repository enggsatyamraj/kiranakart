"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  FaSearch, FaUser, FaShoppingCart, FaTruck, FaLeaf, FaWallet, FaHeadset,
  FaStar, FaStarHalfAlt, FaMapMarkerAlt,
  FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram,
  FaLinkedinIn, FaGooglePlay, FaApple, FaArrowUp, FaTimes
} from 'react-icons/fa';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              Kirana<span className="text-green-600">Kart</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#home" className="text-green-600 font-medium">Home</Link></li>
              <li><Link href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</Link></li>
              <li><Link href="#categories" className="text-gray-700 hover:text-green-600 transition-colors">Categories</Link></li>
              <li><Link href="#offers" className="text-gray-700 hover:text-green-600 transition-colors">Offers</Link></li>
              <li><Link href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              <FaSearch className="text-xl" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              <FaUser className="text-xl" />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 transition-colors relative">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
        >
          <div className="container mx-auto px-4 py-20">
            <nav>
              <ul className="flex flex-col space-y-6 text-center">
                <li>
                  <Link href="#home" className="text-2xl text-green-600 font-medium" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" onClick={handleLinkClick}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" onClick={handleLinkClick}>
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="#offers" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" onClick={handleLinkClick}>
                    Offers
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" onClick={handleLinkClick}>
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-2xl text-gray-700 hover:text-green-600 transition-colors" onClick={handleLinkClick}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-12 flex justify-center space-x-6">
              <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </Link>
              <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <FaTwitter />
              </Link>
              <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Fresh Groceries Delivered to Your Doorstep</h1>
              <p className="text-lg text-gray-600 mb-8">Shop from over 10,000+ products and get them delivered within hours. Trusted by 100,000+ customers nationwide.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#products" className="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors">
                  Shop Now
                </Link>
                <Link href="#categories" className="px-6 py-3 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Explore Categories
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 w-full" data-aos="fade-left">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt="Fresh Groceries"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wave-container mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose KiranaKart?</h2>
            <p className="text-lg text-gray-600">We provide the best shopping experience with quality products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaTruck className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered within hours of ordering</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaLeaf className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fresh Products</h3>
              <p className="text-gray-600">All our products are fresh and of the highest quality</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaWallet className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Prices</h3>
              <p className="text-gray-600">We offer competitive prices on all our products</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                <FaHeadset className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our customer support team is available round the clock</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Shop by Categories</h2>
            <p className="text-lg text-gray-600">Explore our wide range of product categories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Fruits & Vegetables"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Fruits & Vegetables</h3>
                <Link href="#" className="inline-block px-6 py-2 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                  alt="Dairy & Bakery"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Dairy & Bakery</h3>
                <Link href="#" className="inline-block px-6 py-2 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Staples & Grains"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Staples & Grains</h3>
                <Link href="#" className="inline-block px-6 py-2 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJpbmt8ZW58MHx8MHx8fDA%3D"
                  alt="Beverages"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Beverages</h3>
                <Link href="#" className="inline-block px-6 py-2 border border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Handpicked products for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">New</div>
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt="Organic Apples"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Organic Apples</h3>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStarHalfAlt className="text-yellow-400" />
                  <span className="text-gray-600 text-sm ml-1">(4.5)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-green-600 font-bold">₹120</span>
                    <span className="text-gray-400 line-through ml-2">₹150</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</div>
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Fresh Milk"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh Milk</h3>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <span className="text-gray-600 text-sm ml-1">(5.0)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-green-600 font-bold">₹60</span>
                    <span className="text-gray-400 line-through ml-2">₹75</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Whole Wheat Bread"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Whole Wheat Bread</h3>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-gray-300" />
                  <span className="text-gray-600 text-sm ml-1">(4.0)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-green-600 font-bold">₹45</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Bestseller</div>
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                    alt="Basmati Rice"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Basmati Rice (5kg)</h3>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStarHalfAlt className="text-yellow-400" />
                  <span className="text-gray-600 text-sm ml-1">(4.7)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-green-600 font-bold">₹450</span>
                    <span className="text-gray-400 line-through ml-2">₹500</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="#" className="inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h2>
            <p className="text-lg text-gray-600">Limited time deals you don&apos;t want to miss</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Weekend Special</h3>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">30% OFF</h2>
                  <p className="text-gray-600 mb-2">On all fruits and vegetables</p>
                  <p className="text-sm text-gray-500 mb-6">Valid till: 30th April 2025</p>
                  <Link href="#" className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors">
                    Shop Now
                  </Link>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Weekend Special"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg overflow-hidden shadow-lg text-white p-8" data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-2">First Order</h3>
                <h2 className="text-3xl font-bold mb-4">₹200 OFF</h2>
                <p className="mb-6">Use code: FIRST200</p>
                <Link href="#" className="inline-block px-6 py-2 bg-white text-green-600 font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Claim Now
                </Link>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg overflow-hidden shadow-lg text-white p-8" data-aos="fade-left">
                <h3 className="text-xl font-semibold mb-2">Refer a Friend</h3>
                <h2 className="text-3xl font-bold mb-4">Get ₹100</h2>
                <p className="mb-6">For each successful referral</p>
                <Link href="#" className="inline-block px-6 py-2 bg-white text-yellow-500 font-medium rounded-full hover:bg-gray-100 transition-colors">
                  Refer Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Trusted by 100,000+ happy customers</p>
          </div>
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Customer"
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex mb-4">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-600 italic mb-6">&quot;KiranaKart has made grocery shopping so convenient for me. The products are always fresh, and the delivery is super quick. I&apos;ve been a loyal customer for over a year now!&quot;</p>
                  <h3 className="text-xl font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-gray-500">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="w-3 h-3 rounded-full bg-green-600 mx-1"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 mx-1"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 mx-1"></button>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="app" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Download Our Mobile App</h2>
              <p className="text-lg text-gray-600 mb-8">Get exclusive app-only offers and shop on the go. Our mobile app makes grocery shopping even more convenient!</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <FaGooglePlay className="text-2xl mr-3" />
                  <div>
                    <span className="block text-xs">GET IT ON</span>
                    <span className="block text-sm font-medium">Google Play</span>
                  </div>
                </Link>
                <Link href="#" className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <FaApple className="text-2xl mr-3" />
                  <div>
                    <span className="block text-xs">Download on the</span>
                    <span className="block text-sm font-medium">App Store</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="relative h-96 w-full">
                <Image
                  src="https://cdn.dribbble.com/userupload/18296897/file/original-afa30e0fe6dcdb5fb5059f6cc3fb980c.png?resize=1024x768&vertical=center"
                  alt="KiranaKart Mobile App"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We&apos;d love to hear from you</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">123 Main Street, Mumbai, India - 400001</p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Number</h3>
                    <p className="text-gray-600">+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
                    <p className="text-gray-600">support@kiranakart.com</p>
                  </div>
                </div>
                <div className="flex items-start mb-8">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaClock className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </Link>
                  <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <FaTwitter />
                  </Link>
                  <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <FaInstagram />
                  </Link>
                  <Link href="#" className="bg-gray-200 hover:bg-green-600 hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      placeholder="Your Message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent h-32 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  Kirana<span className="text-green-400">Kart</span>
                </h2>
              </div>
              <p className="text-gray-400 mb-6">Your trusted online grocery store with over 10,000+ products delivered to your doorstep.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link></li>
                <li><Link href="#offers" className="text-gray-400 hover:text-white transition-colors">Offers</Link></li>
                <li><Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Fruits & Vegetables</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Dairy & Bakery</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Staples & Grains</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Beverages</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Snacks & Branded Foods</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Personal Care</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mt-1 mr-3" />
                  <span className="text-gray-400">123 Main Street, Mumbai, India - 400001</span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-green-400 mr-3" />
                  <span className="text-gray-400">+91 1234567890</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-green-400 mr-3" />
                  <span className="text-gray-400">support@kiranakart.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">&copy; 2025 KiranaKart. All Rights Reserved.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Link href="#" className="fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors z-30">
        <FaArrowUp />
      </Link>
    </main>
  );
}