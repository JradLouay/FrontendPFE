import React from "react";
import {
  Icon,
  Badge,
  MuiThemeProvider,
  IconButton,
  Drawer,
  Grid 
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  getProductList,
  setGlobalClient
} from "app/redux/actions/ClientActions";

let clientListLoaded = false;

function ShoppingCart(props) {
  const {
    container,
    theme,
    settings,
    productList = [],
    getProductList,
    setGlobalClient,
    globalClient,
    // user
  } = props;
  

  const [panelOpen, setPanelOpen] = React.useState(false);

  

  function handleDrawerToggle() {
    setPanelOpen(!panelOpen);
  }

  const parentThemePalette = theme.palette;


  if (!clientListLoaded) {
    getProductList();
    clientListLoaded = true;
    if(!globalClient.id){
      setPanelOpen(true);
    }

  }

  return (
    <MuiThemeProvider theme={settings.themes[settings.activeTheme]}>
      <IconButton
        onClick={handleDrawerToggle}
        style={{
          color:
            parentThemePalette.type === "light"
              ? parentThemePalette.text.secondary
              : parentThemePalette.text.primary
        }}
      >
        <Badge color="secondary" badgeContent={productList.length}>
          <Icon>recent_actors</Icon>
        </Badge>
      </IconButton>

      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={panelOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
      >
        <div className="mini-cart">
          <div className="cart__topbar flex flex-middle p-16 mb-24">
            <Icon color="primary">recent_actors</Icon>
            <h5 className="ml-8 my-0 font-weight-500">Clients</h5>
          </div>
          

          {productList.map(client => (
            <div
              key={client.id}
              className="mini-cart__item flex flex-middle flex-space-between py-8 px-8"
              // add onClick method to manage !!
              onClick={()=> {
                setGlobalClient(client);
                handleDrawerToggle();
              }}
            >
              <div className="mr-5">
              <div className="username-photo">
                <img src={client.image} alt={client.clientName} />
              </div>
              </div>
              <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                    name
                  </span>
                  <div className="text-muted">
                    {client.clientName} 
                  </div>
              </Grid>
              <Grid item md={3} xs={4}>
                  <span className="card__roject-name font-weight-500">
                    State
                  </span>
                  <div className="text-muted">
                    {client.status} 
                  </div>
              </Grid>
              {/* <div className="mr-8 text-center">
                <h6 className="m-0 mb-4">{client.clientName}</h6>
                <small className="text-muted">
                  {client.version}
                </small>
              </div> */}
            </div>
          ))}
        </div>
      </Drawer>
    </MuiThemeProvider>
  );
}

ShoppingCart.propTypes = {
  settings: PropTypes.object.isRequired,
  cartList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  settings: state.layout.settings,
  getProductList:PropTypes.func.isRequired,
  setGlobalClient: PropTypes.func.isRequired,
  productList : state.client.productList,
  globalClient : state.client.globalClient,
  // user: state.user
});

export default withStyles({}, { withTheme: true })(
  connect(
    mapStateToProps,
    { 
      getProductList,
      setGlobalClient 
    }
  )(ShoppingCart)
);
