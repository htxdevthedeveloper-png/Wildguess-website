'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-emerald-400"
          >
            🦁 WildGuess
          </motion.div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 transition">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition">How It Works</a>
            <a href="#download" className="text-slate-300 hover:text-emerald-400 transition">Download</a>
            <Link href="/portal" className="text-slate-300 hover:text-emerald-400 transition">Portal</Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-emerald-400"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-2">
            <a href="#features" className="block text-slate-300 hover:text-emerald-400">Features</a>
            <a href="#how-it-works" className="block text-slate-300 hover:text-emerald-400">How It Works</a>
            <a href="#download" className="block text-slate-300 hover:text-emerald-400">Download</a>
            <Link href="/portal" className="block text-slate-300 hover:text-emerald-400">Portal</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Guess the Animal.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Learn Something New.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            WildGuess is an AI-powered animal guessing game that combines beautiful gameplay with wildlife education. Challenge yourself with AI-generated images and become an animal expert.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              Download on App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              Get on Google Play
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 rounded-2xl overflow-hidden border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8"
        >
          <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🦁</div>
              <p className="text-slate-400">Beautiful AI-Generated Animal Images</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Players Love WildGuess
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🎨',
                title: 'AI-Generated Images',
                description: 'Each animal is uniquely generated using advanced AI, ensuring variety and preventing memorization.',
              },
              {
                icon: '📚',
                title: 'Learn & Discover',
                description: 'Detailed information about habitat, diet, behavior, and conservation status for every animal.',
              },
              {
                icon: '🏆',
                title: 'Global Leaderboards',
                description: 'Compete with players worldwide and climb the rankings in real-time.',
              },
              {
                icon: '⭐',
                title: 'Daily Challenges',
                description: 'One curated challenge per day keeps you coming back for consistent engagement.',
              },
              {
                icon: '🎯',
                title: '500+ Animals',
                description: 'Mammals, birds, reptiles, insects, fish, and amphibians from around the world.',
              },
              {
                icon: '🔓',
                title: 'Offline Support',
                description: 'Play anytime, anywhere. No internet connection required for cached games.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-emerald-400/50 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'See', description: 'Beautiful AI-generated animal image' },
              { step: '2', title: 'Guess', description: 'Enter the animal name or species' },
              { step: '3', title: 'Learn', description: 'Get instant feedback and facts' },
              { step: '4', title: 'Compete', description: 'Earn points and climb leaderboards' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '500+', label: 'Animal Species' },
              { stat: '100K+', label: 'Active Players' },
              { stat: '4.3★', label: 'App Rating' },
              { stat: '24/7', label: 'Play Anytime' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">{item.stat}</div>
                <p className="text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Become an Animal Expert?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Download WildGuess today and start your wildlife adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              App Store
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              Google Play
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">WildGuess</h3>
              <p className="text-slate-400">AI-powered animal guessing game for wildlife enthusiasts.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-emerald-400">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400">How It Works</a></li>
                <li><a href="#download" className="hover:text-emerald-400">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400">About</a></li>
                <li><a href="#" className="hover:text-emerald-400">Blog</a></li>
                <li><Link href="/portal" className="hover:text-emerald-400">Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 WildGuess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
