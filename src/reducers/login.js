import { LOGIN_OK } from '../actions';
import { strgify } from '../services/tools';

let defaultState = {};

export default function processLoginOk(state = defaultState, action) {

  switch (action.type) {
    case LOGIN_OK:
      console.log('LOGIN_OK done');
      let newstate = Object.assign({}, state, action.value );
      // console.log("newstate reducer", strgify(newstate));
      return newstate;
    default:
      return state;
  }
}
