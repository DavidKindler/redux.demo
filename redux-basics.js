const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return { ...state, counter: state.counter + 1 };
      break;
    case 'ADD_COUNTER':
      return { ...state, counter: state.counter + action.payload };
      break;
  }
  return state;
};
// Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
  console.log('subscription', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', payload: 5 });
// console.log(store.getState());
