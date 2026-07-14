import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center px-6 py-8 overflow-hidden relative">

      {/* Top Left Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Floating White Dots */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full opacity-60"></div>

      <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full opacity-50"></div>

      <div className="absolute bottom-28 left-40 w-4 h-4 bg-white/70 rounded-full"></div>

      <div className="absolute bottom-16 right-56 w-2 h-2 bg-white rounded-full opacity-40"></div>

      <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-white rounded-full opacity-50"></div>

      <Header />
      <Board />

    </div>
  );
}

export default App;