import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class InfoForm extends Component {
  state = {
    userName: "",
    name: "",
    email: "",
    port: "",
    host: "",
    password: "",
    confirmPassword: ""
    
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
    console.log(event);
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
      
      name,
      host,
      port,
      userName,
      password,
      confirmPassword,
      
      email,
  
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
                label="Clien name"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                validators={["required"]}
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
                className="mb-32 w-100"
                label="Port (4 Numbers )"
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
          {/* <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">Next</span>
          </Button> */}
        </ValidatorForm>
      </div>
    );
  }
}

export default InfoForm;
