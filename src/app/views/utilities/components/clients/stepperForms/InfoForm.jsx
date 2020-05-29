import React, { Component } from "react";
import shortId from "shortid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  setClientToAdd,
  updateClient
} from "app/redux/actions/ClientActions";
import {
  Button,
  Icon,
  Grid,
  // IconButton
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
    clientName: this.props.type==="edit"? this.props.selectedClient.clientName : undefined,
    host: this.props.type==="edit"? this.props.selectedClient.host : undefined,
    port: this.props.type==="edit"? this.props.selectedClient.port : undefined,
    userName: this.props.type==="edit"? this.props.selectedClient.userName : undefined,
    password: this.props.type==="edit"? this.props.selectedClient.password : undefined,
    fileName: this.props.type==="edit"? this.props.selectedClient.fileName : shortId.generate(),
    // lastUpdate: "",
    version: this.props.type==="edit"? this.props.selectedClient.version : undefined,
    // confirmPassword: "password",
    // file: null,
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
      // this.state.fileName = this.props.selectedClient.fileName
      this.props.updateClient(this.props.selectedClient.id, this.state);
      // console.log(this.state);
      

    }else if(this.props.type ==="add"){
       console.log(this.state)
      this.props.setClientToAdd(this.state);
      this.props.next()//this actually will not have any error weil er hat kein side effect 
    }
   
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  
   handelChosenFile = (f)=> {
      this.setState({file : f});
  }
   handelChosenImage = (image)=> {
      this.setState({image : image});
  }

  render() {
    let {
    clientName,
    host,
    port,
    userName, 
    password,
    version,
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
              <label for="file">Choose an Image :</label>
              
              <TextValidator
                  accept=".yml"
                  // style={{ display: 'none' }}
                  id="file"
                  type="file"
                  onChange={e=> this.handelChosenImage(e.target.files[0])} />
                                       

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
              <label for="file">Choose a file :</label>
              
              <TextValidator
                  accept=".yml"
                  // style={{ display: 'none' }}
                  id="file"
                  type="file"
                  onChange={e=> this.handelChosenFile(e.target.files[0])} />
                              
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
          
        </ValidatorForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  setClientToAdd : PropTypes.func.isRequired,
  selectedClient : state.client.selectedClient,
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
