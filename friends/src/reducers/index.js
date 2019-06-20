import combineReducer from 'redux';

const initialState = {
    friends: []
}


const combinedReducer = combineReducers({
    friends: friendssReducer
    
  });