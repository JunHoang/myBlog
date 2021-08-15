import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addBlogPost: (dispatch) => {return () => {} }}
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    const valueContext = {
      state,
      ...boundActions,
    };

    return <Context.Provider value={valueContext}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
