import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  return (
    <section className="w-full bg-[#f5f5f7] px-4 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
