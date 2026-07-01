import Header from "./components/Header";
import Board from "./components/Board";



function App(){
  return(
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
    <Header/>
    <Board />
    </div>

  );
}
export default App;