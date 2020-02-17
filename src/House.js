import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

export default class House extends React.Component {
  render() {
    const buttonString = "This is the text in button";
    const buttonArray = [];
    for (let i=0;i<9;i++) {
      const value = (this.props.data[i] === 0 ? ' ' : ' ' + this.props.data[i]);
      if (i!==0 && i%3 === 0) {
        buttonArray.push('|');
      }
      buttonArray.push(
        <input type="text" value={value} style={{height:'15px', width:'15px', margin: '0 0 0 0'}} variant="secondary" />
      );
    }
    return (
      <tr>
        {buttonArray}
      </tr>
    );
  }
}
