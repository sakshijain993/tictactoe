

function Square({value , onSquareClick , isWinning}) {
    
    return(
        <button 
        onClick={onSquareClick}
       className={`h-24 w-24 rounded-2xl border-2 text-4xl font-bold
       flex items-center justify-center
        transition-all duration-300
   ${
    isWinning
  ? "bg-yellow-400/20 border-yellow-300 text-yellow-300 scale-110 shadow-[0_0_35px_rgba(250,204,21,1)] animate-pulse"
  : "bg-slate-800/80 border-slate-600 text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95"
    }`}
            >

        <span
      className={
      value === "X"
      ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
      : value === "O"
      ? "text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
      : ""
    }
   >
  {value}
</span>

        </button>

    );
}
export default Square;