import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components';

const RockPaperScissors = () => {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [computerChoice, setComputerChoice] = useState('');
  const [userSelection, setUserSelection] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  const [bgColor, setbgColor] = useState('white');
  const [tie, setTie] = useState(null);
  
  const NiceImage = styled.img`
    margin: 5%;
    max-height: 300px;
    max-width: 25%;
    border-radius: 50%;
  `
  const ResultsCard = styled.div`
    margin: 10px;
    border-radius: 15px;
    background-color: ${bgColor};
    border: 1px solid black;
  `
  const ScoreCard = styled.div`
    margin: 10px;
    border-radius: 15px;
    border: 1px solid black;
  `

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
    setTie(null)
    setUserSelection(choice);
    setComputerSelection(computerChoice);

    if (choice === 'Rock' && computerChoice ==="Scissors"){
      setWins(wins + 1);
      setbgColor('green')
      resetUserChoice();
    } else if (choice === 'Scissors' && computerChoice ==="Paper") {
      setWins(wins + 1);
      setbgColor('green')
      resetUserChoice();
    } else if (choice === 'Paper' && computerChoice ==="Rock") {
      setWins(wins + 1);
      setbgColor('green')
      resetUserChoice();
    } else if (choice === computerChoice) {
      setbgColor('yellow')
      resetUserChoice();
      setTie(true)
    } else {
      setLosses(losses + 1)
      setbgColor('red')
      resetUserChoice();
    }
  };

  return(
    <div>
      <div>
        <h1>Rock, Paper, Scissors</h1>
        <h3>Please Make a Selection</h3>
        <NiceImage src="https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {paper}/>
        <NiceImage src="https://images.pexels.com/photos/133372/pexels-photo-133372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {rock}/>
        <NiceImage src="https://images.pexels.com/photos/3990146/pexels-photo-3990146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {scissors}/>
        <p>Choice: {choice}</p>
        <button onClick = {handleSubmit}>Submit Choice</button>
      </div>
      <ResultsCard>
        <h3>Results: {tie && <p>Tie!</p>}</h3>
        <p>Player Selection: {userSelection}</p>
        <p>Computer Selection: {computerSelection}</p>
      </ResultsCard>
      <ScoreCard>
        <h3>ScoreCard</h3>
        <p>Wins: {wins}</p>
        <p>Lossses: {losses}</p>
      </ScoreCard>
    </div>
  );
};

export default RockPaperScissors;
