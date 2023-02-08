import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from '../../utils';

function Cell({ letter, status }) {
  const classStatus = status ? `cell ${status}` : 'cell';
  return (
    <span
      className={classStatus}>
      {letter}
    </span>
  )
}

function Guess({ guessValue, answer }) {
  const result = checkGuess(guessValue, answer);
  console.log(answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
        <Cell 
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
          key={num} 
          />)
      })}
    </p>
  )
}

export default Guess;
