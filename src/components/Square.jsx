

function Square({value , onSquareClick }) {
    
    return(
        <button 
        onClick={onSquareClick}
        className="h-24 w-24 border-2 border-gray-400 bg-white text-black text-4xl font-bold hover:bg-gray-100 transition">
        {value}

        </button>

    );
}
export default Square;