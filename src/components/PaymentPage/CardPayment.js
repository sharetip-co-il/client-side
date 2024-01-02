import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Paper, Stepper } from "@mui/material";
import PaymentForm from "./PaymentForm";
import { Box } from "@mui/system";

const CardPayment = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <Typography component="h2" variant="h4" align="center">
        פרטי אשראי
      </Typography>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}></Stepper>
      {
        <Fragment>
          {<PaymentForm />}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              {"תשלום"}
            </Button>
          </Box>
        </Fragment>
      }
    </Paper>
  );
};

export default CardPayment;
