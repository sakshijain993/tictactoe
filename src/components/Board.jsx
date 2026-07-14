import Confetti from "react-confetti";
import Square from './Square';
import { useState ,useEffect } from "react";
import WinningLine from './WinningLine';



function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
        ];
        for(let i = 0; i< lines.length; i++ ){
            const[a,b,c] = lines[i];

            if(
                squares[a]&&
                squares[a] === squares[b]&&
                squares[a] === squares[c]
            ){
                return {
                    winner:squares[a],
                    line:[a,b,c],
                };
            }
        }
        return null;
}
function Board() {
    const[squares , setSquares] = useState(Array(9).fill(""));
    const[isXNext, setIsXNext] = useState(true);
    const[xScore,setXScore] = useState(0);
    const[oScore,setOScore] = useState(0);
    const[drawScore , setDrawScore] = useState(0);
    const { innerWidth: width, innerHeight: height } = window;
    const winnerInfo = calculateWinner(squares);
    const [showConfetti, setShowConfetti] = useState(false);
    
    
    
    const winner = winnerInfo?.winner;
    const winningLine = winnerInfo?.line;
    const isDraw = !winner && squares.every((square) => square !== "");

    useEffect(() => {
        if(winner === "X"){
            setXScore((prev)=>prev+1);
             setShowConfetti(true);
            
         }
         else if(winner ==="O"){
            setOScore((prev) => prev+1);
             setShowConfetti(true);
            
         }
         else if(isDraw){
            setDrawScore((prev) => prev+1);
           
         }
    },[winner,isDraw]);

    useEffect(() => {

    if(showConfetti){

        const timer = setTimeout(()=>{
            setShowConfetti(false);
        },5000);

        return () => clearTimeout(timer);
    }

},[showConfetti]);

    function handleClick(index){
        // Agar square already filled hai to kuch mat karo
        if (winner || isDraw || squares[index] !== "") {
            return;
        }

        // Array ki copy banao
        const nextSquares =[...squares];

        // X ya O store karo
        nextSquares[index] = isXNext ? "X" : "O";

       

         // State update karo
         setSquares(nextSquares);

         // Turn change karo
         setIsXNext(!isXNext);
        
    }
     function resetGame(){
            setSquares(Array(9).fill(""));
            setIsXNext(true);
             setShowConfetti(false);
        }

         function resetScore(){
        setXScore(0);
        setOScore(0);
        setDrawScore(0);
    }

    

    

  return (
    <>
      {showConfetti && (
     <>   
    
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
    numberOfPieces={500}
    recycle={false}
    gravity={0.2}
  />
  <div className="absolute top-4 left-6 text-yellow-300 text-4xl animate-bounce">✨</div>

    <div className="absolute top-10 right-8 text-pink-400 text-3xl animate-ping">⭐</div>

    <div className="absolute bottom-6 left-10 text-cyan-300 text-4xl animate-bounce">✨</div>

    <div className="absolute bottom-8 right-6 text-yellow-300 text-3xl animate-ping">⭐</div>
    </>
  
      )}

       <div className={`relative z-10 flex flex-col lg:flex-row gap-10 items-center
  bg-white/10 backdrop-blur-2xl border border-cyan-400/20
  rounded-[35px] p-10 overflow-hidden transition-all duration-500
  ${
    winner
      ? "animate-pulse shadow-[0_0_80px_rgba(34,211,238,0.8)] scale-105"
      : "shadow-[0_0_50px_rgba(0,255,255,0.15)]"
  }`}
>
       <div className="absolute -top-24 -left-24 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl"></div>

       <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl"></div> 
        <div className="flex flex-col items-center">

     <div className="mb-6">
  <div className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25)]">

    <h2 className= "text-3xl font-extrabold text-white text-center animate-pulse">

      {winner ? (
        <>
          🏆 Winner :
          <span
            className={
              winner === "X"
                ? " text-cyan-400 ml-2"
                : " text-pink-400 ml-2"
            }
          >
            {winner}
          </span>
        </>
      ) : isDraw ? (
        <span className="text-yellow-300">
          🤝 Match Draw!
        </span>
      ) : (
        <>
          🎮 Next Turn :
          <span
            className={
              isXNext
                ? " text-cyan-400 ml-2"
                : " text-pink-400 ml-2"
            }
          >
            {isXNext ? "X" : "O"}
          </span>
        </>
      )}

    </h2>

  </div>
</div>

   
    <div className="relative p-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
    <div className='grid grid-cols-3 gap-3'>
       {squares.map((value, index) => (
  <Square
    key={index}
    value={value}
    onSquareClick={() => handleClick(index)}
    isWinning={winningLine?.includes(index)}
  />
))}

     
    </div>
    {winningLine && <WinningLine line={winningLine}/>}
    </div>
     <button
    onClick={resetGame}
    className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-[0_0_25px_rgba(34,211,238,0.6)]
    hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,1)] active:scale-95 transition-all duration-300"
>
    🔄 New Game
</button>

    
    
    </div>

    <div className='bg-slate-800/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6 w-64 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105
     hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
     transition-all
     duration-300'>

        <h2 className='text-3xl font-bold text-cyan-300 text-center mb-6 tracking-wider'>
            Score Board
        </h2>

        <div className='space-y-5 text-xl text-white font-semibold'>
        <p  className="text-cyan-300 text-2xl">❌ X : {xScore}</p>
        <p  className="text-pink-300 text-2xl">⭕ O : {oScore}</p>
        <p  className="text-yellow-300 text-2xl">🤝 Draw : {drawScore}</p>
        </div>

        <button

    onClick={resetScore}
    className="mt-8 w-full py-3 rounded-xl
    bg-gradient-to-r from-pink-500 to-red-500
    text-white font-bold text-lg
    shadow-[0_0_25px_rgba(236,72,153,0.6)]
    hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,1)]
    active:scale-95
    transition-all duration-300"
>
    🗑 Reset Score
</button>

    </div>

    

    </div>
    </>
  );
}

export default Board;