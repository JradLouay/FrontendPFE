import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  addUser,
  updateUser,
  updateState
} from "app/redux/actions/UsersActions";
import {
  Button,
  Icon,
  Grid,
  // TextField,
  Switch,
  Radio,
  RadioGroup,
  FormControlLabel,
  // Checkbox
} from "@material-ui/core";
import "date-fns";

class InfoForm extends Component {

  constructor(props) {
    super(props);
  }
  
  state = {                              
    name: this.props.type==="edit" ? this.props.selectedUser.name :  "louay",
    email : this.props.type==="edit" ? this.props.selectedUser.email :  "louay@gmail.com",
    password : this.props.type==="edit" ? this.props.selectedUser.password :  null,
    role : this.props.type==="edit" ? this.props.selectedUser.role :  null
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    console.log(this.props.selectedUser)
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
    const copy = {
      ...this.state
    };
    // delete copy.confirmPassword;
    if (this.props.type ==="edit") {
      console.log("edit", copy);  
      this.props.updateUser(this.props.selectedModule.id, copy);
    }else if(this.props.type ==="add"){
      this.props.addUser(copy);
      console.log("add", copy);
    }
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeBlocked = event => {
    this.props.updateState(this.props.selectedUser.id, { ...this.props.selectedUser,
                                                        blocked : !this.props.selectedUser.blocked})
  };

  // handleDateChange = date => {
  //   console.log(date);         this is for whatever you want to add a date input 
  //   this.setState({ date });
  // };

  render() {
    let {
      name,
      email,
      password,
      confirmPassword,
      role
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
                label="Name(Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                validators={["required",
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
              {
                  
                  this.props.type ==="add" ? (
                    <React.Fragment>
                      <TextValidator
                      className="mb-16 w-100"
                      label="Password"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required",
                                  "minStringLength: 6"]}
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
                  </React.Fragment>
                    ) : (
                    <FormControlLabel
                      value="blocked"
                      control={<Switch 
                        checked={this.props.selectedUser.blocked}
                        onChange={this.handleChangeBlocked}
                        color="secondary"
                        name="blocked"
                        />}
                      label="Block"
                      labelPlacement="left"
                    />
                    )
                  }
          
              <RadioGroup
                className="mb-16"
                value={role}
                name="role"
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio color="secondary" />}
                  label="Admin"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="user"
                  control={<Radio color="secondary" />}
                  label="User"
                  labelPlacement="end"
                />
              </RadioGroup>
              
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
  addUser : PropTypes.func.isRequired,
  selectedUser : state.users.selectedUser,
  updateUser : PropTypes.func.isRequired,
  updateState : PropTypes.func.isRequired,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    addUser,
    updateUser,
    updateState
    }
)(InfoForm);
