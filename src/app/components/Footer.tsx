import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868b] text-xs py-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Store</Link></li>
              <li><Link href="/category/Mac" className="hover:underline">Mac</Link></li>
              <li><Link href="/category/iPad" className="hover:underline">iPad</Link></li>
              <li><Link href="/category/iPhone" className="hover:underline">iPhone</Link></li>
              <li><Link href="/category/Watch" className="hover:underline">Watch</Link></li>
              <li><Link href="#" className="hover:underline">Vision</Link></li>
              <li><Link href="/category/airpods" className="hover:underline">AirPods</Link></li>
              <li><Link href="#" className="hover:underline">TV & Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Account</h4>
            <ul className="space-y-2">
              <li><Link href="/apple-id-management" className="hover:underline">Manage Your Apple ID</Link></li>
              <li><a href="https://secure9.store.apple.com/shop/signIn/account?ssi=4AAABm7pkLRQBIPHNQYH0S420_7aH0D21ve4c5vKGcOBeDtOOV3g8McE8AAAANGh0dHBzOi8vc2VjdXJlOS5zdG9yZS5hcHBsZS5jb20vc2hvcC9hY2NvdW50L2hvbWV8fHwAAgEGRf7bS0TD6mZIW2mzr5AS9aNx9K3GYxAPVRln5VSIdw" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Store Account</a></li>
              <li><a href="https://www.icloud.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Entertainment</h4>
            <ul className="space-y-2">
              <li><a href="https://www.apple.com/apple-one/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple One</a></li>
              <li><a href="https://www.apple.com/apple-tv/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple TV</a></li>
              <li><a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Music</a></li>
              <li><a href="https://www.apple.com/apple-arcade/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Arcade</a></li>
              <li><a href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Podcasts</a></li>
              <li><a href="https://www.apple.com/apple-books/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Books</a></li>
              <li><a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="hover:underline">App Store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">About Apple</h4>
            <ul className="space-y-2">
              <li><a href="https://www.apple.com/newsroom/" target="_blank" rel="noopener noreferrer" className="hover:underline">Newsroom</a></li>
              <li><a href="https://www.apple.com/leadership/" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Leadership</a></li>
              <li><a href="https://www.apple.com/careers/us/" target="_blank" rel="noopener noreferrer" className="hover:underline">Career Opportunities</a></li>
              <li><a href="https://investor.apple.com/investor-relations/default.aspx" target="_blank" rel="noopener noreferrer" className="hover:underline">Investors</a></li>
              <li><a href="https://www.apple.com/compliance/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ethics & Compliance</a></li>
              <li><a href="https://www.apple.com/apple-events/" target="_blank" rel="noopener noreferrer" className="hover:underline">Events</a></li>
              <li><a href="https://www.apple.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:underline">Contact Apple</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="mb-2">More ways to shop: <a href="https://www.apple.com/retail/" target="_blank" rel="noopener noreferrer" className="text-[#0066cc] hover:underline">Find an Apple Store</a> or <a href="https://locate.apple.com/" target="_blank" rel="noopener noreferrer" className="text-[#0066cc] hover:underline">other retailer</a> near you.</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4 text-[10px] md:text-xs">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}