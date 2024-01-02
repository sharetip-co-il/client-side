import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Typography, Box, Grid,useMediaQuery  } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContactUs } from "../../requests/services/homePageRequests";
import "../../styles/background.css";
import { contactUsValidation } from "../../validations/ContactUsValidation";
import { HelperText } from "../../styles/errors";
const ContactUsForm = ({ onSuccess, onError }) => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactUsValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactUs = useContactUs();
  const isMobileDevice = useMediaQuery("(max-width: 600px)");

  const onSubmit = async (data) => {
    try {
      const res = await contactUs.doRequest({ params: data });
      onSuccess(res);
    } catch (error) {
      onError(error?.response?.data);
    }
  };

  return (
    <Grid className="contact-us">
      <Box
        id="contact"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          dir: "rtl",
        }}
      >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Typography variant="h4" align="center" mb={2}>
            צור קשר
          </Typography>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  {...field}
                  fullWidth
                  label="שם פרטי"
                  margin="normal"
                  required
                  error={Boolean(fieldState?.error)}
                  sx={{ width: isMobileDevice ? "100%" : "500px" }} 
                />
                <HelperText>{fieldState?.error?.message}</HelperText>
              </>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  {...field}
                  fullWidth
                  label="אימייל"
                  margin="normal"
                  required
                  type="email"
                  error={Boolean(fieldState?.error)}
                  sx={{ width: isMobileDevice ? "100%" : "500px" }} 
                />
                <HelperText>{fieldState?.error?.message}</HelperText>
              </>
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextField
                  {...field}
                  fullWidth
                  label="הודעה"
                  margin="normal"
                  multiline
                  rows={4}
                  error={Boolean(fieldState?.error)}
                  sx={{ width: isMobileDevice ? "100%" : "500px" }} 
                />
                <HelperText>{fieldState?.error?.message}</HelperText>
              </>
            )}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            sx={{ mt: 2 }}
            disabled={formState.isSubmitting}
          >
            שלח
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactUsForm;