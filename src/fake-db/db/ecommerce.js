import Mock from "../mock";
import shortId from "shortid";

const EcommerceDB = {
  productList: [ // these will become clients 
    {
      id: "323sa680b32497dsfdsgga21rt47",
      imgUrl: "/assets/images/products/speaker-1.jpg",
      version: 1.2,
      clientName: "Client_1",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port: "3259",
    },
    {
      id: "323sa680b324976dfgga21rt47",
      imgUrl: "/assets/images/products/speaker-2.jpg",
      version: 1.3,
      clientName: "Client_2",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port: "3259",
    },
    {
      id: "323sa680b32497dsfrsgga21rt47",
      imgUrl: "/assets/images/products/headphone-1.jpg",
      version: 1.6,
      clientName: "Client_3",
      lastUpdate: "14/02/1996",
      state: "deployed",
      host: "192.167.2.3",
      port:"2592"
    },
    {
      id: shortId.generate(),
      imgUrl: "/assets/images/products/headphone-1.jpg",
      version: 1.6,
      clientName: "Client_4",
      lastUpdate: "14/02/1995",
      state: "deployed",
      host: "192.167.2.3",
      port:"2595"
    }
  ],

  category: [
    // {
    //   title: "audio",
    //   product: 321
    // },
    // {
    //   title: "fashion",
    //   product: 123
    // },
    // {
    //   title: "cellphone",
    //   product: 546
    // },
    // {
    //   title: "accessories",
    //   product: 76
    // }
  ],

  brand: [
    // {
    //   title: "Microlab",
    //   product: 32
    // },
    // {
    //   title: "Sony",
    //   product: 534
    // },
    // {
    //   title: "Beats",
    //   product: 23
    // },
    // {
    //   title: "Iphone",
    //   product: 65
    // },
    // {
    //   title: "Comlion",
    //   product: 198
    // }
  ],

  rating: [
    // {
    //   rate: 5,
    //   product: 345
    // },
    // {
    //   rate: 4,
    //   product: 53
    // },
    // {
    //   rate: 3,
    //   product: 765
    // },
    // {
    //   rate: 2,
    //   product: 32
    // },
    // {
    //   rate: 1,
    //   product: 64
    // }
  ],

  cart: [
    {
      uid: "1",
      list: [
        {
          productId: "323sa680b324976dfgga21rt47",
          amount: 1
        },{
          productId: "323sa680b32497dfdfgga21rt48",
          amount: 1
        },{
          productId: "323sa688b324976dfgga21rt49",
          amount: 1
        }
      ]
    }
  ],
  variables: [
    {
      cid: "323sa680b32497dsfdsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    },
    {
      cid: "323sa680b324976dfgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    },
    {
      cid: "323sa680b32497dsfrsgga21rt47",
      list: [
        {
          id:shortId.generate(),
          key: "ENVIRONMENT",
          value: "development"
        },
        {
          id:shortId.generate(),
          key: "COMPOSE_PROJECT_NAME",
          value: "app-manager"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_SERVER",
          value: "botv.io:1255"
        },
        {
          id:shortId.generate(),
          key: "REGISTRY_PASSWORD",
          value: "6vqwIyPDI!"
        },
        {
          id:shortId.generate(),
          key: "VERSION",
          value: "NLP_VERSION"
        },
        {
          id:shortId.generate(),
          key: "BOT_SERVICES_PATH",
          value: "/home/Documents/bot-services"
        },
      ]
    }
  ],

  userList: [
    {
      id: "1",
      name: "John Doe",
      avatar: "/assets/images/face-7.jpg"
    },
    {
      id: "323sa680b3249760ea21rt47",
      name: "Frank Powell",
      avatar: "/assets/images/faces/13.jpg"
    },
    {
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "/assets/images/face-1.jpg"
    }
  ]
};

const getDetailedCartList = uid => {
  let cartList = EcommerceDB.cart.find(userCart => userCart.uid == uid).list;
  return cartList.map(product => ({
    amount: product.amount,
    ...EcommerceDB.productList.find(item => item.id === product.productId)
  }));
};

Mock.onGet("/api/ecommerce/get-product-list").reply(config => {
  const response = EcommerceDB.productList;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-category-list").reply(config => {
  const response = EcommerceDB.category;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-rating-list").reply(config => {
  const response = EcommerceDB.rating;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-brand-list").reply(config => {
  const response = EcommerceDB.brand;
  return [200, response];
});

Mock.onGet("/api/ecommerce/get-cart-list").reply(config => {
  let uid = config.data;
  let response = [];

  if (uid) {
    response = getDetailedCartList(uid); // just to get the product from the list weil er hat nur die ID 
  }

  return [200, response];
});

Mock.onGet("/api/ecommerce/get-var-list").reply(config => { // this is to get the variables list for each client mit ein cid
  let cid = config.data;
  let response = [];

  if (cid) {
    let variablesList = EcommerceDB.variables.find(variableObj => variableObj.cid === cid);
    response = variablesList ? variablesList.list : [] ;
  }
  

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-var").reply(config => { // this for deleting a variable
  let { varId, cid } = JSON.parse(config.data);

  let variableList = EcommerceDB.variables.map(variableObj => {
    if (variableObj.cid === cid) {
      return {
        ...variableObj,
        list: variableObj.list.filter(variable => variable.id !== varId)
      };
    } else return variableObj;
  });

  EcommerceDB.variables = variableList;

  console.log(EcommerceDB.variables);
  

  const response = EcommerceDB.variables.find(variableObj => variableObj.cid === cid).list; // we need to make this in a abstract form 

  return [200, response];
});


Mock.onPost("/api/ecommerce/update-var").reply(config => { // this for deleting a variable
  let { varId, cid, newData } = JSON.parse(config.data);

  console.log("[dataBase side ]",varId, cid, newData);
  

  let variableList = EcommerceDB.variables.map(variableObj => {
    if (variableObj.cid === cid) {
      return {
        ...variableObj,  // optimization passer l'index du var dans le tab 
        list: variableObj.list.map(variable => {
          if(variable.id === varId){
            return {
              ...variable,
              ...newData
            }
          } else return variable
        })
      };
    } else return variableObj;
  });

  EcommerceDB.variables = variableList;
  console.log(variableList);
  

  const response =  EcommerceDB.variables.find(variableObj => variableObj.cid === cid).list; // we need to make this in a abstract form
  return [200, response];
});

Mock.onPost("/api/ecommerce/add-var").reply(config => { // this for deleting a variable
  let { cid, newData } = JSON.parse(config.data);

  console.log("[dataBase side ]", cid, newData);
  

  let variableList = EcommerceDB.variables.map(variableObj => {
    if (variableObj.cid === cid) { // find the vars for each client 
      return {
        ...variableObj,  // optimization passer l'index du var dans le tab 
        list: variableObj.list.concat(newData)
      };
    } else return variableObj;
  });

  EcommerceDB.variables = variableList;
  console.log(variableList);
  

  const response =  EcommerceDB.variables.find(variableObj => variableObj.cid === cid).list; // we need to make this in a abstract form
  return [200, response];
});




Mock.onPost("/api/ecommerce/add-to-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      let product = userCart.list.find(
        product => product.productId === productId
      );
      if (product) {
        return {
          ...userCart,
          list: userCart.list.map(product => {
            if (product.productId === productId) {
              return {
                ...product,
                amount: product.amount + 1
              };
            } else return product;
          })
        };
      } else {
        userCart.list.push({
          productId,
          amount: 1
        });
        return userCart;
      }
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-from-cart").reply(config => {
  let { uid, productId } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.filter(product => product.productId !== productId)
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});

Mock.onPost("/api/ecommerce/delete-client").reply(config => {
  let { clientId } = JSON.parse(config.data);
  let clients = EcommerceDB.productList.filter(client => client.id !== clientId);

  EcommerceDB.productList = clients;

  const response = clients;

  return [200, response];
});

Mock.onPost("/api/ecommerce/update-cart-amount").reply(config => {
  let { uid, productId, amount } = JSON.parse(config.data);

  let cartList = EcommerceDB.cart.map(userCart => {
    if (userCart.uid === uid) {
      return {
        ...userCart,
        list: userCart.list.map(product => {
          if (product.productId === productId) {
            product.amount = amount;
          }
          return product;
        })
      };
    } else return userCart;
  });

  EcommerceDB.cart = cartList;

  const response = getDetailedCartList(uid);

  return [200, response];
});
