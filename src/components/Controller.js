import React from 'react';
import {setDefaultForm, updateForm} from '../actions/actionTypes';
import Step1 from '../containers/Step1'
import Step2 from '../containers/Step2'
import Step3 from '../containers/Step3'
import Success from '../containers/Success'



  function Controller(props) {

  if (!props.step1_succeed && !props.step2_succeed && !props.step3_succeed) {
    return (
      <div>
        <Step1 />
      </div>
    )
  }else if (props.step1_succeed && !props.step2_succeed && !props.step3_succeed) {
    return (
      <div>
        <Step2 />
      </div>
    )
  }else if (props.step1_succeed && props.step2_succeed && !props.step3_succeed) {
    return (
      <div>
        <Step3 />
      </div>
    )
  }else if (props.step1_succeed && props.step2_succeed && props.step3_succeed) {
    return (
      <div>
        <Success />
      </div>
    )
  }

}

export default Controller
