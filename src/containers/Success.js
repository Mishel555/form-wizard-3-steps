import { connect } from 'react-redux'
import Success from '../components/Success'



const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  step2_succeed:state.Form.step2_succeed,
  step3_succeed:state.Form.step3_succeed,
  user:state.Form.user,
})

 const SuccessContainer = connect(mapStateToProps
)(Success)

export default SuccessContainer
