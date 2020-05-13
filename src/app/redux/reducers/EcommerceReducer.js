import {
  // GET_PRODUCT_LIST,///START_CLIENT/////////
  // SET_SELECTED_CLIENT,
  // SET_GLOBAL_CLIENT,
  // DELETE_CLIENT,
  // SET_CLIENT_TO_ADD,
  // ADD_CLIENT,
  // GET_VARIABLES_LIST,//END_CLIENT///START_VAR/////////
  // DELETE_VARIABLE,
  // UPDATE_VARIABLE,
  // ADD_VARIABLE, ////////END_VAR///////////
  // GET_MODULES_LIST,/////////START_MODULES
  // SET_SELECTED_MODULE,
  // DELETE_MODULE,
  // ADD_MODULE,
  // GET_CLIENT_MODULES,
  // GET_FILTRED_MODULES,
  // ADD_MODULE_TO_CLIENT,
  // DELETE_CLIENT_MODULE,
  // GET_USERS_LIST,
  // DELETE_USER,
  // ADD_USER,
  // UPDATE_USER,
  // SET_SELECTED_USER,
  // GET_SCHEDULER_LIST, // scheduler
  // ADD_SCHEDULER,
  // DELETE_SCHEDULER,
  GET_CART_LIST,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  UPDATE_CART_AMOUNT,
  GET_CATEGORY_LIST,
  GET_RATING_LIST,
  GET_BRAND_LIST
} from "../actions/EcommerceActions";

const initialState = {
  // productList: [],
  // variablesList: [],
  // selectedClient : {},
  // clientToAdd : {},
  // globalClient:{},
  // modulesList : [],
  // schedulerList : [],
  // selectedModule: {},
  // clientModules:[],
  // filtredModulesList:[],
  // selectedUser: {},
  // usersList: [],
  // cartList: [],// out of the bi3 a
};

const EcommerceReducer = function(state = initialState, action) {
  switch (action.type) { 

    // case GET_PRODUCT_LIST: {  // get client list 
    //   return {
    //     ...state,
    //     productList: [...action.payload]
    //   };
    // }
    // case SET_SELECTED_CLIENT: { //set client reducer 
      
    //   return {
    //     ...state,
    //     selectedClient: {...action.payload}
    //   };
    // }
    // case SET_GLOBAL_CLIENT: { //set client reducer 
      
    //   return {
    //     ...state,
    //     globalClient: {...action.payload}
    //   };
    // }
    // case DELETE_CLIENT: {  // delete client REDUCER 
      
    //   return {
    //     ...state,
    //     productList: [...action.payload]
    //   };
    // }
    // case SET_CLIENT_TO_ADD: { //set client reducer 
      
    //   return {
    //     ...state,
    //     clientToAdd: {...action.payload},
    //   };
    // }
    // case ADD_CLIENT: {  // delete client REDUCER 
      
    //   return {
    //     ...state,
    //     productList: [...action.payload[0]],
    //     selectedClient: {...action.payload[1]}
    //   };
    // }
    // case GET_VARIABLES_LIST: {  // get variables REDUCER 
      
    //   return {
    //     ...state,
    //     variablesList: [...action.payload]
    //   };
    // }
    // case DELETE_VARIABLE: {  // delete variables REDUCER 
      
    //   return {
    //     ...state,
    //     variablesList: [...action.payload]
    //   };
    // }
    // case UPDATE_VARIABLE: {  // update variables REDUCER 
      
    //   return {
    //     ...state,
    //     variablesList: [...action.payload]
    //   };
    // }
    // case ADD_VARIABLE: {  // Add variable REDUCER 
      
    //   return {
    //     ...state,
    //     variablesList: [...action.payload]
    //   };
    // }
    // case GET_MODULES_LIST: {  // get modules list 
    //   return {
    //     ...state,
    //     modulesList: [...action.payload]
    //   };
    // }
    // case GET_USERS_LIST: {  // get modules list 
    //   return {
    //     ...state,
    //     usersList: [...action.payload]
    //   };
    // }
    // case SET_SELECTED_MODULE: {  // get modules list 
    //   return {
    //     ...state,
    //     selectedModule: {...action.payload}
    //   };
    // }
    // case SET_SELECTED_USER: {  // get modules list 
    //   return {
    //     ...state,
    //     selectedUser: {...action.payload}
    //   };
    // }
    // case DELETE_MODULE: {  // get modules list 
    //   return {
    //     ...state,
    //     modulesList: [...action.payload]
    //   };
    // }
    // case DELETE_USER: {  // get modules list 
    //   return {
    //     ...state,
    //     usersList: [...action.payload]
    //   };
    // }
    // case ADD_MODULE: {  // get modules list 
    //   return {
    //     ...state,
    //     modulesList: [...action.payload]
    //   };
    // }
    // case ADD_USER: {  // get modules list 
    //   return {
    //     ...state,
    //     usersList: [...action.payload]
    //   };
    // }
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
    // case GET_SCHEDULER_LIST: {  // get variables REDUCER 
      
    //   return {
    //     ...state,
    //     schedulerList: [...action.payload]
    //   };
    // }
    // case ADD_SCHEDULER: {  // get variables REDUCER 
      
    //   return {
    //     ...state,
    //     schedulerList: [...action.payload]
    //   };
    // }
    // case DELETE_SCHEDULER: {  // delete variables REDUCER 
      
    //   return {
    //     ...state,
    //     schedulerList: [...action.payload]
    //   };
    // }
    // case GET_CATEGORY_LIST: {
    //   return {
    //     ...state,
    //     categoryList: [...action.payload]
    //   };
    // }
    // case GET_RATING_LIST: {
    //   return {
    //     ...state,
    //     ratingList: [...action.payload]
    //   };
    // }
    // case GET_BRAND_LIST: {
    //   return {
    //     ...state,
    //     brandList: [...action.payload]
    //   };
    // }
    // case GET_CART_LIST: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    // case ADD_PRODUCT_TO_CART: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    // case DELETE_PRODUCT_FROM_CART: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    // case UPDATE_CART_AMOUNT: {
    //   return {
    //     ...state,
    //     cartList: [...action.payload]
    //   };
    // }
    default: {
      return {
        ...state
      };
    }
  }
};

export default EcommerceReducer;
