import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{ position: "absolute", bottom: 0, width: "100%", padding: "10px" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        ShareTip
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
