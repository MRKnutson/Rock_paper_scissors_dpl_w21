import React, { useEffect, useReducer, useState } from 'react'

const RockPaperScissors = () => {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [computerChoice, setComputerChoice] = useState('');
  const [userSelection, setUserSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');

  const RPSReducer = (state, action) => {
    switch (action.choice) {
      case 'ROCK':
        return 'Rock'
      case 'PAPER':
        return 'Paper'
      case 'SCISSORS':
        return 'Scissors'
      case 'RESET':
        return ''
      default:
        return ''
    }
  };

  const [choice, choiceDispatch] = useReducer(RPSReducer, '');

  const rock = () => {
    choiceDispatch({choice: "ROCK"})
  };
  const paper = () => {
    choiceDispatch({choice: "PAPER"})
  };
  const scissors = () => {
    choiceDispatch({choice: "SCISSORS"})
  };
  const resetUserChoice = () => {
    choiceDispatch({choice: "RESET"})
  };

  useEffect(()=>{
    let options = ['Rock', 'Paper', 'Scissors'];
    setComputerChoice(options[Math.floor(Math.random() * options.length)])
  }, [choice])

  const handleSubmit = ()=>{
    setUserSelection(choice);
    setComputerSelection(computerChoice);

    if (choice === computerChoice){
      setWins(wins + 1);
      resetUserChoice();
    } else {
      setLosses(losses + 1)
      resetUserChoice();
    }
  };

  return(
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h3>Please Make a Selection</h3>
      <button onClick = {rock}>Rock</button>
      <hr />
      <button onClick = {paper}>Paper</button>
      <hr />
      <button onClick = {scissors}>Scissors</button>
      <hr />
      <p>Choice: {choice}</p>
      <p>Computer Choice: {computerChoice}</p>
      <button onClick = {handleSubmit}>Submit Choice</button>
      <hr />
      <h3>Results:</h3>
      <p>Player Selection: {userSelection}</p>
      <p>Computer Selection: {computerSelection}</p>
      <hr />
      <h3>ScoreCard</h3>
      <p>Wins: {wins}</p>
      <p>Lossses: {losses}</p>
    </div>
  );
};

export default RockPaperScissors;