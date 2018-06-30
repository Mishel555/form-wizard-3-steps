export const setDefaultForm = () => ({
  type:'SET_DEFAULT_FORM',
  step1_succeed:false,
  step2_succeed:false,
  step3_succeed:false,
  user:{}
})

export const updateForm = (step1_succeed,step2_succeed,step3_succeed,user) => ({
  type:'UPDATE_FORM',
  step1_succeed,
  step2_succeed,
  step3_succeed,
  user
})
