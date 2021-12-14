import React, { useReducer } from 'react'
import { Button, Container } from 'react-bootstrap';

const Players = () =>{

  const playersReducer = (state, action) =>{
    switch(action.type) {
      case "ADD":
        return [action.player, ...state];
      case "DELETE":
        return state.filter((p)=>p.id !== action.id)
      case "UPDATE":
        return state.map((p)=>p.id !== action.player.id ? p : action.player)
      default:
        return state; 
    }
  };

  const [players, dispatchPlayers] = useReducer(playersReducer, [
    {id: 1, name: 'Mike'},
    {id: 2, name: 'Troy'},
    {id: 3, name: 'Kyle'},
  ]);

  const addPlayer = () => {
    dispatchPlayers({type: 'ADD', player: {name: "New", id: Math.random()}});
  };

  const updatePlayer = (id) => {
    dispatchPlayers({type: 'UPDATE', player: {name: "Updated", id: id}})
  };

  const deletePlayer =(id) => {
    dispatchPlayers({type: 'DELETE', id: id})
  };

  const renderPlayers =()=>{
    return players.map((p)=>{
      return(
        <div>
          <h3>{p.name}</h3>
          <p>{p.id}</p>
          <Button onClick = {()=>deletePlayer(p.id)}>Delete Player</Button>
          <Button onClick = {()=>updatePlayer(p.id)}>Update Player</Button>
          <hr />
        </div>
      )
    })
  };

  return(
    <Container>
      <h1>Player:</h1>
      {renderPlayers()}
      <Button variant = "primary" onClick = {addPlayer}>Add New Player</Button>
    </Container>
  )
};

export default Players;