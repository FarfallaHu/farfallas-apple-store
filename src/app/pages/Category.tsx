import React from 'react';
import { useRoute } from 'wouter';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export function Category() {
  const [match, params] = useRoute("/category/:name");
  const categoryName = params?.name;

  // Map URL param to Data category (simple mapping)
  // URL might be 'mac', data is 'Mac'. 
  // We'll do a case-insensitive comparison or a map.
  
  const categoryMap: Record<string, string> = {
    'mac': 'Mac',
    'iphone': 'iPhone',
    'ipad': 'iPad',
    'watch': 'Watch',
    'airpods': 'Audio',
    'accessories': 'Accessories'
  };

  // Display name mapping for better UI
  const displayNameMap: Record<string, string> = {
    'Mac': 'Mac',
    'iPhone': 'iPhone',
    'iPad': 'iPad',
    'Watch': 'Watch',
    'Audio': 'AirPods',
    'Accessories': 'Accessories'
  };

  const targetCategory = categoryName ? categoryMap[categoryName.toLowerCase()] : null;

  const filteredProducts = products.filter(p => p.category === targetCategory);

  if (!targetCategory) {
    return <div className="pt-32 text-center">Category not found</div>;
  }

  const displayName = targetCategory ? displayNameMap[targetCategory] : targetCategory;

  return (
    <div className="pt-24 min-h-screen bg-[#f5f5f7]">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold text-[#1d1d1f]"
        >
          {displayName}
        </motion.h1>
        <p className="mt-4 text-xl text-gray-500">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} in your collection
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}