import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
//   KeyboardTimePicker
// } from "@material-ui/pickers";
import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";

const styles = theme => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
});

class SimpleAddForm extends Component {
  
  state = {
    username: "",
    firstName: "",
    email: "",
    // date: new Date(),
    // creditCard: "",
    // mobile: "",
    password: "",
    confirmPassword: "",
    // selectedDate: "",
    // agreement: "",
    role:""
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

  // handleDateChange = date => {
  //   console.log(date);

  //   this.setState({ date });
  // };

  render() {

    const { classes } = this.props;
    let {
      username,
      firstName,
      // creditCard,
      // mobile,
      password,
      confirmPassword,
      // selectedDate,
      // date,
      email,
      role
    } = this.state;
    let films = [
      { name: "Client_1", id: 1994 },
      { name: "Client_2", id: 1972 },
      { name: "Client_3", id: 1974 },
      { name: "Client_4", id: 2008 },
      { name: "Client_5", id: 1957 },
      { name: "Client_6", id: 1993 }];
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
                label="Username (Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="username"
                value={username}
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="First Name"
                onChange={this.handleChange}
                type="text"
                name="firstName"
                value={firstName}
                validators={["required"]}
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

              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="mb-16 w-100"
                  margin="none"
                  id="mui-pickers-date"
                  label="Date picker"
                  inputVariant="standard"
                  type="text"
                  autoOk={true}
                  value={date}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider> */}
              {/* <TextValidator
                className="mb-32 w-100"
                label="Credit Card"
                onChange={this.handleChange}
                type="number"
                name="creditCard"
                value={creditCard}
                validators={[
                  "required",
                  "minStringLength:16",
                  "maxStringLength: 16"
                ]}
                errorMessages={["this field is required"]}
              /> */}
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* <TextValidator
                className="mb-16 w-100"
                label="Mobile Nubmer"
                onChange={this.handleChange}
                type="text"
                name="mobile"
                value={mobile}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
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
                  value="developer"
                  control={<Radio color="secondary" />}
                  label="Developer"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="intern"
                  control={<Radio color="secondary" />}
                  label="Intern"
                  labelPlacement="end"
                />
              </RadioGroup>
              {/* <div className={classes.root}> */}
              <Autocomplete
                  multiple
                  id="tags-standard"
                  options={films}
                  getOptionLabel={option => option.name}
                  defaultValue={[films[0]]}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Clients"
                      placeholder="Choose clients ..."
                    />
                  )}
                />
                {/* </div> */}
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">add</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleAddForm);
