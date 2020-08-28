import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoForm from "./stepperForms/InfoForm";
import TestProgress  from "./stepperForms/TestProgress";
import VariablesTable from "./VariablesTable";

function getSteps() {
  return [
    "Client Information",
    "Testing Remote Connexion",
    "Environment Variables",
    
  ];
}

function getStepContent(stepIndex, handleNext, handleBack) {
  switch (stepIndex) {
    case 0:
      return (<InfoForm type={"add"} next={handleNext} />);
    case 1:
      return (<TestProgress next={handleNext}
                            prev={handleBack}  />);
    case 2:
      return (<VariablesTable />);  
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
