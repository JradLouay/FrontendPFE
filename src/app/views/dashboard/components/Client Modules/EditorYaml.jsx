import React from 'react';
// import clsx from 'clsx';
import { 
    Card,
    CardHeader,
    // CardActions,
    Icon,
    IconButton,
    Button,
    Snackbar,
    CircularProgress,
  } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import SaveIcon from '@material-ui/icons/Save';
import {
      updateClient,
      setOpenSnackSuccess,
      setOpenSnackError
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
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// SnackBar Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const EditorYaml = (props) => {

  const classes = useStyles();
  // const [loading, setLoading] = React.useState(false);
  // const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  // const buttonClassname = clsx({
  //   [classes.buttonSuccess]: success,
  // });

  const {
    globalClient,
    getFile,
    setFile,
    updateClient,
    yaml,
    openSnackSuccess,
    openSnackError,  
    setOpenSnackSuccess,
    setOpenSnackError,
    loading
  }= props;

    React.useEffect(() => {
      getFile(globalClient.file);
      return () => {
        clearTimeout(timer.current);
      };
    }, [globalClient]);

    const handleCloseSnackSuccess = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackSuccess(false); // ijiw mel actions 
    };
    const handleCloseSnackError = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackError(false);
    };

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
      // update clients file 
      updateClient(globalClient.id, {
          fileName : globalClient.fileName,
          file : blob
      }, true);
      
    }


  return (
    <React.Fragment>
    <Card elevation={6} className="px-24 py-20 h-100">
      {/* <div className="card-title">{globalClient.clientName}</div> */}
      {/* <div className="card-subtitle mb-24">docker-compose.yml</div> */}
                 <CardHeader
                      action={
                        <React.Fragment>
                        {/* <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              // className={buttonClassname}
                              // disabled={loading}
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
                            </label>  */}
                            
                            <div className={classes.root}>
                            <div className={classes.wrapper}>
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              // className={buttonClassname}
                              disabled={loading}
                              onClick={saveFile}
                              startIcon={<SaveIcon />}
                            >
                              Save
                            </Button>
                            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            </div>
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
                          </div>
                            
                         

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
     <Snackbar open={openSnackSuccess} autoHideDuration={2000} onClose={handleCloseSnackSuccess}>
     <Alert onClose={handleCloseSnackSuccess} severity="success">
       File saved successfully!
     </Alert>
   </Snackbar>
   <Snackbar open={openSnackError} autoHideDuration={2000} onClose={handleCloseSnackError}>
     <Alert onClose={openSnackError} severity="Error">
       An Error has been occurred!
     </Alert>
   </Snackbar>
   </React.Fragment>
  );
};

const mapStateToProps = state => ({
  globalClient : state.client.globalClient,
  yaml : state.module.yaml,
  updateClient : PropTypes.func.isRequired,
  getFile : PropTypes.func.isRequired,
  setFile : PropTypes.func.isRequired,
  setOpenSnackSuccess : PropTypes.func.isRequired,
  setOpenSnackError : PropTypes.func.isRequired,
  openSnackSuccess : state.client.openSnackSuccess,
  openSnackError : state.client.openSnackError,
  loading : state.client.loading
});
export default   connect(
  mapStateToProps,
  { 
    updateClient,
    getFile,
    setFile,
    setOpenSnackSuccess,
    setOpenSnackError
    }
)(EditorYaml);
