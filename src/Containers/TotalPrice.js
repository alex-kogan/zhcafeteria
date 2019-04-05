import {connect} from 'react-redux';

import TotalPrice from '../Components/TotalPrice/TotalPrice';
import {priceSubmit, priceReset} from '../Actions'

const mapStateToProps = (state) => {
  return {
  	totalPrice: state.priceMenu.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	submitPrice: () => dispatch(priceSubmit()),
  	resetPrice: () => dispatch(priceReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalPrice);