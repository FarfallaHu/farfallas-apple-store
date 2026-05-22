import React from 'react';
import { products } from '../data/products';
import { Link } from 'wouter';

export function AppleIdManagement() {
  // Group products by Apple ID
  const productsByAppleId = products.reduce((acc, product) => {
    if (product.appleId) {
      if (!acc[product.appleId]) {
        acc[product.appleId] = [];
      }
      acc[product.appleId].push(product);
    }
    return acc;
  }, {} as Record<string, typeof products>);

  // Get all unique Apple IDs sorted
  const appleIds = Object.keys(productsByAppleId).sort();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-3">
          Manage Your Apple ID
        </h1>
        <p className="text-xl text-[#86868b] mb-16">
          Overview of all Apple IDs and their associated devices
        </p>

        {appleIds.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#86868b]">No Apple IDs found in your products.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {appleIds.map((appleId) => {
              const appleIdProducts = productsByAppleId[appleId];
              return (
                <div key={appleId} className="border-t border-[#d2d2d7] pt-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                      {appleId}
                    </h2>
                    <p className="text-sm text-[#86868b]">
                      {appleIdProducts.length} {appleIdProducts.length === 1 ? 'device' : 'devices'}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {appleIdProducts.map((product) => (
                      <Link 
                        key={product.id} 
                        href={`/product/${product.id}`}
                        className="group"
                      >
                        <div className="flex flex-col">
                          <div className="aspect-square mb-3 overflow-hidden rounded-xl bg-white">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="font-semibold text-[#1d1d1f] text-sm mb-1 group-hover:text-[#0066cc] transition-colors">
                            {product.name}
                          </h3>
                          {product.specs && (
                            <p className="text-xs text-[#86868b] mb-1">
                              {product.specs}
                            </p>
                          )}
                          {product.purchaseDate && (
                            <p className="text-xs text-[#86868b]">
                              {product.purchaseDate}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/">
            <a className="text-[#0066cc] hover:underline text-sm">← Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}