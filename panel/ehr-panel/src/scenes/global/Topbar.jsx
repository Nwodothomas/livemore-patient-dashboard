// src/scenes/global/Topbar.jsx
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Avatar, Box, Menu, MenuItem, useTheme } from '@mui/material';
import { Search, Notifications, Settings, Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../../theme';

const Topbar = ({ onSearch, searchContext }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value, searchContext);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Livemore Logo" width="40" height="40" />
          <Typography variant="h6" sx={{ marginLeft: 1, fontWeight: 'bold' }}>
            Livemore
          </Typography>
          <Typography
            variant="h6"
            sx={{
              marginLeft: 1,
              color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary[900],
            }}
          >
            Precision Medicine
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette.grey[200],
            },
            marginRight: 2,
            marginLeft: 2,
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.mode === 'dark' ? 'black' : 'inherit', // Change color based on theme mode
          }}
        >
          <Box
            sx={{
              padding: theme.spacing(0, 2),
              pointerEvents: 'none',
              color: theme.palette.mode === 'dark' ? 'black' : 'inherit', // Change color based on theme mode
            }}
          >
            <Search />
          </Box>
          <InputBase
            placeholder="Search here…"
            sx={{
              padding: theme.spacing(1, 1, 1, 0),
              paddingLeft: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create('width'),
              width: '100%',
              color: theme.palette.mode === 'dark' ? 'black' : 'inherit', // Change color based on theme mode
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Eng (US)
          </Typography>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <Avatar alt="Ibrahim" src="/assets/user.png" />
            <Box ml={1}>
              <Typography variant="body1">Ibrahim</Typography>
              <Typography variant="body2">Member</Typography>
            </Box>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;