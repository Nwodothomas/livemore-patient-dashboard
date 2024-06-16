// src/scenes/geneticinfoanalysis/index.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/Header';
import CustomLineChart from '../../components/CustomLineChart';
import CustomBarChart from '../../components/CustomBarChart';
import CustomPieChart from '../../components/CustomPieChart';

const GeneticInfoAnalysis = () => {
  const [form, setForm] = useState({
    patientName: '',
    age: '',
    gender: '',
    medicalHistory: '',
    geneticData: '',
  });
  const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileUpload = (e) => {
    // Handle file processing logic here
    // const file = e.target.files[0];
  };

  const handleSubmit = () => {
    // Handle form submission and data processing here
    const mockData = {
      diagnosticResults: 'No significant mutations detected in the provided genetic data.',
      predictiveResults: {
        riskAssessment: 'Moderate risk for developing lung cancer.',
        earlyDetection: 'No early signs of lung cancer detected.',
        diagnosis: 'No cancerous cells detected.',
      },
      treatmentRecommendations: {
        treatmentPlan: 'Regular monitoring and annual check-ups.',
        preventiveMeasures: 'Maintain a healthy lifestyle and avoid smoking.',
        followUp: 'Follow up with a specialist in 6 months.',
      },
      healthTrends: [
        { name: 'Jan', risk: 0.2 },
        { name: 'Feb', risk: 0.3 },
        { name: 'Mar', risk: 0.1 },
        { name: 'Apr', risk: 0.4 },
        { name: 'May', risk: 0.5 },
      ],
      barChartData: [
        { name: 'Type 1', value: 30 },
        { name: 'Type 2', value: 70 },
        { name: 'Type 3', value: 50 },
      ],
      pieChartData: [
        { name: 'Risk 1', value: 40 },
        { name: 'Risk 2', value: 35 },
        { name: 'Risk 3', value: 25 },
      ],
    };
    setData(mockData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Header title="Genetic Information Analysis" subtitle="Analyze genetic information to predict disease risks and provide personalized treatment recommendations" />
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Patient Name"
              name="patientName"
              value={form.patientName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Age"
              name="age"
              value={form.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Medical History"
              name="medicalHistory"
              value={form.medicalHistory}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Genetic Data"
              name="geneticData"
              value={form.geneticData}
              onChange={handleInputChange}
              helperText="Enter genetic markers or upload genetic data file"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Genetic Data File
              <input
                type="file"
                hidden
                onChange={handleFileUpload}
              />
            </Button>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 3 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>

      {data && (
        <Box sx={{ marginTop: 4 }}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6">Diagnostic Results</Typography>
            <Typography variant="body1">{data.diagnosticResults}</Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6">Predictive Results</Typography>
            <Typography variant="body1"><strong>Risk Assessment:</strong> {data.predictiveResults.riskAssessment}</Typography>
            <Typography variant="body1"><strong>Early Detection:</strong> {data.predictiveResults.earlyDetection}</Typography>
            <Typography variant="body1"><strong>Diagnosis:</strong> {data.predictiveResults.diagnosis}</Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6">Personalized Treatment Recommendations</Typography>
            <Typography variant="body1"><strong>Treatment Plan:</strong> {data.treatmentRecommendations.treatmentPlan}</Typography>
            <Typography variant="body1"><strong>Preventive Measures:</strong> {data.treatmentRecommendations.preventiveMeasures}</Typography>
            <Typography variant="body1"><strong>Follow-Up:</strong> {data.treatmentRecommendations.followUp}</Typography>
          </Paper>

          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6">Health Trends</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Line Chart</Typography>
                <CustomLineChart data={data.healthTrends} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Bar Chart</Typography>
                <CustomBarChart data={data.barChartData} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Pie Chart</Typography>
                <CustomPieChart data={data.pieChartData} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default GeneticInfoAnalysis;