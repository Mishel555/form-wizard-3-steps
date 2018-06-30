import { connect } from 'react-redux'
import Step2 from '../components/Step2'
// I still stay on my thouse thoughts that I have at countainers/Step1
const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  step2_succeed:state.Form.step2_succeed,
  step3_succeed:state.Form.step3_succeed,
  user:state.Form.user,
})

 const Step2Container = connect(mapStateToProps
)(Step2)

export default Step2Container
