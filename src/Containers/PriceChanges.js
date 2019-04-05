import {connect} from 'react-redux';

import PriceCard from '../Components/PriceMenu/PriceCard';

import {priceIncrease, priceDecrease} from '../Actions'

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlusClick: (value) => dispatch(priceIncrease(value)),
    onMinusClick: (value) => dispatch(priceDecrease(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceCard);