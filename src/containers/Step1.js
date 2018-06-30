import { connect } from 'react-redux'
import Step1 from '../components/Step1'

const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  step2_succeed:state.Form.step2_succeed,
  step3_succeed:state.Form.step3_succeed,
  user:state.Form.user,
})

 const Step1Container = connect(mapStateToProps
)(Step1)

export default Step1Container
