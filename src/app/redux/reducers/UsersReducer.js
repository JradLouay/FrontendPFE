import {
    DELETE_USER,
    ADD_USER,
    GET_USERS_LIST,
    UPDATE_USER,
    SET_SELECTED_USER,
    OPEN_SNACK_SUCCESS,
    OPEN_SNACK_ERROR,
    SET_OPERATION 
    } from "../actions/UsersActions";
  
  const initialState = {
    selectedUser: {},
    usersList: [],
    operation:"",
    openSnackSuccess: false,
    openSnackError: false
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
      case SET_OPERATION: {   
        return {
          ...state,
          operation: action.payload
        };
      }
      case OPEN_SNACK_SUCCESS: {   
        return {
          ...state,
          openSnackSuccess: action.payload
        };
      }
      case OPEN_SNACK_ERROR: {   
        return {
          ...state,
          openSnackError: action.payload
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
  