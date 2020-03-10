import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setClientToAdd
} from "app/redux/actions/EcommerceActions";
import {
  Button,
  Icon,
  Grid,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  // Checkbox
} from "@material-ui/core";
import "date-fns";

class InfoForm extends Component {

  constructor(props) {
    super(props);
  }
  

  state = {                                                                     
    clientName: "NewClient",
    // state : "",
    // lastUpdate: "",
    version: "1.0",
    email:"new_client@email.com",
    host: "163.258.6.9",
    port: "2310",
    userName:"newuser",
    password: "newuser",
    confirmPassword: "newuser"
    
  };
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    console.log("submitted");
    let copy = {
      ...this.state
    };
    delete copy.confirmPassword;
    this.props.setClientToAdd(copy);
    this.props.next()//this actually will not have any error weil er hat kein side effect 
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    let {
      clientName,//
    email,      //
    // state ,
    version,
    host,
    port,
    userName, //
    password,
    confirmPassword
  
    } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextValidator
                className="mb-16 w-100"
                label="Client Name (Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="clientName"
                value={clientName}
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Version (Eg: 1.0)"
                onChange={this.handleChange}
                type="text"
                name="version"
                value={version}
                validators={[
                  "required",
                ]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Username (Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="userName"
                value={userName}
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />
              
              <TextValidator
                className="mb-16 w-100"
                label="Email"
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />

            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Host (Eg : 192.168.2.1)  "
                onChange={this.handleChange}
                type="text"
                name="host"
                value={host}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Port (4 Numbers)"
                onChange={this.handleChange}
                type="number"
                name="port"
                value={port}
                validators={[
                  "required",
                  "minStringLength:4",
                  "maxStringLength: 4"
                ]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Password"
                onChange={this.handleChange}
                name="password"
                type="password"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Confirm Password"
                onChange={this.handleChange}
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "this field is required",
                  "password didn't match"
                ]}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">Next</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  setClientToAdd : PropTypes.func.isRequired,
  // clientToAdd : state.ecommerce.clientToAdd,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    setClientToAdd,  }
)(InfoForm);
