// src/scenes/prescriptions/Prescriptions.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, List, ListItem, ListItemText, Divider } from '@mui/material';
import Topbar2 from '../global/Topbar2';
import Header from '../../components/Header';

// Function to simulate fetching AI recommendations from a model
const fetchAIRecommendations = async (patientData) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        'Medication A: Take 1 pill daily',
        'Medication B: Apply cream twice a day',
        'Lifestyle Change: Increase daily physical activity to 30 minutes'
      ]);
    }, 1000);
  });
};

const Prescriptions = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [approvedRecommendations, setApprovedRecommendations] = useState([]);
  const [specialistApproval, setSpecialistApproval] = useState('');
  const [specialistComments, setSpecialistComments] = useState('');

  const handleGetRecommendations = async () => {
    const patientData = {
      geneticData: 'Sample genetic data...',
      clinicalRecord: 'Sample clinical record...',
      lifestyleData: 'Sample lifestyle data...',
      environmentalData: 'Sample environmental data...',
      nutritionalData: 'Sample nutritional data...'
    };
    const aiRecommendations = await fetchAIRecommendations(patientData);
    setRecommendations(aiRecommendations);
  };

  const handleApproveRecommendations = () => {
    if (specialistApproval.trim() !== '') {
      setApprovedRecommendations(recommendations.map((rec, index) => ({
        recommendation: rec,
        comments: specialistComments.trim() !== '' ? specialistComments : 'Approved by Specialist'
      })));
      setRecommendations([]);
      setSpecialistApproval('');
      setSpecialistComments('');
    }
  };

  return (
    <Box sx={{ paddingTop: 8, paddingLeft: 3, paddingRight: 3 }}>
      <Topbar2 />
      <Header title="Prescriptions" subtitle="AI-driven predictive disease risk assessment, early detection, accurate diagnosis, and personalized treatment recommendations" />
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6" gutterBottom>Patient Data</Typography>
            <Typography variant="body1"><strong>Genetic Data:</strong> Sample genetic data...</Typography>
            <Typography variant="body1"><strong>Clinical Record:</strong> Sample clinical record...</Typography>
            <Typography variant="body1"><strong>Lifestyle Data:</strong> Sample lifestyle data...</Typography>
            <Typography variant="body1"><strong>Environmental Data:</strong> Sample environmental data...</Typography>
            <Typography variant="body1"><strong>Nutritional Data:</strong> Sample nutritional data...</Typography>
            <Button variant="contained" color="primary" onClick={handleGetRecommendations} sx={{ marginTop: 2 }}>
              Get AI Recommendations
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {recommendations.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
              <Typography variant="h6" gutterBottom>AI Recommendations</Typography>
              <List>
                {recommendations.map((rec, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={rec} />
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ marginY: 2 }} />
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Specialist Approval"
                value={specialistApproval}
                onChange={(e) => setSpecialistApproval(e.target.value)}
              />
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Specialist Comments (optional)"
                value={specialistComments}
                onChange={(e) => setSpecialistComments(e.target.value)}
                sx={{ marginTop: 2 }}
              />
              <Button variant="contained" color="primary" onClick={handleApproveRecommendations} sx={{ marginTop: 2 }}>
                Approve Recommendations
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}

      {approvedRecommendations.length > 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
              <Typography variant="h6" gutterBottom>Approved Prescriptions</Typography>
              <List>
                {approvedRecommendations.map((rec, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={rec.recommendation} secondary={rec.comments} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Prescriptions;