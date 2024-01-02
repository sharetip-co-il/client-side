import React from "react";
import { Grid, Typography } from "@mui/material";
import "../../styles/background.css";
import BarcodeBackground from "./BarcodeBackground";

const Background = ({ data }) => {

  return (
    <Grid container id="home" className="background b-container">
      <BarcodeBackground />
      <Grid item xs={12} sm={12} dir="rtl" className="context">
        <Typography variant="h3" dir="rtl" fontWeight="bold">
          מי אנחנו?
        </Typography>
        <Typography>{data.paragraph}</Typography>
      </Grid>
    </Grid>
  );
};

export default Background;
