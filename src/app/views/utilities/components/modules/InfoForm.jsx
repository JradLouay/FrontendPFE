import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import {
  addModule,
  updateModule
} from "app/redux/actions/ModuleActions";
import {
  Button,
  Icon,
  Grid
} from "@material-ui/core";
import AceEditor from "react-ace";
import 'brace/mode/yaml';
import 'brace/theme/monokai';
import "date-fns";

class InfoForm extends Component {

  constructor(props) {
    super(props);
  }
  
  state = {                              
    moduleName: this.props.type==="edit" ? this.props.selectedModule.moduleName :  null,
    version : this.props.type==="edit" ? this.props.selectedModule.version :  null,
    lastUpdate : this.props.type==="edit" ? this.props.selectedModule.lastUpdate :  null,
    description : this.props.type==="edit" ? this.props.selectedModule.description :  ""
  };

  handleSubmit = event => {
    if (this.props.type ==="edit") {  
      this.props.updateModule(this.props.selectedModule.id, this.state);
      console.log(this.state);
    }else if(this.props.type ==="add"){
      this.props.addModule(this.state);
    }
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  }

   onChange = value =>{
    this.state.description = value ;
      }

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
                label="Module Name"
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
                validators={[]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Last Update"
                onChange={this.handleChange}
                type="text"
                name="lastUpdate"
                value={lastUpdate}
                validators={[]}
                errorMessages={["this field is required"]}
              />

            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              {/* <TextValidator
                className="mb-16 w-100"
                label="Yaml Description"
                onChange={this.handleChange}
                type="TextField"
                name="description"
                multiline={"multiline"}
                rows="7"
                variant="outlined"
                value={description}
                validators={["required"]}
                errorMessages={["this field is required"]}
              /> */}
               <AceEditor
                          style={{ width: "100%",
                        height: "100%" }}
                          mode="yaml"
                          theme="monokai"
                          name="description"
                          onChange={this.onChange}
                          value={description}
                          fontSize={12}
                          showPrintMargin
                          showGutter={true}
                          highlightActiveLine
                          setOptions={{
                            showLineNumbers: true,
                            tabSize: 2
                          }}
                          editorProps={{ $blockScrolling: true }}
                        />
              
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
  addModule : PropTypes.func.isRequired,
  selectedModule : state.module.selectedModule,
  updateModule : PropTypes.func.isRequired,
  // user: state.user
});
export default   connect(
  mapStateToProps,
  {  
    addModule,
    updateModule
    }
)(InfoForm);
