import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  addModule
} from "app/redux/actions/EcommerceActions";
import {
  Button,
  Icon,
  Grid,
  TextField
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
    moduleName:"moduleName",
    version:"2.x",
    lastUpdate:"11/03/2020",
    description:"here you can put some desc"
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
    const copy = {
      ...this.state
    };
    console.log(copy);
    
    this.props.addModule(copy);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleDateChange = date => {
  //   console.log(date);         this is for whatever you want to add a date input 
  //   this.setState({ date });
  // };

  render() {
    let {
      moduleName,
      version,
      lastUpdate,
      description
  
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
                name="moduleName"
                value={moduleName}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Version (Eg: 1.0)"
                onChange={this.handleChange}
                type="text"
                name="version"
                value={version}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Last Update (Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="lastUpdate"
                value={lastUpdate}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Description"
                onChange={this.handleChange}
                type="TextField"
                name="description"
                multiline={"multiline"}
                rows="7"
                variant="outlined"
                value={description}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
{/*               
               <TextField
                width= "200"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                variant="outlined"
              />               */}
              
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
  addModule : PropTypes.func.isRequired,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    addModule,
    }
)(InfoForm);
