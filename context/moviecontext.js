import createDataContext from './createContext';

const history = [];

const movieReducer = (state, action) => {
 
  switch (action.type) {
    case 'ADD_HISTORY':
        if(state.find(title=>title==action.payload)==undefined){
            return [...state,action.payload].reverse()
        }else{
            return state
        }
   
    default:
      return state;
  }
};
//action

const addHistory = dispatch => {
  return (search) => {
      console.log(search)
    dispatch({type: 'ADD_HISTORY', payload: search});
  };
};

export const {Context, Provide} = createDataContext(
  movieReducer,
  {addHistory},
  history,
);
