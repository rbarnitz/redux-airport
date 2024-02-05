import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

//import logger:
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airline = (state = [], action) => {
  // Log the action
  if (action.type === 'AIRLINE_NAME') {
    console.log(`The element was ${action.payload}`);
  }
  return [...state, action.payload];
};

const planeCount = (state = 0, action) => {
  // Log the action
  console.log(`Hey!!! I'm a reducer y'all!!!`, action);

  return state;
};
/** TODO: Create store */
const storeInstance = createStore(
  combineReducers({
    airline,
    planeCount,
  }),
  applyMiddleware(logger)
);

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default storeInstance; // Export the store
