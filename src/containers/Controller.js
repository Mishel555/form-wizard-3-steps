import { connect } from 'react-redux'
import Controller from '../components/Controller'



const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  step2_succeed:state.Form.step2_succeed,
  step3_succeed:state.Form.step3_succeed,
  user:state.Form.user,
})

 const ControllerContainer = connect(mapStateToProps
)(Controller)

export default ControllerContainer
