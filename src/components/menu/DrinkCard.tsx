import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Sparkles } from 'lucide-react';
import { type Drink } from './types';

interface DrinkCardProps {
  drink: Drink;
  onSelect: (drink: Drink) => void;
}

export function DrinkCard({ drink, onSelect }: DrinkCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(drink)}
      className="relative rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className="aspect-[4/3] relative">
        {/* Background Image */}
        <img
          src={drink.image}
          alt={drink.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {drink.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 text-yellow-400" />
                <span className="text-xs font-medium text-white">Popular</span>
              </motion.div>
            )}
            {drink.popularity && (
              <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80">
                {drink.popularity}% ordering
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#9D5CFF] group-hover:to-[#FF3B7F] transition-all duration-500">
                {drink.name}
              </h3>
              <p className="text-sm text-white/70 line-clamp-2 group-hover:text-white/90 transition-colors duration-500">
                {drink.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg font-bold bg-gradient-to-r from-[#9D5CFF] to-[#FF3B7F] text-transparent bg-clip-text">
                ${drink.price}
              </p>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Implement like functionality
                  }}
                >
                  <Heart className="w-4 h-4 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Implement share functionality
                  }}
                >
                  <Share2 className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}