import React from 'react';
import { 
    Card,
    CardHeader,
    Icon,
    IconButton,
    Button
             } from "@material-ui/core";
// ace editor 
import AceEditor from "react-ace";
import 'brace/mode/yaml';
import 'brace/theme/monokai';





const EditorYaml = ({ title, subtitle }) => {


    const[yamlFile, setYamlFile] = React.useState("");
    const onChange = (value) =>{
        console.log(value);
        setYamlFile(value);
        };

    let fileReader ; 

      const handleFileRead = (event) =>{
        const content = fileReader.result;
        setYamlFile(content);
      }

      const handelChosenFile= (file)=> {
        fileReader = new FileReader();
        fileReader.onloadend= handleFileRead ;
        fileReader.readAsText(file);
      }

    
  return (
    <Card elevation={6} className="px-24 py-20 h-100">
      <div className="card-title">Client_1</div>
      <div className="card-subtitle mb-24">docker-compose.yml</div>
                 <CardHeader
                      action={
                        <React.Fragment>
                            <IconButton variant="outlined" color="primary" >
                                <Icon>save</Icon>
                            </IconButton>
                            <input
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
                            </label> 

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

export default EditorYaml;
