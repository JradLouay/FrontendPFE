import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
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

export default function UserExpansionPanels() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Client_1' },
    { key: 1, label: 'Client_2' },
    { key: 2, label: 'Client_3' }
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };
  //ExpansionPanel 
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>
            I am an expansion panel
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
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
          <Typography className={classes.heading}>Clients</Typography>
          <Typography className={classes.secondaryHeading}>
                Clients to Manage 
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Paper className={classes.paper}>
              {chipData.map(data => {
                let icon;

                if (data.label === 'React') {
                  icon = <TagFacesIcon />;
                }

                return (
                  <Chip
                    key={data.key}
                    icon={icon}
                    label={data.label}
                    onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                    className={classes.chip}
                  />
                );
              })}
        </Paper>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}
