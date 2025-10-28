
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center px-4">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-24 drop-shadow-xl hover:scale-110 transition-transform duration-300" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-24 drop-shadow-xl hover:scale-110 transition-transform duration-300 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
        Vite <span className="text-blue-400">+</span> <span className="text-cyan-400">React</span>
      </h1>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center w-full max-w-md mb-8 border border-white/20">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-8 py-3 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          count is {count}
        </button>
        <p className="text-white/80">
          Edit <code className="bg-black/30 px-2 py-1 rounded text-pink-200">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-white/60 text-sm">
        Click on the Vite and React logos to learn more
      </p>
      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default App
