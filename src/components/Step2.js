import React, { Component } from 'react';
import {updateForm} from '../actions/actionTypes';


class Step2 extends Component {
  onNextClick=()=>{
    let inp = [...document.getElementsByTagName('input')]
    console.log(inp);
    let selected = inp.find(item => item.checked);
    if(!selected){
      alert('Please Select One');
      return
    }
    const value = selected.value;
    console.log(value);
    const {dispatch}=this.props;
    this.props.user['package']=value;
    dispatch(updateForm(true,true,false,this.props.user))
  }
  onPreviousClick=()=>{
    const {dispatch}=this.props;
    dispatch(updateForm(false,false,false,this.props.user))
  }


  render() {
    console.log(this.props);
    return (
      <fieldset>
          <div className="form-top">
            <div className="form-top-left">
              <h3>Step 2 / 3</h3>
                <p>Set up your account:</p>
            </div>
            <div className="form-top-right">
              <i className="fa fa-key"></i>
            </div>
            </div>
            <div className="form-bottom">
            <div className="form-group">
              <h3 className="sr-only" >Package</h3>

              <h3>Standart Package</h3><input type="radio" name='Package' value='Standart'/>
              <h3>Premium Package</h3><input type="radio" name='Package' value='Premium'/>
            </div>
            <button type="button" className="btn btn-previous" onClick={this.onPreviousClick.bind(this)}>Previous</button>
            <button type="button" onClick={this.onNextClick.bind(this)} className="btn btn-next">Next</button>
        </div>
      </fieldset>

    );
  }
}

export default Step2;
