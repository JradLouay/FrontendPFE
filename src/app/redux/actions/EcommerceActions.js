import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"; // getclients 
export const SET_SELECTED_CLIENT = "SET_SELECTED_CLIENT"; // set client for the InfoDiag
export const DELETE_CLIENT ="DELETE_CLIENT";  // delete client
export const GET_VARIABLES_LIST ="GET_VARIABLES_LIST";  // getVariables mit der client ID 
export const DELETE_VARIABLE ="DELETE_VARIABLE";  // getVariables mit der client ID 
export const UPDATE_VARIABLE = "UPDATE_VARIABLE"; // updateVariable mit der client ID und die var ID auch 
export const ADD_VARIABLE = "ADD_VARIABLE"; // Add a new variable  

export const GET_CART_LIST = "GET_CART_LIST";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_RATING_LIST = "GET_RATING_LIST";
export const GET_BRAND_LIST = "GET_BRAND_LIST";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";


// -----------------------------------------START--------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getProductList = () => dispatch => {
  axios.get("/api/ecommerce/get-product-list").then(res => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data
    });
  });
};

export const setSelectedClient = (selectedClient) => {
      console.log('[setSelectedClient] ', selectedClient);
      
      return {
        type: SET_SELECTED_CLIENT,
        payload: selectedClient
      };
};

export const deleteClient = (clientId) => dispatch => {

  console.log('[deleteClient] ', clientId);
  axios
    .post("/api/ecommerce/delete-client", { clientId })
    .then(res => {
      dispatch({
        type: DELETE_CLIENT,
        payload: res.data
      });
    });
};
// ---------------------------------------------END----------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getCategoryList = () => dispatch => {
  axios.get("/api/ecommerce/get-category-list").then(res => {
    dispatch({
      type: GET_CATEGORY_LIST,
      payload: res.data
    });
  });
};

export const getRatingList = () => dispatch => {
  axios.get("/api/ecommerce/get-rating-list").then(res => {
    dispatch({
      type: GET_RATING_LIST,
      payload: res.data
    });
  });
};

export const getBrandList = () => dispatch => {
  axios.get("/api/ecommerce/get-brand-list").then(res => {
    dispatch({
      type: GET_BRAND_LIST,
      payload: res.data
    });
  });
};

export const getCartList = uid => dispatch => {
  axios.get("/api/ecommerce/get-cart-list", { data: uid }).then(res => {
    dispatch({
      type: GET_CART_LIST,
      payload: res.data
    });
  });
};
// -------------------------------------------START------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getVariablesList = cid => dispatch => { // get list of vars mit die cid auf ein client
  
  console.log('[getVariablesList] ', cid);

  axios.get("/api/ecommerce/get-var-list", { data: cid }).then(res => {
    dispatch({
      type: GET_VARIABLES_LIST,
      payload: res.data
    });
  });
};
export const deleteVariable = (varId, cid ) => dispatch => { //delete variable 
  
  console.log('[DeleteVariables] ', varId, cid);
  axios
    .post("/api/ecommerce/delete-var", { varId, cid})
    .then(res => {
      dispatch({
        type: DELETE_VARIABLE,
        payload: res.data
      });
    });
};
export const updateVariable = (varId, cid, newData) => dispatch => { //delete variable 
  
  console.log('[updateVariable] ', varId, cid, newData);
  axios
    .post("/api/ecommerce/update-var", { varId, cid, newData })
    .then(res => {
      dispatch({
        type: UPDATE_VARIABLE,
        payload: res.data
      });
    });
};

export const addVariable = (cid, newData) => dispatch => { //delete variable 
  
  console.log('[addVariable] ',cid, newData);
  axios
    .post("/api/ecommerce/add-var", { cid, newData })
    .then(res => {
      dispatch({
        type: ADD_VARIABLE,
        payload: res.data
      });
    });
};
// -----------------------------------------------END--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const addProductToCart = (uid, productId) => dispatch => {
  axios.post("/api/ecommerce/add-to-cart", { uid, productId }).then(res => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data
    });
  });
};

export const deleteProductFromCart = (uid, productId) => dispatch => {
  axios
    .post("/api/ecommerce/delete-from-cart", { uid, productId })
    .then(res => {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: res.data
      });
    });
};


export const updateCartAmount = (uid, productId, amount) => dispatch => {
  console.log('update  cart amount ');
  
  axios
    .post("/api/ecommerce/update-cart-amount", { uid, productId, amount })
    .then(res => {
      dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: res.data
      });
    });
};
