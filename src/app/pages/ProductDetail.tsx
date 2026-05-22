import React from 'react';
import { useRoute, Link } from 'wouter';
import { products } from '../data/products';
import { ChevronLeft, Calendar, Cpu, HardDrive, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const product = products.find(p => p.id === params?.id);

  if (!product) {
    return <div className="pt-32 text-center">Product not found</div>;
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Sticky sub-nav for back button */}
      <div className="sticky top-12 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center">
          <Link href="/" className="text-sm text-[#0066cc] hover:underline flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> Back to Store
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[40px] overflow-hidden bg-[#f5f5f7] aspect-square md:aspect-[4/5] shadow-sm"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8 pt-4"
          >
            <div>
              <p className="text-[#78c0ff] font-semibold text-sm uppercase tracking-wide mb-2">
                {product.category} Collection
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-2xl text-[#1d1d1f] leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            <div className="w-full h-px bg-gray-200" />

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-[#0066cc]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Specifications</h3>
                  <p className="text-gray-600 mt-1">{product.specs || 'Standard configuration'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-full text-[#78c0ff]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ownership</h3>
                  <p className="text-gray-600 mt-1">
                    Purchased in <span className="font-medium text-gray-900">{product.purchaseDate}</span>
                  </p>
                </div>
              </div>
              
               <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-full text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Status</h3>
                  <p className="text-gray-600 mt-1">
                    Active in your ecosystem
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200" />
            
            {product.appleId && (
              <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
                  <p className="text-sm text-gray-500 mb-3">Linked Apple ID</p>
                  <div className="font-medium text-lg text-gray-800">
                      {product.appleId}
                  </div>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
}