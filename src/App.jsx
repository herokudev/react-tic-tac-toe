import "./App.css";
import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants.js";

const board = Array(9).fill(null);

const updateBoard = (index) => {};

const resetGame = () => {
  setBoard(Array(9).fill(null));
  setTurn(TURNS.X);
  setWinner(null);

  resetGameStorage();
};

function App() {
  return (
    <>
      <main className="board">
        <h1>Tic-tac-toe game</h1>
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </section>
        <span>X</span>
        <span>O</span>
      </main>
    </>
  );
}

export default App;
