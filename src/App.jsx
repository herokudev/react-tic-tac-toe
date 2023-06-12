import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1>Tic-tac-toe game</h1>
      <Square index="0" />
      <Square index="1" />
      <Square index="2" />
      <Square index="3" />
      <Square index="4" />
      <Square index="5" />
      <Square index="6" />
      <Square index="7" />
      <Square index="8" />
    </>
  );
}

export default App;
