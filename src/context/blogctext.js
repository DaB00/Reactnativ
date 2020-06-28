import createDataContext from './createContext';

const initialState = [
  {title: 'Blog Post #1',id:1},
  {title: 'Blog Post #2',id:2},
  {title: 'Blog Post #3',id:3},
];
const initialState2 = [
    {title: 'Blog Post #1'},
    {title: 'Blog Post #2'},
    {title: 'Blog Post #3'},
  ];

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, {title: `${action.payload}  `,id:state.length+1}];
    case 'DELETE_BLOG':
        return state.filter((data)=>data.id!=action.payload)
    case 'EDIT_BLOG':
        return state.map((data)=> data.id === action.payload.id? action.payload:data)
    default:
      return state;
  }
};
//action

const addBlog = dispatch => {
  return (title) => {
    dispatch({type: 'ADD_BLOG',payload:title});
  };
};
const deleteBlog = dispatch =>{
    return(id)=>{
        dispatch({type:'DELETE_BLOG',payload:id})
    }
}
const editBlog=dispatch=>{
    return (id,title)=>{
        dispatch({type:'EDIT_BLOG',payload:{id,title}})
    }
}
//create
export const {Context, Provide} = createDataContext(
  blogReducer,
  {addBlog,deleteBlog,editBlog},
  {initialState,initialState2},
);
