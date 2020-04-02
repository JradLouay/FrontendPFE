import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  // Checkbox
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { 
  addScheduler
 } from "app/redux/actions/EcommerceActions";

class SimpleForm extends Component {


  constructor(props) {
    super(props);
  }
  
  state = {
    schedulerName: "update_2",
    description: "Bitte, füge hier etwas hinzu Brüder.... ",
    date: new Date(),
    time: new Date(),
    version: "2.0",
    type: "Bug Fix",
  };
  

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    // ValidatorForm.addValidationRule("isPasswordMatch", value => {
    //   if (value !== this.state.password) {
    //     return false;
    //   }
    //   return true;
    // });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    // ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    // console.log("submitted");
    this.props.addScheduler(this.props.globalClient.id, this.state);
    // this.props.close();
    
    // console.log(this.state);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    this.setState({ date });
  };
  handleTimeChange = time => {
    this.setState({ time });
  };

  render() {
    let {
      schedulerName,
      version,
      type,
      description,
      date,
      time
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
                label="Name (Name your update )"
                onChange={this.handleChange}
                type="text"
                name="schedulerName"
                value={schedulerName}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
               <TextValidator
                className="mb-16 w-100"
                label="Version  (give aversion)"
                onChange={this.handleChange}
                type="text"
                name="version"
                value={version}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Type"
                onChange={this.handleChange}
                type="text"
                name="type"
                value={type}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                    className="mb-16 w-100"
                    margin="none"
                    id="mui-pickers-date"
                    label="Date picker"
                    inputVariant="standard"
                    autoOk={true}
                    value={date}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
              </MuiPickersUtilsProvider>
              
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              
              <KeyboardTimePicker
                  className="mb-16 w-100"
                  margin="none"
                  id="time-picker"
                  label="Time picker"
                  inputVariant="standard"
                  value={time}
                  onChange={this.handleTimeChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
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
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">Send</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addScheduler : PropTypes.func.isRequired,
  globalClient : state.ecommerce.globalClient,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    addScheduler,
    }
)(SimpleForm);
