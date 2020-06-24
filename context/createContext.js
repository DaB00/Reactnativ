import React, {createContext, useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();
  const Provide = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const providerAction = {};
    for (let key in actions) {
      providerAction[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{state, ...providerAction}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context,Provide}
};
