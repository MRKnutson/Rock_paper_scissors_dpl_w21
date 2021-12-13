import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return(
    <Links>
      <BigLink to="/RPS">Rock, Paper, Scissors - Single Player</BigLink>
      <BigLink to="/RPS">Rock, Paper, Scissors - Two Player</BigLink>
      <BigLink to="/RPS">useReducer CRUD</BigLink>
    </Links>
  );
};

const BigLink = styled(Link)`
  color: white;
  font-size: 3rem;
  text-decoration: none;
  margin: 45px;
  padding: 25px;
  border-radius: 25px;
  background-color: black;
  display: flex;
  justify-content: center;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Home;