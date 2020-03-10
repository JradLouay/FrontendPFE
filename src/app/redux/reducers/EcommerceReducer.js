import {
  GET_PRODUCT_LIST,///START_CLIENT/////////
  SET_SELECTED_CLIENT,
  SET_GLOBAL_CLIENT,
  DELETE_CLIENT,
  SET_CLIENT_TO_ADD,
  ADD_CLIENT,
  GET_VARIABLES_LIST,//END_CLIENT///START_VAR/////////
  DELETE_VARIABLE,
  UPDATE_VARIABLE,
  ADD_VARIABLE, ////////END_VAR///////////
  GET_MODULES_LIST,/////////START_MODULES
  GET_CLIENT_MODULES,
  GET_CART_LIST,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  UPDATE_CART_AMOUNT,
  GET_CATEGORY_LIST,
  GET_RATING_LIST,
  GET_BRAND_LIST
} from "../actions/EcommerceActions";

const initialState = {
  productList: [],
  variablesList: [],
  selectedClient : {},
  clientToAdd : {},
  globalClient:{},
  modulesList : [],
  clientModules:[],
  cartList: [],// out of the bi3 a
};

const EcommerceReducer = function(state = initialState, action) {
  switch (action.type) { 
    case GET_PRODUCT_LIST: {  // get client list 
      return {
        ...state,
        productList: [...action.payload]
      };
    }
    case SET_SELECTED_CLIENT: { //set client reducer 
      
      return {
        ...state,
        selectedClient: {...action.payload}
      };
    }
    case SET_GLOBAL_CLIENT: { //set client reducer 
      
      return {
        ...state,
        globalClient: {...action.payload}
      };
    }
    case DELETE_CLIENT: {  // delete client REDUCER 
      
      return {
        ...state,
        productList: [...action.payload]
      };
    }
    case SET_CLIENT_TO_ADD: { //set client reducer 
      
      return {
        ...state,
        clientToAdd: {...action.payload},
      };
    }
    case ADD_CLIENT: {  // delete client REDUCER 
      
      return {
        ...state,
        productList: [...action.payload[0]],
        selectedClient: {...action.payload[1]}
      };
    }
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
    case GET_MODULES_LIST: {  // get modules list 
      return {
        ...state,
        modulesList: [...action.payload]
      };
    }
    case GET_CLIENT_MODULES: {  // get client modules list 
      return {
        ...state,
        clientModules: [...action.payload]
      };
    }
    case GET_CATEGORY_LIST: {
      return {
        ...state,
        categoryList: [...action.payload]
      };
    }
    case GET_RATING_LIST: {
      return {
        ...state,
        ratingList: [...action.payload]
      };
    }
    case GET_BRAND_LIST: {
      return {
        ...state,
        brandList: [...action.payload]
      };
    }
    case GET_CART_LIST: {
      return {
        ...state,
        cartList: [...action.payload]
      };
    }
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cartList: [...action.payload]
      };
    }
    case DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cartList: [...action.payload]
      };
    }
    case UPDATE_CART_AMOUNT: {
      return {
        ...state,
        cartList: [...action.payload]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default EcommerceReducer;
