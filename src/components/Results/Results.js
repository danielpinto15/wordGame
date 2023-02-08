import React from "react";
import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Results({ guesses, answer }) {
  console.log('results', guesses)
  return (
    <div class="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess key={num} guessValue={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default Results;
