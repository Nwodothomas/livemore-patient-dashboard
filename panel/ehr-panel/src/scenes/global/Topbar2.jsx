// src/scenes/global/Topbar2.jsx
import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Box, Menu, MenuItem, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Topbar2 = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ top: 64, zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab 
              label="Dashboard" 
              onClick={() => navigate('/')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Chat AI" 
              onClick={() => navigate('/interactivechat')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Notes" 
              onClick={() => navigate('/notes')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Prescriptions" 
              onClick={() => navigate('/prescriptions')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Hospitals" 
              onClick={() => navigate('/hospitals')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Specialist" 
              onClick={() => navigate('/specialist')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Lab Diagnostics" 
              onClick={() => navigate('/testresults')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="Research" 
              onClick={() => navigate('/research')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab 
              label="EHRS" 
              onClick={() => navigate('/ehrs')} 
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }} 
            />
            <Tab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                  Healthcare Data
                  <ArrowDropDownIcon />
                </Box>
              }
              onClick={handleMenuOpen}
              sx={{ color: 'white', '&.Mui-selected': { color: 'white', backgroundColor: theme.palette.primary.main } }}
            />
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleMenuClick('/predictivehealthanalysis')}>Predictive Health Analysis</MenuItem>
              <MenuItem onClick={() => handleMenuClick('/geneticinfoanalysis')}>Genetic Information Analysis</MenuItem>
              <MenuItem onClick={() => handleMenuClick('/lifestyle')}>Lifestyle Analysis</MenuItem>
            </Menu>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar2;