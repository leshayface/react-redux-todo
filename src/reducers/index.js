import {combinedReducers} from 'redux';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      state = state.concat(action.payload);
      break;
    case 'DELETE_TASK':
      state = state.slice();
      state.splice(action.payload,1);
      break;
  }
  return state;
},
reducers = combinedReducers ({
  tasks:tasksReducer
});

export default reducers;
