import {
    GET_VARIABLES_LIST,//END_CLIENT///START_VAR/////////
    DELETE_VARIABLE,
    UPDATE_VARIABLE,
    ADD_VARIABLE, ////////END_VAR/////////// 
  } from "../actions/VariableActions";
  
  const initialState = {
    variablesList: [],
  };
  
  const VariableReducer = function(state = initialState, action) {
    switch (action.type) { 
  
      case GET_VARIABLES_LIST: {  // get variables REDUCER 
        
        return {
          ...state,
          variablesList: [...action.payload]
        };
      }
      case DELETE_VARIABLE: {  // delete variables REDUCER 
        
        return {
          ...state,
          variablesList: [...action.payload]
        };
      }
      case UPDATE_VARIABLE: {  // update variables REDUCER 
        
        return {
          ...state,
          variablesList: [...action.payload]
        };
      }
      case ADD_VARIABLE: {  // Add variable REDUCER 
        
        return {
          ...state,
          variablesList: [...action.payload]
        };
      }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default VariableReducer;
  