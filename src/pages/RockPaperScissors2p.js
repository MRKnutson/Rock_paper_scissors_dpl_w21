import React, { useEffect, useReducer, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap';
import styled from 'styled-components';

const RockPaperScissors2p = () => {

  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  // const [computerChoice, setComputerChoice] = useState('');
  const [user1Selection, setUser1Selection] = useState('');
  const [user2Selection, setUser2Selection] = useState('');
  // const [computerSelection, setComputerSelection] = useState('');
  const [bgColor, setbgColor] = useState('white');
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [tie, setTie] = useState(null);

  const handleCloseModal1 = () =>{setShowModal1(false)};
  const handleShowModal1 = () =>{setShowModal1(true)};
  const handleCloseModal2 = () =>{setShowModal2(false)};
  const handleShowModal2 = () =>{setShowModal2(true)};
  
  const NiceImage = styled.img`
    margin: 3%;
    max-height: 300px;
    max-width: 20%;
    border-radius: 50%;
  `
  const ResultsCard = styled(Container)`
    margin-top: 25px;
    border-radius: 15px;
    background-color: ${bgColor};
    border: 1px solid black;
  `
  const Card = styled(Container)`
    margin-top: 25px;
    border-radius: 15px;
    border: 1px solid black;
  `
  const SpacedButton = styled(Button)`
    margin: 15px;
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

  const [p1Choice, p1ChoiceDispatch] = useReducer(RPSReducer, '');

  const p1rock = () => {
    p1ChoiceDispatch({choice: "ROCK"})
    handleCloseModal1()
  };
  const p1paper = () => {
    p1ChoiceDispatch({choice: "PAPER"})
    handleCloseModal1()
  };
  const p1scissors = () => {
    p1ChoiceDispatch({choice: "SCISSORS"})
    handleCloseModal1()
  };
  const p1resetUserChoice = () => {
    p1ChoiceDispatch({choice: "RESET"})
  };

  const [p2Choice, p2ChoiceDispatch] = useReducer(RPSReducer, '');

  const p2rock = () => {
    p2ChoiceDispatch({choice: "ROCK"})
    handleCloseModal2()
  };
  const p2paper = () => {
    p2ChoiceDispatch({choice: "PAPER"})
    handleCloseModal2()
  };
  const p2scissors = () => {
    p2ChoiceDispatch({choice: "SCISSORS"})
    handleCloseModal2()
  };
  const p2resetUserChoice = () => {
    p2ChoiceDispatch({choice: "RESET"})
  };


  const handleSubmit = ()=>{
    setTie(null);
    setUser1Selection(p1Choice);
    setUser2Selection(p2Choice);
    // setComputerSelection(computerChoice);
    
    if (p1Choice === 'Rock' && p2Choice ==="Scissors"){
      setWins(wins + 1);
      p1resetUserChoice()
      p2resetUserChoice()
    } else if (p1Choice === 'Paper' && p2Choice ==="Rock"){
      setWins(wins + 1);
      p1resetUserChoice()
      p2resetUserChoice()
    } else if(p1Choice === 'Scissors' && p2Choice==='Paper'){
      setWins(wins + 1);
      p1resetUserChoice()
      p2resetUserChoice()
    } else if(p1Choice === p2Choice){
      setTie(true)
      p1resetUserChoice()
      p2resetUserChoice()
    } else {
      setLosses(losses + 1)
      p1resetUserChoice()
      p2resetUserChoice()
    }
  };
  

  return(
    <div>
      <Card>
        <h1>Rock, Paper, Scissors</h1>
        <SpacedButton variant="primary" onClick={handleShowModal1}>
          Player 1 Selection
        </SpacedButton>

        <Modal show={showModal1} onHide={handleCloseModal1}>
          <Modal.Header closeButton>
            <Modal.Title>Player 1 - Please Make a Selection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NiceImage src="https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p1paper}/>
            <NiceImage src="https://images.pexels.com/photos/133372/pexels-photo-133372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p1rock}/>
            <NiceImage src="https://images.pexels.com/photos/3990146/pexels-photo-3990146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p1scissors}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal1}>
              Save Selection
            </Button>
          </Modal.Footer>
        </Modal>
        <SpacedButton variant="primary" onClick={handleShowModal2}>
          Player 2 Selection
        </SpacedButton>

        <Modal show={showModal2} onHide={handleCloseModal2}>
          <Modal.Header closeButton>
            <Modal.Title>Player 2 - Please Make a Selection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NiceImage src="https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p2paper}/>
            <NiceImage src="https://images.pexels.com/photos/133372/pexels-photo-133372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p2rock}/>
            <NiceImage src="https://images.pexels.com/photos/3990146/pexels-photo-3990146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" onClick = {p2scissors}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseModal2}>
              Save Selection
            </Button>
          </Modal.Footer>
        </Modal>

        <SpacedButton variant = "primary" onClick = {handleSubmit}>Determine Winner</SpacedButton>
      </Card>
      <ResultsCard>
        <h3>Results: {tie && <p>Tie!</p>}</h3>
        <p>Player 1 Selection: {user1Selection}</p>
        <p>Player 2 Selection: {user2Selection}</p>
      </ResultsCard>
      <Card>
        <h3>ScoreCard</h3>
        <p>Player 1 Wins: {wins}</p>
        <p>Player 2 Wins: {losses}</p>
      </Card>
    </div>
  );
};

export default RockPaperScissors2p;
