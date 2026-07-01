
import Square from './Square';
import { useState ,useEffect } from "react";

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
                return squares[a];
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
    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every((square) => square !== "");
    useEffect(() => {
        if(winner === "X"){
            setXScore((prev)=>prev+1);
         }
         else if(winner ==="O"){
            setOScore((prev) => prev+1);
         }
         else if(isDraw){
            setDrawScore((prev) => prev+1);
         }
    },[winner,isDraw]);

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
        }

         function resetScore(){
        setXScore(0);
        setOScore(0);
        setDrawScore(0);
    }
    

  return (
    <div className='flex gap-12 items-start'>
        <div className='text-2xl flex flex-col items-center'>

    <h2 className="text-2xl font-bold text-white mb-5">

       {winner ? `winner : ${winner}`
       : isDraw
       ?"match Draw!"
       : `Next Player : ${isXNext ? "X" : "O"}`}

    </h2>

   
    
    <div className='grid grid-cols-3 gap-3'>

     <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>  
     <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>  
     <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>  

     <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
     <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>  
     <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>  

     <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>          
     <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>  
     <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>     
    </div>

    <button
        onClick={resetGame}
        className = "mt-6 px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Reset Game
    </button>

    
    
    </div>

    <div className='bg-slate-800 mt-16 p-6 rounded-xl shadow-lg w-52'>
        <h2 className='text-2xl font-bold text-white text-center mb-4'>
            Score Board
        </h2>
        <div className='space-y-4 text-xl text-white'>
        <p>❌ X : {xScore}</p>
        <p>⭕ O : {oScore}</p>
        <p>🤝 Draw : {drawScore}</p>
        </div>

         <button
        onClick={resetScore}
        className = "mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
    >
            Reset Score
    </button>

    </div>
    </div>
  );
}

export default Board;