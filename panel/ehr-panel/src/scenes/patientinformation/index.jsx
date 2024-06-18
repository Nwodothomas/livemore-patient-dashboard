// src/scenes/patientprofile/index.jsx
import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, TextField, Grid, Paper } from '@mui/material';

const PatientProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Salisu',
    lastName: 'Abubakar',
    gender: 'Male',
    dob: '02 Feb 1997',
    phoneNumber: '08012345678',
    job: 'Architecture',
    bloodType: 'O-',
    allergies: 'None reported',
    address: 'Abuja FCT Garki, Area 11',
    nationality: 'Nigerian'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or update state
    console.log('Profile submitted:', profile); // eslint-disable-line no-console
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'background.paper', borderRadius: 1 }}>
      <Typography variant="h6" gutterBottom>
        Patient Profile
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <Avatar src="/assets/user.png" alt="Patient Profile" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="body1">Ibrahim Hassan</Typography>
          <Typography variant="body2" color="textSecondary">ID# 3827938203</Typography>
        </Box>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Job"
              name="job"
              value={profile.job}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Blood Type"
              name="bloodType"
              value={profile.bloodType}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Allergies"
              name="allergies"
              value={profile.allergies}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nationality"
              name="nationality"
              value={profile.nationality}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default PatientProfile;