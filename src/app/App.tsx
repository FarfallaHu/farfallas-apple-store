import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { ProductDetail } from './pages/ProductDetail';
import { AppleIdManagement } from './pages/AppleIdManagement';

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function App() {
  useEffect(() => {
    // Update document title
    document.title = 'My Apple Store';
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f7] font-sans antialiased selection:bg-[#78c0ff] selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/category/:name" component={Category} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/apple-id-management" component={AppleIdManagement} />

        {/* Fallback 404 route (redirect to home or show 404) */}
      </Switch>

      <Footer />
    </main>
  );
}