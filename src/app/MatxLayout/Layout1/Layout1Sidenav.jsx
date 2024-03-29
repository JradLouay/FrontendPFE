import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  // Switch,
  Icon,
  withStyles,
  MenuItem,
  Tooltip,
  IconButton,
  MuiThemeProvider
} from "@material-ui/core";

import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";
// import { MatxMenu } from "matx";
import Sidenav from "../SharedCompoents/Sidenav";
import Brand from "../SharedCompoents/Brand";
import SidenavTheme from "../MatxTheme/SidenavTheme";
import { isMdScreen } from "utils";

const styles = theme => ({});

const IconButtonWhite = withStyles(theme => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "transparent",
    padding: "5px"
  }
}))(IconButton);

const IconSmall = withStyles(() => ({
  root: {
    fontSize: "1rem"
  }
}))(Icon);

class Layout1Sidenav extends Component {
  state = {
    // sidenavToggleChecked: false,
    // hidden: true
  };

  componentWillMount() {

    // CLOSE SIDENAV ON ROUTE CHANGE ON MOBILE
    this.unlistenRouteChange = this.props.history.listen((location, action) => {
      if (isMdScreen()) {
        this.updateSidebarMode({ mode: "close" });
      }
    });

  }

  componentWillUnmount() {
    this.unlistenRouteChange();
  }

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings, setDefaultSettings } = this.props;
    const updatedSettings = {
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    };
    setLayoutSettings(updatedSettings);
    setDefaultSettings(updatedSettings);
  };

  // handleSidenavToggle = () => {
  //   let { sidenavToggleChecked } = this.state;
  //   let mode = sidenavToggleChecked ? "full" : "compact";
  //   this.updateSidebarMode({ mode });
  //   this.setState({ sidenavToggleChecked: !sidenavToggleChecked });
  // };

  handleSignOut = () => {
    this.props.logoutUser();
    // console.log(this.props);
    
  };

  renderLogoSwitch = () => (
    // Open Brand component file to replace logo and text
    <Brand>
      {/* <Switch
        className="sidenav__toggle show-on-lg"
        onChange={this.handleSidenavToggle}
        checked={!this.state.sidenavToggleChecked}
        color="secondary"
      /> */}
    </Brand>
  );

  renderClient = () => {
    let { user } = this.props;
    let { globalClient } = this.props;
    return (
      <div className="sidenav__user">
        <div className="username-photo">
         <img src={globalClient.image} /> 
        </div>
        <div className="ml-8">
          <span className="username">
            {globalClient.clientName ? globalClient.clientName : <div className="text-muted">Choose a Client </div>}
          </span>
          {globalClient.status ? (
                    globalClient.status === "Deployed" ? (
                      <small className="border-radius-4 bg-green text-white px-8 py-1 ">
                         Deployed
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-error text-white px-8 py-1 ">
                        Not Deployed
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-secondary text-white px-8 py-1 ">
                      Unknown
                    </small>
                  )}
          <div className="user__menu">
            {/* <MatxMenu
              menuButton={
                <Tooltip title="Settings">
                  <IconButtonWhite
                    aria-label="Delete"
                    className=""
                    size="small"
                  >
                    <IconSmall> settings </IconSmall>
                  </IconButtonWhite>
                </Tooltip>
              }
            >
              <MenuItem className="flex flex-middle" style={{ minWidth: 185 }}>
                <Icon> home </Icon>
                <span className="pl-16"> Home </span>
              </MenuItem>
              <MenuItem className="flex flex-middle" style={{ minWidth: 185 }}>
                <Icon> settings </Icon>
                <span className="pl-16"> Account Setting </span>
              </MenuItem>
            </MatxMenu> */}

            <Tooltip title="Modules">
              <IconButtonWhite aria-label="Delete" className="" size="small">
                <IconSmall>local_library</IconSmall>
              </IconButtonWhite>
            </Tooltip>
            <Tooltip title="Scheduler">
              <IconButtonWhite
                aria-label="Delete"
                className=""
                size="small"
                // onClick={this.handleSignOut}
              >
                <IconSmall>access_time</IconSmall>
              </IconButtonWhite>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let { theme, settings } = this.props;
    const sidenavTheme =
      settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;
    return (
      <MuiThemeProvider theme={sidenavTheme}>
        <SidenavTheme theme={sidenavTheme} settings={settings} />

        <div className="sidenav">
          <div className="sidenav__hold">
            {(
              <Fragment>
                {this.renderLogoSwitch()}
                <Sidenav>{this.renderClient()}</Sidenav>
              </Fragment>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout1Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  globalClient : PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  globalClient: state.client.globalClient,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
      setLayoutSettings,
      setDefaultSettings,
      logoutUser
    })(Layout1Sidenav)
  )
);
