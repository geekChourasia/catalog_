import React, { useState } from 'react';
import { Tabs, Tab, Divider } from '@mui/material';


const TabsComponent = () => {
  const [value, setValue] = useState('chart');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="chart tabs"
      sx={{
        '.MuiTabs-indicator': {
          backgroundColor: '#4c40ee', 
        },
      }}
    >
      <Tab
        label="Summary"
        value="summary"
        sx={{
          color: '#757575', 
          '&.Mui-selected': {
            color: 'black', 
          },
        }}
      />
      <Tab
        label="Chart"
        value="chart"
        sx={{
          color: '#757575', 
          '&.Mui-selected': {
            color: 'black', 
          },
        }}
      />
      <Tab
        label="Statistics"
        value="stats"
        sx={{
          color: '#757575',
          '&.Mui-selected': {
            color: 'black',
          },
        }}
      />
      <Tab
        label="Analysis"
        value="analysis"
        sx={{
          color: '#757575',
          '&.Mui-selected': {
            color: 'black',
          },
        }}
      />
      <Tab
        label="Settings"
        value="settings"
        sx={{
          color: '#757575',
          '&.Mui-selected': {
            color: 'black',
          },
        }}
      />
    </Tabs>
    <Divider/>
    </>
  );
};

export default TabsComponent;
