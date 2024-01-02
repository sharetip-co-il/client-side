import React from "react";
import { Snackbar, Slide } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const SnackbarAlert = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={onClose}
        sx={{
          "& .MuiAlert-action": {
            marginRight: "2px",
          },
          "& .MuiAlert-icon": {
            marginLeft: "8px",
          },
        }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackbarAlert;
