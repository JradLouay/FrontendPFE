import {
    GET_PRODUCT_LIST,///START_CLIENT/////////
    SET_SELECTED_CLIENT,
    SET_GLOBAL_CLIENT,
    DELETE_CLIENT,
    SET_CLIENT_TO_ADD,
    ADD_CLIENT,
    TEST_CLIENT_TO_ADD
  } from "../actions/ClientActions";
  
  const initialState = {
    productList: [],
    selectedClient : {},
    clientToAdd : {},
    globalClient:{},
    infoTest: null
    
  };
  
  const ClientReducer = function(state = initialState, action) {

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

      case TEST_CLIENT_TO_ADD: { //set client reducer 
        return {
          ...state,
          infoTest: action.payload,
        };
      }
      case ADD_CLIENT: {  // delete client REDUCER 
        
        return {
          ...state,
          productList: [...action.payload[0]],
          selectedClient: {...action.payload[1]}
        };
      }
      default: {
        return {
          ...state
        };
      }
    }
  };
  
  export default ClientReducer;
  