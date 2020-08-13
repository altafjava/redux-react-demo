import React from 'react';
import { connect } from 'react-redux';
import { buyBiscuit } from '../redux';

function BiscuitContainer(props) {
  return (
    <div>
      <h2>No of Biscuit - {props.noOfBiscuit}</h2>
      <button onClick={props.buyBiscuit}>Buy Biscuit</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfBiscuit: state.biscuit.noOfBiscuit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyBiscuit: () => dispatch(buyBiscuit()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BiscuitContainer);
