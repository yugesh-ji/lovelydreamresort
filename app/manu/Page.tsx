"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Coffee, 
  Soup, 
  UtensilsCrossed, 
  Flame, 
  ChefHat, 
  IceCream, 
  MapPin, 
  Phone, 
  Instagram,
  Bowl,
  Utensils
} from 'lucide-react';

// Full Menu Data Extracted from Lovely Dream Resort PDF
const menuData = [
  {
    category: "Welcome Drinks",
    icon: <Coffee className="w-5 h-5" />,
    imageKeyword: "drink,beverage",
    [span_0](start_span)//[span_0](end_span)
    items: [
      { name: "Packaged Water", price: 20 }, { name: "Tea", price: 25 },
      { name: "Coffee", price: 40 }, { name: "Lemon Tea", price: 20 },
      { name: "Jal Jeera", price: 40 }, { name: "Cold Drink", price: 40 },
      { name: "Mazza", price: 40 }, { name: "Fresh Lime Soda", price: 60 },
      { name: "Mojito", price: 100 }, { name: "Cold Coffee", price: 90 },
      { name: "Choco Shake", price: 90 }, { name: "Milk Shake", price: 80 },
      { name: "Lassi", price: 80 }, { name: "Butter Milk", price: 50 },
    ]
  },
  {
    category: "Veg Soups",
    icon: <Soup className="w-5 h-5" />,
    imageKeyword: "soup,vegetarian",
    [span_1](start_span)//[span_1](end_span)
    items: [
      { name: "Veg Hot & Sour Soup", price: 90 }, { name: "Veg Manchow Soup", price: 95 },
      { name: "Tomato Soup", price: 90 }, { name: "Veg Sweetcorn Soup", price: 100 },
      { name: "Veg Clear Soup", price: 110 }, { name: "Veg Lemon Coriander Soup", price: 120 },
    ]
  },
  {
    category: "Non-Veg Soups",
    icon: <Soup className="w-5 h-5" />,
    imageKeyword: "chickensoup,broth",
    [span_2](start_span)//[span_2](end_span)
    items: [
      { name: "Chicken Hot & Sour Soup", price: 130 }, { name: "Chicken Manchow Soup", price: 135 },
      { name: "Chicken Sweet Corn Soup", price: 140 }, { name: "Chicken Clear Soup", price: 120 },
      { name: "Chicken Lemon Coriander Soup", price: 140 },
    ]
  },
  {
    category: "Veg Starters",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    imageKeyword: "appetizer,paneer",
    [span_3](start_span)//[span_3](end_span)
    items: [
      { name: "Veg Pakoda (8 Pcs)", price: 180 }, { name: "Honey Chilli Potato", price: 170 },
      { name: "Crispy Chilli Baby Corn", price: 210 }, { name: "Chilli Paneer Dry", price: 220 },
      { name: "Mushroom Chilli", price: 230 }, { name: "French Fry", price: 120 },
      { name: "Paneer 65", price: 230 }, { name: "Paneer Pakoda", price: 190 },
    ]
  },
  {
    category: "Non-Veg Starters",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    imageKeyword: "friedchicken,snack",
    [span_4](start_span)//[span_4](end_span)
    items: [
      { name: "Chicken Pakoda (6 Pcs)", price: 220 }, { name: "Crispy Chicken", price: 230 },
      { name: "Chicken Lollipop (4 Pcs)", price: 220 }, { name: "Chicken Bunbun (8 Pcs)", price: 250 },
      { name: "Chicken 65 (8 Pcs)", price: 240 }, { name: "Chicken Chilli Dry (8 Pcs)", price: 230 },
    ]
  },
  {
    category: "Tandoori Veg",
    icon: <Flame className="w-5 h-5" />,
    imageKeyword: "tandoori,paneertikka",
    [span_5](start_span)//[span_5](end_span)
    items: [
      { name: "Paneer Tikka", price: 240 }, { name: "Veg Harabhara Kabab", price: 200 },
      { name: "Veg Seek Kabab", price: 210 }, { name: "Paneer Hariyali Tikka", price: 230 },
      { name: "Mushroom Tikka", price: 190 }, { name: "Paneer Banjara", price: 250 },
      { name: "Baby Corn Tikka (10 Pcs)", price: 280 }, { name: "Paneer Cheese Tikka", price: 270 },
      { name: "Mushroom Stuffed Tikka (10 Pcs)", price: 260 },
    ]
  },
  {
    category: "Tandoori (Non-Veg)",
    icon: <Flame className="w-5 h-5" />,
    imageKeyword: "tandoorichicken,kebab",
    [span_6](start_span)//[span_6](end_span)
    items: [
      { name: "Tandoori Chicken (Half)", price: 280 }, { name: "Tandoori Chicken (Full)", price: 550 },
      { name: "Chicken Tikka (8 Pcs)", price: 270 }, { name: "Chicken Reshmi Kabab", price: 280 },
      { name: "Chicken Hariyali Tikka", price: 260 }, { name: "Chicken Leg Kabab (2 Pcs)", price: 260 },
      { name: "Chicken Banjara (8 Pcs)", price: 280 }, { name: "Chicken Angara", price: 290 },
      { name: "Chicken Pahadi", price: 290 }, { name: "Chicken Lahsuni/Adrkhi (8 Pcs)", price: 340 },
      { name: "Chicken Afghani Tikka", price: 290 }, { name: "Chicken Sikk Kabab", price: 270 },
      { name: "Chicken Afghani", price: 600 }, { name: "Chicken Stuffing Kabab (04 Pcs)", price: 370 },
      { name: "Mutton Sik Kabab", price: 350 },
    ]
  },
  {
    category: "Main Course (Veg)",
    icon: <ChefHat className="w-5 h-5" />,
    imageKeyword: "curry,paneer",
    [span_7](start_span)//[span_7](end_span)
    items: [
      { name: "Palak Paneer", price: 210 }, { name: "Paneer Pasinda", price: 250 },
      { name: "Paneer Panjabi", price: 260 }, { name: "Paneer Kadhai", price: 250 },
      { name: "Paneer B. Masala", price: 240 }, { name: "Paneer Do Pyaza", price: 240 },
      { name: "Matar Paneer", price: 200 }, { name: "Paneer Tikka Masala", price: 260 },
      { name: "Shahi Paneer", price: 280 }, { name: "Paneer Handi", price: 240 },
      { name: "Mushroom Masala", price: 220 }, { name: "Mushroom Kadhai", price: 240 },
      { name: "Mushroom Do Pyaza", price: 230 }, { name: "Matar Mushroom", price: 210 },
      { name: "Mix Veg", price: 180 }, { name: "Veg Jhal Frazy", price: 180 },
      { name: "Veg Dil Ruba", price: 220 }, { name: "Paneer Chat Pata", price: 240 },
      { name: "Seasonal Veg", price: 160 },
    ]
  },
  {
    category: "Mutton (04 Pcs)",
    icon: <ChefHat className="w-5 h-5" />,
    imageKeyword: "muttoncurry,meat",
    [span_8](start_span)//[span_8](end_span)
    items: [
      { name: "Mutton Curry", price: 360 }, { name: "Mutton Masala", price: 410 },
      { name: "Mutton Rogan Josh", price: 400 }, { name: "Mutton Bhuna", price: 430 },
      { name: "Mutton Handi", price: 580 },
    ]
  },
  {
    category: "Main Course (Non-Veg)",
    icon: <ChefHat className="w-5 h-5" />,
    imageKeyword: "chickencurry,indianfood",
    [span_9](start_span)//[span_9](end_span)
    items: [
      { name: "Chicken Patiyala", price: 290 }, { name: "Chicken Masala", price: 260 },
      { name: "Chicken Butter Masala", price: 290 }, { name: "Punjabi Chicken", price: 280 },
      { name: "Chicken Curry", price: 240 }, { name: "Chicken Kassa", price: 260 },
      { name: "Chicken Rara Masala", price: 290 }, { name: "Chicken Tikka Masala", price: 280 },
      { name: "Chicken Do Pyaza", price: 245 }, { name: "Chicken Handi", price: 370 },
      { name: "Chicken Kadahi", price: 270 }, { name: "Chicken Shalimar", price: 320 },
      { name: "Murg Mushalam", price: 850 },
    ]
  },
  {
    category: "Veg Noodles",
    icon: <Utensils className="w-5 h-5" />,
    imageKeyword: "noodles,chowmein",
    [span_10](start_span)//[span_10](end_span)
    items: [
      { name: "Veg Gravy Noodles", price: 150 }, { name: "Pan Fried Noodles", price: 160 },
      { name: "Paneer Noodles", price: 170 }, { name: "Veg Hakka Noodles", price: 160 },
      { name: "Chilli Garlic Noodles", price: 180 }, { name: "Schezwan Noodles", price: 160 },
    ]
  },
  {
    category: "Non-Veg Noodles",
    icon: <Utensils className="w-5 h-5" />,
    imageKeyword: "chickennoodles,chowmein",
    [span_11](start_span)//[span_11](end_span)
    items: [
      { name: "Egg Noodles", price: 180 }, { name: "Chicken Noodles", price: 190 },
      { name: "Chicken Hakka Noodles", price: 170 }, { name: "Chicken Garlic Noodles", price: 210 },
      { name: "Chicken Schezwan Noodles", price: 220 }, { name: "Chicken Gravy Noodles", price: 220 },
    ]
  },
  {
    category: "Veg-Rice",
    icon: <Bowl className="w-5 h-5" />,
    imageKeyword: "friedrice,pulao",
    [span_12](start_span)//[span_12](end_span)
    items: [
      { name: "Steam Rice", price: 80 }, { name: "Jeera Rice", price: 110 },
      { name: "Veg Fried Rice", price: 120 }, { name: "Schezwan Rice", price: 130 },
      { name: "Veg Pulaw", price: 160 }, { name: "Matar Pulaw", price: 140 },
      { name: "Veg Biryani", price: 160 }, { name: "Mix Fried Rice", price: 140 },
    ]
  },
  {
    category: "Non-Veg Rice",
    icon: <Bowl className="w-5 h-5" />,
    imageKeyword: "biryani,chickenrice",
    [span_13](start_span)//[span_13](end_span)
    items: [
      { name: "Chicken Biryani", price: 190 }, { name: "Chicken Fried Rice", price: 180 },
      { name: "Egg Biryani", price: 180 }, { name: "Chicken Schezwan Fried Rice", price: 200 },
      { name: "Egg Fried Rice", price: 140 },
    ]
  },
  {
    category: "Daal",
    icon: <Soup className="w-5 h-5" />,
    imageKeyword: "dal,lentils",
    [span_14](start_span)//[span_14](end_span)
    items: [
      { name: "Dal Fry", price: 110 }, { name: "Dal Tadka", price: 130 },
      { name: "Dal Makhani", price: 170 }, { name: "Dal Mughlai (Non-Veg)", price: 190 },
      { name: "Dal Plain", price: 100 },
    ]
  },
  {
    category: "Bread",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    imageKeyword: "naan,roti",
    [span_15](start_span)//[span_15](end_span)
    items: [
      { name: "Tandoori Roti", price: 20 }, { name: "B Tandoori Roti", price: 25 },
      { name: "Naan Roti", price: 40 }, { name: "Butter Naan Roti", price: 45 },
      { name: "Lachha Paratha", price: 60 }, { name: "Masala Kulcha", price: 80 },
      { name: "Garlic Naan", price: 70 }, { name: "Cheese Naan", price: 80 },
      { name: "Aloo Paratha", price: 60 }, { name: "Paneer Paratha", price: 80 },
      { name: "Satoo Paratha", price: 60 },
    ]
  },
  {
    category: "Dessert",
    icon: <IceCream className="w-5 h-5" />,
    imageKeyword: "icecream,dessert",
    [span_16](start_span)//[span_16](end_span)
    items: [
      { name: "Vanilla Ice-Cream", price: 50 }, { name: "Chocolate Ice-Cream", price: 60 },
      { name: "Butter Scotch Ice-Cream", price: 70 }, { name: "Strawberry Ice-Cream", price: 50 },
    ]
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800 pb-20">
      
      {/* Hero Section */}
      <header className="bg-amber-600 text-white pt-16 pb-10 px-6 rounded-b-[40px] shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-3"
          >
            Lovely Dream Resort
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-100 mb-6 text-lg"
          >
            A Taste of Perfection in Every Bite
          </motion.p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
            <span className="flex items-center justify-center gap-2 bg-amber-700/50 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" /> 8797550731, 9162273455
            </span>
            <span className="flex items-center justify-center gap-2 bg-amber-700/50 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" /> Near Patanwa Govt Polytechnic College, Indrapuri
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8">
        
        {/* Sticky Category Navigation */}
        <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-md shadow-sm rounded-full p-2 mb-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max">
            {menuData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category.category
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-transparent text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {category.icon}
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {menuData
                .find((c) => c.category === activeCategory)
                ?.items.map((item, index) => {
                  
                  // Generates a random image based on the category keyword and index to ensure uniqueness per item
                  const categoryKeyword = menuData.find(c => c.category === activeCategory)?.imageKeyword || "food";
                  const imageUrl = `https://loremflickr.com/400/300/${categoryKeyword}?lock=${index + 1}`;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="flex items-center bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100 gap-4 overflow-hidden"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-neutral-100">
                        <img 
                          src={imageUrl} 
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center gap-2">
                          <h3 className="font-bold text-lg text-neutral-800 truncate">{item.name}</h3>
                          <div className="font-black text-amber-600 text-xl whitespace-nowrap">
                            ₹{item.price}
                          </div>
                        </div>
                        <div className="w-full border-b border-dashed border-neutral-300 mt-3"></div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer / Socials */}
      <footer className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <a 
          href="https://instagram.com/lovelydreamresort" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 hover:bg-amber-100 transition-colors px-6 py-3 rounded-full cursor-pointer"
        >
          <Instagram className="w-5 h-5" />
          <span>Follow us @lovelydreamresort</span>
        </a>
        [span_17](start_span)<p className="mt-4 text-sm text-neutral-400">Support and get up to 5% off[span_17](end_span)!</p>
      </footer>
    </div>
  );
}
