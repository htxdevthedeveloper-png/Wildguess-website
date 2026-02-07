'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PORTAL_PASSWORD = 'wildguess2026';

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if already authenticated in session storage
    const auth = sessionStorage.getItem('portal_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PORTAL_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('portal_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Try again.');
      setPassword('');
    }
  };

  if (!mounted) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-2 text-white">Operator Portal</h1>
            <p className="text-slate-400 text-center mb-8">Strategy guides and team documentation</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter portal password"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition"
              >
                Access Portal
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <Link href="/" className="text-slate-400 hover:text-emerald-400 text-sm transition">
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">🔐 Operator Portal</h1>
          <button
            onClick={() => {
              sessionStorage.removeItem('portal_auth');
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Strategy Documentation</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Executive Summary',
                description: 'High-level overview of WildGuess project, business model, and implementation timeline.',
                file: 'WILDGUESS-EXECUTIVE-SUMMARY.md',
                icon: '📋',
              },
              {
                title: 'Architecture Guide',
                description: 'Complete technical architecture, system design, database schema, and API specifications.',
                file: 'wildguess-architecture.md',
                icon: '🏗️',
              },
              {
                title: 'Design System',
                description: 'Mobile app interface design following Apple HIG, screen specifications, and component library.',
                file: 'wildguess-design.md',
                icon: '🎨',
              },
              {
                title: 'AI Integration',
                description: 'AI image and text generation strategy, animal database design, and cost optimization.',
                file: 'wildguess-ai-integration.md',
                icon: '🤖',
              },
              {
                title: 'ASO Strategy',
                description: 'App Store Optimization, keyword research, pre-launch strategy, and growth tactics.',
                file: 'wildguess-aso-strategy.md',
                icon: '📱',
              },
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-400/50 transition"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                <p className="text-slate-400 mb-4">{doc.description}</p>
                <a
                  href={`/docs/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition"
                >
                  View Document →
                </a>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Total Documentation', value: '5 Guides' },
                { label: 'Pages', value: '130+' },
                { label: 'Sections', value: '50+' },
                { label: 'Last Updated', value: 'Feb 2026' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/50 rounded-lg">
            <p className="text-blue-300">
              <strong>Note:</strong> All documentation is stored locally in your project. To share with team members, download the markdown files and distribute securely.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
