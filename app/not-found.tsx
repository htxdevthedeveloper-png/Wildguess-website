import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
