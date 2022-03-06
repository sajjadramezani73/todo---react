import React, { createContext, useContext, useReducer } from "react";

var TodosStateContext = createContext();
var TodosDispatchContext = createContext();

function todosReducer(state, action) {
  switch (action.type) {
    case "SET_TODO_LIST":
      return { ...state, todos: action.payload };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TodosProvider({ children }) {
  var [state, dispatch] = useReducer(todosReducer, {
    todos: [],
  });
  return (
    <TodosStateContext.Provider value={state}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
}

function useTodosState() {
  var context = useContext(TodosStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useTodosDispatch() {
  var context = useContext(TodosDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { TodosProvider, useTodosState, useTodosDispatch, setTodoList };

// ###########################################################
function setTodoList(dispatch, todo) {
  dispatch({
    type: "SET_TODO_LIST",
    payload: todo
  });
}
