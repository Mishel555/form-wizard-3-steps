const Form = (state = {
      step1_succeed: false,
      step2_succeed: false,
      step3_succeed: false,
      user: {}
}, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {...state,step1_succeed:action.step1_succeed, step2_succeed:action.step2_succeed,step3_succeed:action.step3_succeed,user:action.user};
    default:
      return state;
  }
}
export default Form;
