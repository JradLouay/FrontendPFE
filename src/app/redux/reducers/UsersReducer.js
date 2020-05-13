import {
    DELETE_USER,
    ADD_USER,
    GET_USERS_LIST,
    UPDATE_USER,
    SET_SELECTED_USER,
    } from "../actions/UsersActions";
  
  const initialState = {
    selectedUser: {},
    usersList: [],
  };
  
  const UsersReducer = function(state = initialState, action) {
    switch (action.type) { 
  
      case GET_USERS_LIST: {  // get modules list 
        return {
          ...state,
          usersList: [...action.payload]
        };
      }
      case SET_SELECTED_USER: {  // get modules list 
        return {
          ...state,
          selectedUser: {...action.payload}
        };
      }
      case DELETE_USER: {  // get modules list 
        return {
          ...state,
          usersList: [...action.payload]
        };
      }
      case ADD_USER: {  // get modules list 
        return {
          ...state,
          usersList: [...action.payload]
        };
      }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default UsersReducer;
  