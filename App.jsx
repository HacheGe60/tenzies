import { useState } from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }));
  }

  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} />);

  function rollDice() {
    setDice(generateAllNewDice());
  }

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  );
}