import React, { useState } from "react";
import { IconButton, Box, Typography} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const ControlButtons = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <Box  display="flex">
      <span style={{ display: "flex", alignItems: "center", marginRight:"4px", cursor:"pointer" }} onClick={toggleFullscreen}>
        <IconButton >
          {isFullscreen ? (
            <CloseFullscreenIcon fontSize="small" />
          ) : (
            <OpenInFullIcon fontSize="small" />
          )}
        </IconButton>

        <Typography style={{ color: "#757575" ,  display: 'inline-block',}}>Fullscreen</Typography>
      </span>

      <span style={{ alignItems: "center", display:"flex" }}>
        <IconButton>
          <AddCircleOutlineRoundedIcon fontSize="small" />
        </IconButton>
        <Typography style={{ color: "#757575",  display: 'inline-block', }}>Compare</Typography>
      </span>
    </Box>
  );
};

export default ControlButtons;
