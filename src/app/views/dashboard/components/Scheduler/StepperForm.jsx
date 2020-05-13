import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimpleForm from './SimpleForm';
import EditorYaml from '../Client Modules/EditorYaml';

function getSteps() {
  return [
    "Check docker-compose file",
    "Add Scheduler",
  ];
}

function getStepContent(stepIndex, handleNext, handleBack) {
  switch (stepIndex) {
    case 0:
      return (<EditorYaml />);
    case 1:
      return (SimpleForm);
    default:
      return `Default`;
   
      
  }
}

export default function StepperForm() {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button
              className="mt-16"
              variant="contained"
              color="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep, handleNext, handleBack)}</Typography>
            <div className="pt-16">
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                className="ml-16"
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
