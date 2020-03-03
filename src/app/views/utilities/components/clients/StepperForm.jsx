import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoForm from "./stepperForms/InfoForm";
import TestProgress  from "./stepperForms/TestProgress";
import VariablesForm from "./stepperForms/VariablesForm";

function getSteps() {
  return [
    "Client Information",
    "Environment Variables",
    "Testing Remote Connexion"
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<InfoForm />);
    case 1:
      return (<VariablesForm />);
    case 2:
      return (<TestProgress />);  
    default:
      return `In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.`;
   
      
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
            <Typography>{getStepContent(activeStep)}</Typography>
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
