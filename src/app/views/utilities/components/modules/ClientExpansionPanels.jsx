import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanel
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
  Icon,
  Grid,
  IconButton,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
 import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  
  paper: {
    width: '80%',
    maxHeight: 435,
  },
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ClientExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [editable, setEditable] = React.useState({
    editData : false
  });
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = newValue => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleEdit = (data) => {
    
    setEditable({ [data] : !editable[data] });
    console.log("check change : ", editable[data]);
    
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General Info</Typography>
          <Typography className={classes.secondaryHeading}>
            Client_1
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <div className={classes.root}>
      <List component="div" role="list">
        <ListItem button divider  role="listitem">
          <ListItemText>
          <Table
                            //  className={classes.table}
                            size="small" 
                            minWidth="360"
                            aria-label="a dense table">
                                  
                                    <TableBody>
                                      
                                        <TableRow 
                                        // key={row.name}
                                        >
                                          <TableCell
                                            component="th" 
                                            scope="row"
                                            size="small"
                                            align="right">
                                             <Typography variant="h6" gutterBottom>
                                                Data :
                                              </Typography>
                                          </TableCell>
                                          <TableCell align="left"  size="small">
                                            {
                                              editable.editData ?
                                                  <TextField id="standard-basic" label="Data" /> :
                                                       "data"
                                            } 
                                          </TableCell>
                                          <TableCell align="right"  size="small">
                                             
                                                            <IconButton 
                                                              size="small"
                                                              onClick={ () => handleEdit('editData')} >
                                                              { editable.editData ? 
                                                                   <DoneIcon color="primary" size="small" />  : 
                                                                          <EditIcon color="primary" size="small" />
                                                              }

                                                            </IconButton>
                                          </TableCell>
                                        </TableRow>
                                    </TableBody>
                              </Table>
            </ListItemText>
        </ListItem>
        <ListItem
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
          role="listitem"
        >
          <ListItemText primary="Phone ringtone" secondary={value} />
        </ListItem>
        <ListItem button divider disabled role="listitem">
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItem>
        
      </List>
    </div>
          {/* <Typography>
          <Grid 
              container xs={6}
              justify="center"
              alignItems="center">
                        <Table
                            //  className={classes.table}
                            size="small" 
                            minWidth="650"
                            aria-label="a dense table">
                                  
                                    <TableBody>
                                      
                                        <TableRow 
                                        // key={row.name}
                                        >
                                          <TableCell
                                            component="th" 
                                            scope="row"
                                            size="small"
                                            align="right">
                                             <Typography variant="h6" gutterBottom>
                                                Data :
                                              </Typography>
                                          </TableCell>
                                          <TableCell align="left"  size="small">
                                            {
                                              editable.editData ?
                                                  <TextField id="standard-basic" label="Data" /> :
                                                       "data"
                                            } 
                                          </TableCell>
                                          <TableCell align="right"  size="small">
                                             
                                                            <IconButton 
                                                              size="small"
                                                              onClick={ () => handleEdit('editData')} >
                                                              { editable.editData ? 
                                                                   <DoneIcon color="primary" size="small" />  : 
                                                                          <EditIcon color="primary" size="small" />
                                                              }

                                                            </IconButton>
                                          </TableCell>
                                        </TableRow>
                                    </TableBody>
                              </Table>
          </Grid>
          </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Connecting credentials </Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}
