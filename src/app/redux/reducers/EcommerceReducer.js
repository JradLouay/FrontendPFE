import {
  GET_PRODUCT_LIST,
  SET_SELECTED_CLIENT,
  DELETE_CLIENT,
  GET_CART_LIST,
  GET_VARIABLES_LIST,
  DELETE_VARIABLE,
  UPDATE_VARIABLE,
  ADD_VARIABLE,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_CART,
  UPDATE_CART_AMOUNT,
  GET_CATEGORY_LIST,
  GET_RATING_LIST,
  GET_BRAND_LIST
} from "../actions/EcommerceActions";

const initialState = {
  productList: [],
  cartList: [],
  variablesList: [],
  selectedClient : {}
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
    case DELETE_CLIENT: {  // delete client REDUCER 
      
      return {
        ...state,
        productList: [...action.payload]
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
