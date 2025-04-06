'use client';

import { useEffect, useState } from 'react';
import { Cake, Heart, Stars, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    setShowWish(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showWish ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center shadow-2xl"
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <Cake className="w-12 h-12 text-pink-500" />
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Happy Birthday Anushka! 🎉
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            May your day be filled with joy, laughter, and unforgettable moments!
          </p>

          <div className="flex justify-center gap-4 py-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <PartyPopper className="w-8 h-8 text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              <Stars className="w-8 h-8 text-purple-500" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.6,
              }}
            >
              <Heart className="w-8 h-8 text-red-500" />
            </motion.div>
          </div>

          <div className="space-y-4 text-lg text-gray-700">
            <p>Wishing you::</p>
            <ul className="space-y-2">
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center gap-2"
              >
                <span>✨</span> A year full of achievements
              </motion.li>
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-2"
              >
                <span>💫</span> Endless happiness and success
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center justify-center gap-2"
              >
                <span>🌟</span> All your dreams come true
              </motion.li>
            </ul>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="pt-6"
          >
            <p className="text-xl text-gray-600 italic">
              May this special day bring you as much joy as you bring to others!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}