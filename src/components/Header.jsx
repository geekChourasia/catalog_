import React from "react";
import { Box, Typography } from "@mui/material";

const HeaderComponent = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography style={{ fontWeight: "bold", fontSize: "44px" }}>
        63,179.71
        <sup style={{ color: "#bdbebf", fontSize: "24px", fontWeight: 300 }}>
          USD
        </sup>
    </Typography>
      <Typography variant="h6" sx={{ color: "#67bf6b" }}>
        +2,161.42 (3.54%)
      </Typography>
    </Box>
  );
};

export default HeaderComponent;
