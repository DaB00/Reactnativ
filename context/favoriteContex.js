import createDataContext from './createContext';

const favorite = [];

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.paylaod];
    case 'REMOVE_FAVORITE':
      return state.filter((favorit)=>favorit.id!==action.paylaod)
    default:
      return state;
  }
};
//action
const addFavorite = dispatch => {
  return data => {
    dispatch({type: 'ADD_FAVORITE', paylaod: data});
  };
};
const removeFavorite = dispatch => {
    
  return id => {
      console.log(id)
    dispatch({type: 'REMOVE_FAVORITE', paylaod: id});
  };
};
//createcontext
export const {Context, Provide} = createDataContext(
  favoriteReducer,
  {addFavorite,removeFavorite},
  favorite,
);
