import React, { useState } from "react";
import ContactUsForm from "./ContactUsForm";
import SnackbarAlert from "../SnackbarAlert";

const ContactUsPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSuccess = (message) => {
    setSnackbarMessage(message);
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const handleError = (error) => {
    setSnackbarMessage(error);
    setSnackbarSeverity("error");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <ContactUsForm onSuccess={handleSuccess} onError={handleError} />
      <SnackbarAlert
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default ContactUsPage;
