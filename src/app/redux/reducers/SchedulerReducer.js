import {
  
    GET_SCHEDULER_LIST, // scheduler
    ADD_SCHEDULER,
    DELETE_SCHEDULER,
    OPEN_SNACK_SUCCESS,
    OPEN_SNACK_ERROR,
    SET_OPERATION 
  } from "../actions/SchedulerActions";
  
  const initialState = {
    schedulerList : [],
    operation:"",
    openSnackSuccess: false,
    openSnackError: false
  };
  
  const SchedulerReducer = function(state = initialState, action) {
    switch (action.type) { 

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
      case GET_SCHEDULER_LIST: {  // get variables REDUCER 
        
        return {
          ...state,
          schedulerList: [...action.payload]
        };
      }
      case ADD_SCHEDULER: {  // get variables REDUCER 
        
        return {
          ...state,
          schedulerList: [...action.payload]
        };
      }
      case DELETE_SCHEDULER: {  // delete variables REDUCER 
        
        return {
          ...state,
          schedulerList: [...action.payload]
        };
      }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default SchedulerReducer;
  