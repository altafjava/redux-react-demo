import { BUY_BISCUIT } from './biscuitTypes';

const initialState = {
  noOfBiscuit: 20,
};

const biscuitReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BISCUIT:
      return {
        ...state,
        noOfBiscuit: state.noOfBiscuit - 1,
      };

    default:
      return state;
  }
};

export default biscuitReducer;
