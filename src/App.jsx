import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import HeaderComponent from "./components/Header";
import TabsComponent from "./components/Tabs";
import ChartComponent from "./components/Chart";
import IntervalComponent from "./components/IntervalTabs"; // Update to your correct component name
import ControlButtons from "./components/ControlButtons"; // Import the new component
import "./index.css"

function App() {
  const [interval, setInterval] = useState("1w"); // Default to 1 week

  return (
    <Container maxWidth="md">
      <HeaderComponent />
      <TabsComponent />
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ControlButtons /> 
        <IntervalComponent interval={interval} setInterval={setInterval} />
      </Box>
      <ChartComponent interval={interval} />
    </Container>
  );
}

export default App;
