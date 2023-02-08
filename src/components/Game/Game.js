import React, { useState } from 'react';
import GuessForm from '../GuessForm/GuessForm';
import Results from '../Results/Results';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameBanner from '../GameBanner/GameBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <div className='game-wrapper'>
      <Results guesses={guesses} answer={answer} />
      <GuessForm gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus !== 'running' && (
        <GameBanner gameStatus={gameStatus} numOfGuesses={guesses.length} answer={answer} />
      )}
    </div>
  );
}

export default Game;
