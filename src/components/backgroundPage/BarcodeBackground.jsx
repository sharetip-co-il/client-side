import React from "react";
import { Grid, Typography } from "@mui/material";
import "../../styles/background.css";

const BarcodeBackground = ({ data }) => {
  const BarCodeFlow = () => {
    const liElements = Array.from({ length: 10 }, (_, index) => (
      <li key={index} />
    ));

    const barcodeBackground = (
      <Grid container className="area">
        <ul className="circles">{liElements}</ul>
      </Grid>
    );
    return barcodeBackground;
  };

  return (
    <Grid container className="background b-container">
      <BarCodeFlow />
    </Grid>
  );
};

export default BarcodeBackground;
