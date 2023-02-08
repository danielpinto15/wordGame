import React, { useState } from "react";

function GuessForm({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess })
    handleSubmitGuess(guess);
    setGuess('');
  }

  const handleOnChange = (e) => {
    let toUpperCaseGuess = e.target.value.toUpperCase()
    setGuess(toUpperCaseGuess)
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label for='input'>
        Enter guess:
        <input
          required
          disabled={gameStatus !== 'running'}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={handleOnChange}
          id='input'
          type='text' />
      </label>
    </form>);
}

export default GuessForm;
