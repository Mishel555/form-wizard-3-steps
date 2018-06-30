import { connect } from 'react-redux'
import Step3 from '../components/Step3'
// Nothink changed:)))
const mapStateToProps = (state) => ({
  step1_succeed:state.Form.step1_succeed,
  step2_succeed:state.Form.step2_succeed,
  step3_succeed:state.Form.step3_succeed,
  user:state.Form.user,
})

 const Step3Container = connect(mapStateToProps
)(Step3)

export default Step3Container;
