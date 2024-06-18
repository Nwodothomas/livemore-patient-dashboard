// src/scenes/ehrs/EHRS.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button } from '@mui/material';
import Header from '../../components/Header';
import Topbar2 from '../global/Topbar2';

const EHRS = () => {
  const [ehrsUsername, setEhrsUsername] = useState('');
  const [ehrsPassword, setEhrsPassword] = useState('');
  const [isLoggedInToEHRS, setIsLoggedInToEHRS] = useState(false);

  const handleLoginToEHRS = () => {
    if (ehrsUsername && ehrsPassword) {
      setIsLoggedInToEHRS(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  const renderDashboard = () => {
    return (
      <Box>
        <Typography variant="h5">Patient Dashboard</Typography>
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h6">Welcome to your Patient Dashboard</Typography>
          <Typography variant="body1">Here you can view your health records, appointments, and more.</Typography>
          {/* Add more patient-specific components here */}
        </Paper>
      </Box>
    );
  };

  return (
    <Box sx={{ padding: 6 }}>
      <Topbar2 />
      <Box sx={{ marginBottom: 3 }}>
        <Header title="Patient Dashboard" subtitle="Access your EHRS and LivemoreAI" />
      </Box>
      <Grid container spacing={3}>
        {!isLoggedInToEHRS ? (
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Login to EHRS</Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="EHRS Username"
              value={ehrsUsername}
              onChange={(e) => setEhrsUsername(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type="password"
              label="EHRS Password"
              value={ehrsPassword}
              onChange={(e) => setEhrsPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleLoginToEHRS}>
              Login to EHRS
            </Button>
          </Grid>
        ) : (
          <Grid item xs={12}>
            {renderDashboard()}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default EHRS;