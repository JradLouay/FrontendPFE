import React from 'react';
import { 
    Card,
    CardHeader,
    Icon,
    IconButton,
    // Button
             } from "@material-ui/core";
import {
updateClient
} from "app/redux/actions/EcommerceActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
// ace editor 
import AceEditor from "react-ace";
import 'brace/mode/yaml';
import 'brace/theme/monokai';





const EditorYaml = (props) => {

  const {
    globalClient,
    updateClient,
    title, 
    subtitle 

  }= props;


    const[yamlFile, setYamlFile] = React.useState("");

    React.useEffect(() => {
      axios.get(`http://localhost:9000/${globalClient.file}`).then(res => {
          // console.log(res.data);
          setYamlFile(res.data);
      });
      return () => {
      
      };
    }, [globalClient]);
    const onChange = (value) =>{
        console.log(value);
        setYamlFile(value);
        };

    const saveFile=() => {
      let blob = new Blob([yamlFile], { type: "text/yaml"});
      // console.log(globalClient);
      
      updateClient(globalClient.id, {
          clientName : globalClient.clientName,
          file : blob
      });
      
    }

  return (
    <Card elevation={6} className="px-24 py-20 h-100">
      <div className="card-title">Client_1</div>
      <div className="card-subtitle mb-24">docker-compose.yml</div>
                 <CardHeader
                      action={
                        <React.Fragment>
                            <IconButton variant="outlined" color="primary" onClick={saveFile} >
                                <Icon>save</Icon>
                            </IconButton>
                            {/* <input
                              accept=".yml"
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                              onChange={e=> handelChosenFile(e.target.files[0])}
                            />
                            <label htmlFor="raised-button-file">
                              <IconButton variant="outlined" component="span"  >
                                <Icon>file_upload</Icon>
                            </IconButton>
                            </label>  */}

                        </React.Fragment>
                      }
                      title="Modules"
                      subheader="Client_1"
                    />
                <AceEditor
                          focus
                          style={{ width: "100%" }}
                          mode="yaml"
                          theme="monokai"
                          name="template_file"
                        //   ref="editorInput"
                          onChange={onChange}
                          value={yamlFile}
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
    </Card>
  );
};

const mapStateToProps = state => ({
  globalClient : state.ecommerce.globalClient,
  updateClient : PropTypes.func.isRequired,
});
export default   connect(
  mapStateToProps,
  { 
    updateClient
    }
)(EditorYaml);
