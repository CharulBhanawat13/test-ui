import React from 'react';
import House from './House.js';
import {Button, ButtonToolbar} from 'react-bootstrap';

export default class Sudoku extends React.Component {
  render() {
    const trdata = [];
    for (let i=0;i<9;i++) {
      trdata.push(<House data={this.props.data[i]}/>);
    }
    return (
      <div>
        <table border="1px solid black">{trdata}</table>
        <Button onClick = {() => this.props.solveSudoku(this.props.data)}>
          Solve
        </Button>
      </div>
    );
  }
}
