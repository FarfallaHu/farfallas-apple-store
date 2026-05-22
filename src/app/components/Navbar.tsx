import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Apple, Search, ShoppingBag, Menu, X } from 'lucide-react';
import { products } from '../data/products';

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search logic: filter products by name or specs
      const results = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      // If only one result, go directly to it
      if (results.length === 1) {
        setLocation(`/product/${results[0].id}`);
        setSearchOpen(false);
        setSearchQuery('');
      } else if (results.length > 0) {
        // If multiple results in same category, go to that category
        const categories = [...new Set(results.map(p => p.category))];
        if (categories.length === 1) {
          setLocation(`/category/${categories[0].toLowerCase()}`);
        } else {
          // Otherwise go to home
          setLocation('/');
        }
        setSearchOpen(false);
        setSearchQuery('');
      }
    }
  };

  const searchResults = searchQuery.trim() 
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-[12px] text-gray-700 font-medium">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex flex-1 items-center justify-between max-w-3xl mx-auto">
            <li>
              <Link href="/" className="hover:opacity-65 transition-opacity">
                <Apple className="w-4 h-4 -mt-1" />
              </Link>
            </li>
            <li><Link href="/" className="hover:opacity-65 transition-opacity">Store</Link></li>
            <li><Link href="/category/mac" className="hover:opacity-65 transition-opacity">Mac</Link></li>
            <li><Link href="/category/ipad" className="hover:opacity-65 transition-opacity">iPad</Link></li>
            <li><Link href="/category/iphone" className="hover:opacity-65 transition-opacity">iPhone</Link></li>
            <li><Link href="/category/watch" className="hover:opacity-65 transition-opacity">Watch</Link></li>
            <li><Link href="/category/airpods" className="hover:opacity-65 transition-opacity">AirPods</Link></li>
            <li><Link href="/category/accessories" className="hover:opacity-65 transition-opacity">Accessories</Link></li>
            <li><a href="https://support.apple.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-65 transition-opacity">Support</a></li>
            <li>
              <button onClick={() => setSearchOpen(!searchOpen)} className="hover:opacity-65 transition-opacity">
                <Search className="w-3.5 h-3.5" />
              </button>
            </li>
            <li>
              <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-65 transition-opacity">
                <ShoppingBag className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5" />
            </button>
            <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-12 bg-white border-b border-gray-200 shadow-lg">
            <ul className="flex flex-col py-4 text-sm">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/mac" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  Mac
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/ipad" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  iPad
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/iphone" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  iPhone
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/watch" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  Watch
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/airpods" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  AirPods
                </Link>
              </li>
              <li>
                <Link 
                  href="/category/accessories" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li className="border-t border-gray-200 mt-2 pt-2">
                <a 
                  href="https://support.apple.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute left-0 right-0 top-12 bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-2xl mx-auto px-4 py-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full px-4 py-3 text-2xl bg-transparent border-none outline-none placeholder-gray-400"
                  autoFocus
                />
                <button 
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </form>

              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Quick Results</p>
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.specs}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery.trim() && searchResults.length === 0 && (
                <p className="mt-4 text-sm text-gray-500">No results found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}