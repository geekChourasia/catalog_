import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";

const IntervalComponent = ({ interval, setInterval }) => {
  const intervals = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];

  return (
    <Box sx={{mt:1}}>
      <ButtonGroup
        variant="text"
        aria-label="outlined button group"
        style={{ marginBottom: "20px" }} // Optional spacing
      >
        {intervals.map((int) => (
          <Button
            key={int}
            onClick={() => setInterval(int)}
            variant="contained"
            size="small"
            style={{
              fontWeight: interval === int ? "bold" : "normal",
              textTransform: "none",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease",
              backgroundColor: interval === int ? "#4c40ee" : "#fff",
              color: interval === int ? "#fff" : "#000",
              width: "40px", // Fixed width for buttons
              margin: "0 4px", // Space between buttons
              border: "none", // Remove the border
              borderRadius: "4px", // Optional: give buttons rounded corners
              "&:hover": {
                backgroundColor: interval === int ? "#1e88e5" : "#e0e0e0", // Slightly darker shade on hover
                transform: "scale(1.05)", // Slightly enlarge on hover
              },
            }}
          >
            {int}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default IntervalComponent;
