import React, { Component } from 'react';
import {updateForm} from '../actions/actionTypes';
// import Loading from './Loading'


class Step1 extends Component {

onClick=()=>{
let inputs = [...document.getElementsByTagName('input')];
let emptyField = inputs.filter(item=>{
    return item.name!="form-adress2-name" && item.value=="";

})
inputs.forEach(item=>{
  item.style.border='1px solid green'
})
if (emptyField.length==0) {
  let user_data = {};
  let isNotOk = inputs.some(item=>{
    if (item.name === "form_first_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }else if (item.name === "form_last_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }else if (item.name == "form_county_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }else if (item.name == "form_city_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }else if (item.name == "form_adress_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }else if (item.name == "form_adress2_name" && !isNaN(item.value.trim())) {
      console.log('Incorrect Field');
      item.style.border='1px solid red';
      return true;
      console.log('barev');
    }
    user_data[item.name]=item.value;
  });
  if(isNotOk) {
    alert('Incorrect Field')
    return;
  }
  user_data['legal']=document.getElementsByTagName('select')[0].value
  const {dispatch} = this.props;
  dispatch(updateForm(true,false,false,user_data))

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
    if (!this.props.user) {
      return null;
    }
    console.log(this.props.user.form_first_name);
      // value={this.props.user.['form-adress-name'] || ''}
      // value={this.props.user.form_first_name || ''}
    return (
      <fieldset >
        <div className="form-top">
          <div className="form-top-left">
            <h3>Step 1 / 3</h3>
              <p>Tell us who you are:</p>
          </div>
          <div className="form-top-right">
            <i className="fa fa-user"></i>
          </div>
          </div>
          <div className="form-bottom">
        <div className="form-group">
            <h3>First Name</h3>
            <input type="text" name="form_first_name" defaultValue={this.props.user.form_first_name || ''} className="form-first-name form-control" id="form-first-name"/>
          </div>
          <div className="form-group">
            <h3>Last Name</h3>
            <input type="text" name="form_last_name"  className="form-last-name form-control" id="form-last-name"/>
          </div>
          <div className="form-group">
            <h3>Country</h3>
            <input type="text" name="form_county_name"  className="form-country-name form-control" id="form-country-name"/>
          </div>
          <div className="form-group">
            <h3>City</h3>
            <input type="text" name="form-city-name"  className="form-city-name form-control" id="form-city-name"/>
          </div>
          <div className="form-group">
            <h3>Adress</h3>
            <input type="text" name="form-adress-name"  className="form-adress-name form-control" id="form-Adress-name"/>
          </div>
          <div className="form-group">
            <h3>Adress2</h3>
            <input type="text" name="form-adress2-name"  className="form-adress2-name form-control" id="form-Adress2-name"/>
          </div>
          <div className="form-group">
            <p>Legal</p>
            <select name='legal'>
              <option>Company</option>
              <option>Individual</option>
            </select>
          </div>
          <button type="button" onClick={this.onClick.bind(this)} className="btn btn-next" id='next'>Next</button>
      </div>
      </fieldset>
    )
  }
}

export default Step1;
