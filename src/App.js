import React from 'react';
import logo from './logo.svg';
import House from './House.js'
import Sudoku from './Sudoku.js'
import {Button} from 'react-bootstrap';
import './App.css';

function App() {
  const data = [
    [0,0,0,3,0,9,0,0,5],
    [0,4,0,0,6,1,0,3,0],
    [3,0,6,4,8,0,0,0,0],
    [0,0,2,9,0,0,0,0,0],
    [6,0,9,0,0,3,1,5,0],
    [0,1,0,0,0,0,0,0,0],
    [0,7,0,0,0,0,0,0,4],
    [0,6,0,0,0,8,0,7,0],
    [0,0,0,0,0,0,3,0,0]
  ];
  return <Sudoku data={data} solveSudoku={solveSudoku}/>;
}

function solveSudoku(data) {
  return [
    [1,2,8,3,7,9,6,4,5],
    [9,4,7,5,6,1,2,3,8],
    [3,5,6,4,8,2,7,1,9],
    [5,3,2,9,1,7,4,8,6],
    [6,8,9,2,4,3,1,5,7],
    [7,1,4,8,5,6,9,2,3],
    [2,7,1,6,3,5,8,9,4],
    [4,6,3,1,9,8,5,7,2],
    [8,9,5,7,2,4,3,6,1]
  ];
}

export default App;
