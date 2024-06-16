// src/scenes/patientrecord/PatientRecord.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Avatar, Button } from '@mui/material';

// Mock function to simulate fetching data from an API
const fetchPatientRecord = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        diagnosisDate: '02/05/2024',
        cancerType: 'Prostate Cancer, Stage III',
        treatmentHistory: 'Radical prostatectomy followed by androgen deprivation therapy (ADT)'
      });
    }, 1000);
  });
};

const PatientRecord = ({ showProfile = false, profilePicture, patientName }) => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    // Fetch patient record when the component mounts
    fetchPatientRecord().then((data) => {
      setRecord(data);
    });
  }, []);

  if (!record) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 3, backgroundColor: 'background.paper', borderRadius: 1, marginTop: 3 }}>
      {showProfile && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
          <Avatar src={profilePicture} alt="Patient Profile" sx={{ width: 56, height: 56 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{patientName}</Typography>
          </Box>
          <Button variant="outlined" sx={{ marginLeft: 'auto' }}>Edit</Button>
        </Box>
      )}
      <Typography variant="h6" gutterBottom>
        Patient Record
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2"><strong>Diagnosis Date:</strong> {record.diagnosisDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2"><strong>Cancer Type:</strong> {record.cancerType}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2"><strong>Treatment History:</strong> {record.treatmentHistory}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PatientRecord;