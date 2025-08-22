import React from "react";
import Die from "./Die";




export default function App() {
  const [dice, setDice] = React.useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;

    /* return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6)) */
  }


  return <main>
    <div className="dice-container">
      {dice.map((die) => (
        <Die value={die} />
      ))}
    </div>
  </main>;
}