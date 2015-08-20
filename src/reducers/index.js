import { combineReducers } from 'redux';
import { QUERY_ORIGIN, QUERY_DESTINATION } from '../actions';

const initialState = {
  origin: '',
  destination: '',
  results: []
};


function inputs(state = initialState, action) {
  switch (action.type) {
  case QUERY_ORIGIN:

    console.log('ORIGIN SHOULD BE ADDED!!!', action);

    return state;

  case QUERY_DESTINATION:
    console.log('DESTINATION SHOULD BE ADDED!!!', action);
    return state;

  default:
    return state;
  }
}

// One for now `inputs` ... will add more.
const rootReducer = combineReducers({
  inputs
});

export default rootReducer;