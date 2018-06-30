import React, { Component } from 'react';
import { updateForm} from '../actions/actionTypes';


class Step3 extends Component {
  onPreviousClick=()=>{
    const {dispatch}=this.props;
    dispatch(updateForm(true,false,false,this.props.user))
  }
  onClick=()=>{
  let inputs = [...document.getElementsByTagName('input')];
  let emptyField = inputs.filter(item=>{
      return item.value=="";
  })
  inputs.forEach(item=>{
    item.style.border='1px solid green'
  })
  if (emptyField.length==0) {
    let user_data = this.props.user;
    let isNotOk=inputs.some(item=>{
      if (item.name === "form_creditCard_number" && !/^\d{16}$/.test(item.value)) {
        console.log('Incorrect Field');
        item.style.border='1px solid red';
        return true;
        console.log('barev');
      }else if (item.name === "form_creditCard_name" && !isNaN(item.value.trim())) {
        console.log('Incorrect Field');
        item.style.border='1px solid red';
        return true;
        console.log('barev');
      }else if (item.name === "form_creditCard_cvc" && !/^\d{3,4}$/.test(item.value)) {
        console.log('Incorrect Field');
        item.style.border='1px solid red';
        return true;
        console.log('barev');
      }else if (item.name === "form_creditCard_expiration_date" && !/^\d{2}\/\d{2}$/.test(item.value)) {
        console.log('Incorrect Field');
        item.style.border='1px solid red';
        return true;
        console.log('barev');
      }
      user_data[item.name]=item.value;
    })
    if(isNotOk) {
      alert('Incorrect Field')
      return;
    }
    const {dispatch} = this.props;
    dispatch(updateForm(true,true,true,user_data))
    }else {
      ///////////////////////
      alert("Please Fill Required Fields ");
      emptyField.forEach(item=>{
        item.style.border="2px solid red"
        return
      })
      //////////////////////
    }

  }

  render() {
    console.log(this.props);
    return (

      <fieldset>
          <div className="form-top">
            <div className="form-top-left">
              <h3>Step 3 / 3</h3>
                <p>Credit Card:</p>
            </div>
            <div className="form-top-right">
              <i className="fa fa-twitter"></i>
            </div>
            </div>
            <div className="form-bottom">
          <div className="form-group">
            <h3 className="sr-only" >Credit Card Number</h3>
              <input type="text" name="form_creditCard_number" placeholder="Credit Card Number..." className="form-creditCard-number form-control" id="form_creditCard_number"/>
            </div>
            <div className="form-group">
              <h3 className="sr-only" >Credit Card Name</h3>
              <input type="text" name="form_creditCard_name" placeholder="Credit Card Name..." className="form_creditCard_number form-control" id="form_creditCard_number"/>
            </div>
            <div className="form-group">
              <h3 className="sr-only">Credit Card cvc</h3>
              <input type="text" name="form_creditCard_cvc" placeholder="Credit Card cvc" className="form_creditCard_cvc form-control" id="form_creditCard_cvc"/>
            </div>
            <div className="form-group">
              <h3 className="sr-only">Credit Card expiration date</h3>
              <input type="text" name="form_creditCard_expiration_date" placeholder="Credit Card expiration date" className="form_creditCard_expiration_date form-control" id="form_creditCard_expiration_date"/>
            </div>
            <button type="button" className="btn btn-previous" onClick={this.onPreviousClick.bind(this)}>Previous</button>
            <button type="button" className="btn" onClick={this.onClick.bind(this)}>Sign me up!</button>
        </div>
      </fieldset>

    );
  }
}

export default Step3;
