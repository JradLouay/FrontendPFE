import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setClientToAdd,
  updateClient
} from "app/redux/actions/EcommerceActions";
import {
  Button,
  Icon,
  Grid,
  IconButton
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
    clientName: this.props.type==="edit"? this.props.selectedClient.clientName : "NewClient",
    host: this.props.type==="edit"? this.props.selectedClient.host : "163.258.6.9",
    port: this.props.type==="edit"? this.props.selectedClient.port : "2310",
    userName: this.props.type==="edit"? this.props.selectedClient.userName : "newuser",
    password: this.props.type==="edit"? this.props.selectedClient.password : "password",
    // status : "",
    // lastUpdate: "",
    version: this.props.type==="edit"? this.props.selectedClient.version : "1.0",
    // confirmPassword: "password",
    file: null,
    // image: null
    
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
    // delete copy.confirmPassword;
    // const copy = {
    //   ...this.state
    // };
    if (this.props.type ==="edit") {
      console.log("edit", this.state);  
      this.props.updateClient(this.props.selectedClient.id, this.state);
    }else if(this.props.type ==="add"){
      // this.props.addModule(copy);
      this.props.setClientToAdd(this.state);
      this.props.next()//this actually will not have any error weil er hat kein side effect 
      // console.log("add", copy);
      
    }
   
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);
    this.setState({ date });
  };
   handelChosenFile= (f)=> {
      this.setState({file : f});
  }

  render() {
    let {
    clientName,//
    host,
    port,
    userName, //
    password,
    // status ,
    // lastUpdate,
    version,
    // confirmPassword,
    // email
  
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
              
              {/* <TextValidator
                className="mb-16 w-100"
                label="Email"
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              /> */}
                                       

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
                // type="password"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              {/* <TextValidator
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
              /> */}
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">{this.props.type==="edit" ? "Edit" : "Add" }</span>
          </Button>
          <input
                              accept=".yml"
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                              onChange={e=> this.handelChosenFile(e.target.files[0])}
                            />
                            <label htmlFor="raised-button-file">
                              <IconButton variant="outlined" component="span"  >
                                <Icon>file_upload</Icon>
                            </IconButton>
                            </label>
        </ValidatorForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  setClientToAdd : PropTypes.func.isRequired,
  selectedClient : state.ecommerce.selectedClient,
  updateClient : PropTypes.func.isRequired,
  // clientToAdd : state.ecommerce.clientToAdd,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    setClientToAdd,
    updateClient
    }
)(InfoForm);
