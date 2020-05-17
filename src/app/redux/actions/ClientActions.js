import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"; // getclients 
export const SET_SELECTED_CLIENT = "SET_SELECTED_CLIENT"; // set client for the InfoDiag
export const SET_GLOBAL_CLIENT = "SET_GLOBAL_CLIENT"; // set global  client for the common part of the app 
export const DELETE_CLIENT ="DELETE_CLIENT";  // delete client
export const SET_CLIENT_TO_ADD ="SET_CLIENT_TO_ADD";  // set client to add
export const ADD_CLIENT ="ADD_CLIENT";  // add client
export const UPDATE_CLIENT ="UPDATE_CLIENT";  // add client
export const TEST_CLIENT_TO_ADD = "TEST_CLIENT_TO_ADD";
export const SET_OPERATION = "SET_OPERATION";  
export const OPEN_SNACK_SUCCESS = "OPEN_SNACK_SUCCESS"; 
export const OPEN_SNACK_ERROR = "OPEN_SNACK_ERROR"; 
// -----------------------------------------STARTCLIENT------Finished--------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
export const getProductList = () => dispatch => {

  console.log('[getClients]');
  
  // axios.get("/api/ecommerce/get-product-list").then(res => {
  axios.get("http://localhost:9000/api/clients").then(res => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data
    });
  });
};

export const setOpenSnackSuccess = (val) => {

  return {
    type: OPEN_SNACK_SUCCESS,
    payload: val
  };
}

export const setOpenSnackError = (val) => {

  return {
    type: OPEN_SNACK_ERROR,
    payload: val
  };
}

export const setSelectedClient = (selectedClient) => {
      console.log('[setSelectedClient] ', selectedClient);
      
      return {
        type: SET_SELECTED_CLIENT,
        payload: selectedClient
      };
};
export const setGlobalClient = (globalClient) => {
      console.log('[setGlobalClient] ', globalClient);
      
      return {
        type: SET_GLOBAL_CLIENT,
        payload: globalClient
      };
};
export const setClientToAdd = (client) => {
      console.log('[setSelectedClient] ', client);
      
      return {
        type: SET_CLIENT_TO_ADD,
        payload: client
      };
};

export const deleteClient = (clientId) => dispatch => {

  console.log('[deleteClient] ', clientId);
  axios
    .delete(`http://localhost:9000/api/clients/${clientId}`)
    .then(res1 => {
          axios.get("http://localhost:9000/api/clients").then(res2 => {
            dispatch({
              type: DELETE_CLIENT,
              payload: res2.data
            });
            dispatch({
              type:SET_OPERATION ,
              payload: "Deleted"
            });
            dispatch({
              type:OPEN_SNACK_SUCCESS ,
              payload: true
            });
            
          }).catch(res2 => {
                // etwas für Error
          });
    })
    .catch(res1 => {
        // etwas für Error
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
    });
};

export const addClient = (client) => dispatch => {
  let form_data = new FormData();
  // form_data.append("fileName", shortId.generate());
    for ( var key in client ) {
      form_data.append(key, client[key]);
      
  }
  axios({
    method: 'post',
    url: 'http://localhost:9000/api/clients',
    data: form_data,
    // headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(res1 => {
      axios.get("http://localhost:9000/api/clients").then(res2 => {
        dispatch({
          type: ADD_CLIENT,
          payload: [res2.data, res1.data]
        });
        dispatch({
          type:SET_OPERATION ,
          payload: "Added"
        });
        dispatch({
          type:OPEN_SNACK_SUCCESS ,
          payload: true
        });
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
    });
};

export const updateClient = (cid, client) => dispatch => {

  let form_data = new FormData(); // order is important 
    for ( var key in client ) {
      form_data.append(key, client[key]);
  }
  axios({
    method: 'put',
    url: `http://localhost:9000/api/clients/${cid}`,
    data: form_data
    })
    .then(res1 => {
      axios.get("http://localhost:9000/api/clients").then(res2 => {
        dispatch({
          type: ADD_CLIENT,
          payload: [res2.data, res1.data]
        });
        dispatch({
          type:SET_OPERATION ,
          payload: "Updated"
        });
        dispatch({
          type:OPEN_SNACK_SUCCESS ,
          payload: true
        });
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
        dispatch({
          type:OPEN_SNACK_ERROR ,
          payload: true
        });
    });
};
// ---------------------------------------------END----------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

