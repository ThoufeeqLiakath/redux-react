import { v1 as uuidv1 } from 'uuid';
import { createStore,compose } from 'redux';
import reducer from './reducer';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  

export const state = {
    notes: [
        {
            id: uuidv1(),
            title:"Default Title",
            description: "This is the initial state messaage"
        },
        {
            id: uuidv1(),
            title:"Title 2",
            description: "description for title 2"
        }
    ]
};

//store
const store = createStore(reducer, state, composeEnhancers());

export default store;

