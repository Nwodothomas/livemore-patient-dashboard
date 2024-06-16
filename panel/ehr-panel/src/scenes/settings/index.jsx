// src/scenes/settings/index.jsx
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel, MenuItem, Select, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Settings = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [language, setLanguage] = useState('en');
  const [themeMode, setThemeMode] = useState(theme.palette.mode === 'dark');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeToggle = () => {
    setThemeMode(!themeMode);
    // Add logic to toggle the theme
  };

  const handleEmailNotificationsToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSmsNotificationsToggle = () => {
    setSmsNotifications(!smsNotifications);
  };

  return (
    <Box p={3} sx={{ backgroundColor: colors.primary[400], minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Box mt={2}>
        <Typography variant="h6">Account Information</Typography>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Contact Number" margin="normal" />
        <TextField fullWidth label="Change Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Changes
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Preferences</Typography>
        <Box mt={2}>
          <Typography variant="body1">Language</Typography>
          <Select value={language} onChange={handleLanguageChange} fullWidth margin="normal">
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="de">German</MenuItem>
          </Select>
        </Box>
        <Box mt={2}>
          <FormControlLabel
            control={<Switch checked={themeMode} onChange={handleThemeToggle} />}
            label="Dark Mode"
          />
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Notifications</Typography>
        <Box mt={2}>
          <FormControlLabel
            control={<Switch checked={emailNotifications} onChange={handleEmailNotificationsToggle} />}
            label="Email Notifications"
          />
        </Box>
        <Box mt={2}>
          <FormControlLabel
            control={<Switch checked={smsNotifications} onChange={handleSmsNotificationsToggle} />}
            label="SMS Notifications"
          />
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Privacy Settings</Typography>
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
          Manage Data Sharing
        </Button>
        <Button variant="outlined" color="error" sx={{ mt: 2 }}>
          Deactivate Account
        </Button>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Subscription</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          View Plan Details
        </Button>
      </Box>

      <Box mt={4}>
        <Button variant="contained" color="secondary">
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;