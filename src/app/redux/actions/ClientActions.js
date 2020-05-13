import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"; // getclients 
export const SET_SELECTED_CLIENT = "SET_SELECTED_CLIENT"; // set client for the InfoDiag
export const SET_GLOBAL_CLIENT = "SET_GLOBAL_CLIENT"; // set global  client for the common part of the app 
export const DELETE_CLIENT ="DELETE_CLIENT";  // delete client
export const SET_CLIENT_TO_ADD ="SET_CLIENT_TO_ADD";  // set client to add
export const ADD_CLIENT ="ADD_CLIENT";  // add client
export const UPDATE_CLIENT ="UPDATE_CLIENT";  // add client
export const TEST_CLIENT_TO_ADD = "TEST_CLIENT_TO_ADD";
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

// export const testConnexion = (host, port, username, password) => dispatch => {

//   axios.post("http://localhost:9000/api/deploys/test", {host: host, port: port, username: username, password: password}).then(res => {
    
//     dispatch({
//       type: TEST_CLIENT_TO_ADD,
//       payload: true
//     });
//   }).catch(()=>{
//     dispatch({
//       type: TEST_CLIENT_TO_ADD,
//       payload: false
//     });
//   })
// };

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
            
          }).catch(res2 => {
                // etwas für Error
          });
    })
    .catch(res1 => {
        // etwas für Error
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
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
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
    data: form_data,
    // headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(res1 => {
      axios.get("http://localhost:9000/api/clients").then(res2 => {
        dispatch({
          type: ADD_CLIENT,
          payload: [res2.data, res1.data]
        });
      }).catch(res2 => {
            // etwas für Error
      });
    })
    .catch(res1 => {
        // etwas für Error
    });
};
// ---------------------------------------------END----------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

