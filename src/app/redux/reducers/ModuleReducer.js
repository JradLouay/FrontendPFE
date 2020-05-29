import {
    GET_MODULES_LIST,/////////START_MODULES
    GET_FILE,
    SET_FILE,
    SET_SELECTED_MODULE,
    DELETE_MODULE,
    ADD_MODULE,
    // GET_CLIENT_MODULES,
    // GET_FILTRED_MODULES,
    // ADD_MODULE_TO_CLIENT,
    // DELETE_CLIENT_MODULE,
    OPEN_ADD_SNACK_SUCCESS,
    OPEN_ADD_SNACK_ERROR,
    SET_OPERATION 
  } from "../actions/ModuleActions";
  
  const initialState = {
    modulesList : [],
    selectedModule: {},
    yaml : "",
    clientModules:[],
    filtredModulesList:[],
    operation:"",
    openSnackSuccessAdd: false,
    openSnackErrorAdd: false,
  };
  
  const ModuleReducer = function(state = initialState, action) {
    switch (action.type) { 
  
      case GET_MODULES_LIST: {  // get modules list 
        return {
          ...state,
          modulesList: [...action.payload]
        };
      }
      case GET_FILE: {  // get modules list 
        return {
          ...state,
          yaml: action.payload
        };
      }
      case SET_FILE: {  // get modules list 
        return {
          ...state,
          yaml: action.payload
        };
      }
      case SET_SELECTED_MODULE: {  // get modules list 
        return {
          ...state,
          selectedModule: {...action.payload}
        };
      }
      case DELETE_MODULE: {  // get modules list 
        return {
          ...state,
          modulesList: [...action.payload]
        };
      }
      case ADD_MODULE: {  // get modules list 
        return {
          ...state,
          modulesList: [...action.payload]
        };
      }
      case SET_OPERATION: {   
        return {
          ...state,
          operation: action.payload
        };
      }
      case OPEN_ADD_SNACK_SUCCESS: {   
        return {
          ...state,
          openSnackSuccessAdd: action.payload
        };
      }
      case OPEN_ADD_SNACK_ERROR: {   
        return {
          ...state,
          openSnackErrorAdd: action.payload
        };
      }
      // case GET_CLIENT_MODULES: {  // get client modules list 
      //   return {
      //     ...state,
      //     clientModules: [...action.payload]
      //   };
      // }
      // case GET_FILTRED_MODULES: {  // get modules list 
      //   return {
      //     ...state,
      //     filtredModulesList: [...action.payload]
      //   };
      // }
      // case ADD_MODULE_TO_CLIENT: {  // Add module to a client  
        
      //   return {
      //     ...state,
      //     clientModules: [...action.payload]
      //   };
      // }
      // case DELETE_CLIENT_MODULE: {  // Add module to a client  
        
      //   return {
      //     ...state,
      //     clientModules: [...action.payload]
      //   };
      // }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default ModuleReducer;
  