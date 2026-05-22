import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'wouter';
import { Product } from '../data/products';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Taller aspect ratio on mobile for better image display
  const gridClasses = 'col-span-1 aspect-[2/3] md:aspect-[3/4]';

  return (
    <Link href={`/product/${product.id}`} className={`block ${gridClasses}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative w-full h-full flex flex-col overflow-hidden rounded-[28px] bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
        >
          {product.purchaseDate && (
            <div className="absolute top-3 md:top-6 right-3 md:right-6 z-20 bg-gray-100/80 backdrop-blur-sm px-2.5 py-0.5 md:px-3 md:py-1 rounded-full">
              <p className="text-[9px] md:text-[10px] font-medium text-gray-500 uppercase tracking-wide">
                Since {product.purchaseDate}
              </p>
            </div>
          )}

          <div className="w-full p-3 md:p-8 pb-1 md:pb-0 z-10 flex flex-col items-center text-center">
            <p className="text-[#78c0ff] text-[9px] md:text-xs font-semibold tracking-wide uppercase mb-0.5 md:mb-2">
              {product.category}
            </p>
            <h3 className="text-lg md:text-3xl lg:text-4xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              {product.name}
            </h3>
            <p className="mt-0.5 md:mt-2 text-xs md:text-lg text-[#1d1d1f] font-medium">
              {product.description}
            </p>
            <div className="mt-1.5 md:mt-4 mb-2 md:mb-6 flex items-center justify-center gap-4 text-[#0066cc]">
              <span className="text-[11px] md:text-sm lg:text-base hover:underline flex items-center gap-0.5 md:gap-1">
                Learn more <ChevronRight className="w-2.5 h-2.5 md:w-4 md:h-4" />
              </span>
            </div>
          </div>

          <div className="flex-1 relative w-full h-full overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
    </Link>
  );
}