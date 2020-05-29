import React from 'react';
import { 
    Card,
    CardHeader,
    CardActions,
    Icon,
    IconButton,
    Button
} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {
      updateClient
      } from "app/redux/actions/ClientActions";
import {
      getFile,
      setFile
      } from "app/redux/actions/ModuleActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
// ace editor 
import AceEditor from "react-ace";
import 'brace/mode/yaml';
import 'brace/theme/monokai';


const EditorYaml = (props) => {

  const {
    globalClient,
    getFile,
    setFile,
    updateClient,
    yaml
  }= props;

    React.useEffect(() => {
      getFile(globalClient.file);
      return () => {
      };
    }, [globalClient]);

    const onChange = (value) =>{
      setFile(value);
        };

    let fileReader ; 

    const handleFileRead = (event) =>{
      const content = fileReader.result;
      setFile(content);
    }

    const handelChosenFile= (file)=> {
      fileReader = new FileReader();
      fileReader.onloadend= handleFileRead ;
      fileReader.readAsText(file);
    }

    const saveFile=() => {
      console.log("saving file");
      let blob = new Blob([yaml], { type: "text/yaml"});
      updateClient(globalClient.id, {
          fileName : globalClient.fileName,
          file : blob
      });
      
    }

  return (
    
    <Card elevation={6} className="px-24 py-20 h-100">
      {/* <div className="card-title">{globalClient.clientName}</div> */}
      {/* <div className="card-subtitle mb-24">docker-compose.yml</div> */}
                 <CardHeader
                      action={
                        <React.Fragment>
                        {/* <AddClModuleDiag showButton={globalClient.clientName ? false : true} /> */}
          
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={saveFile}
                              startIcon={<SaveIcon />}
                            >
                              Save
                            </Button>
                            <input
                              accept=".yml"
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                              onChange={e=> handelChosenFile(e.target.files[0])}
                            />
                            <label htmlFor="raised-button-file">
                              <IconButton variant="outlined" component="span">
                                <Icon>file_upload</Icon>
                            </IconButton>
                            </label> 

                        </React.Fragment>
                      }
                      // title={globalClient.clientName}
                      // subheader="docker-compose.yml"
                    />
                <AceEditor
                          focus
                          style={{ width: "100%" }}
                          mode="yaml"
                          theme="monokai"
                          name="template_file"
                        //   ref="editorInput"
                          onChange={onChange}
                          value={yaml}
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
                        {/* <CardActions>
                          <AddClModuleDiag showButton={globalClient.clientName ? false : true} />
                        </CardActions> */}
    </Card>
  );
};

const mapStateToProps = state => ({
  globalClient : state.client.globalClient,
  yaml : state.module.yaml,
  updateClient : PropTypes.func.isRequired,
  getFile : PropTypes.func.isRequired,
  setFile : PropTypes.func.isRequired
});
export default   connect(
  mapStateToProps,
  { 
    updateClient,
    getFile,
    setFile
    }
)(EditorYaml);
