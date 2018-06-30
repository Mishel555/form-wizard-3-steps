import React, { Component } from 'react';
import {setDefaultForm, updateForm} from '../actions/actionTypes';


class Success extends Component {

  render() {
    console.log(this.props.user);
    return (
      <div>
        <h1>Congratulations !You Are Registered</h1>
      </div>
    )
  }
}

export default Success;
