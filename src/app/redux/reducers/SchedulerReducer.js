import {
  
    GET_SCHEDULER_LIST, // scheduler
    ADD_SCHEDULER,
    DELETE_SCHEDULER,
    
  } from "../actions/SchedulerActions";
  
  const initialState = {
    schedulerList : [],
  };
  
  const SchedulerReducer = function(state = initialState, action) {
    switch (action.type) { 
  
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
  