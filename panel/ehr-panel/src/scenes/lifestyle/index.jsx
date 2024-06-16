// src/scenes/lifestyleanalysis/index.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, LinearProgress } from '@mui/material';
import Header from '../../components/Header';
import CustomLineChart from '../../components/CustomLineChart';
import CustomBarChart from '../../components/CustomBarChart';
import CustomPieChart from '../../components/CustomPieChart';

const LifestyleAnalysis = () => {
  const [form, setForm] = useState({
    patientName: '',
    age: '',
    gender: '',
    medicalHistory: '',
    lifestyleData: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);
  const [data, setData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
    setUploadProgress(new Array(files.length).fill(0));
  };

  const handleRemoveFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    const newProgress = uploadProgress.filter((_, i) => i !== index);
    setUploadProgress(newProgress);
  };

  const mockBackendProcessing = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          diagnosticResults: 'No significant issues detected in the provided lifestyle data.',
          predictiveResults: {
            riskAssessment: 'Low risk for lifestyle-related diseases.',
            earlyDetection: 'No early signs of lifestyle-related diseases detected.',
            diagnosis: 'Healthy lifestyle habits detected.',
          },
          treatmentRecommendations: {
            treatmentPlan: 'Maintain current lifestyle habits.',
            preventiveMeasures: 'Continue regular exercise and balanced diet.',
            followUp: 'Follow up with a nutritionist in 6 months.',
          },
          healthTrends: [
            { name: 'Jan', risk: 0.1 },
            { name: 'Feb', risk: 0.2 },
            { name: 'Mar', risk: 0.1 },
            { name: 'Apr', risk: 0.3 },
            { name: 'May', risk: 0.2 },
          ],
          barChartData: [
            { name: 'Diet', value: 70 },
            { name: 'Exercise', value: 80 },
            { name: 'Sleep', value: 90 },
          ],
          pieChartData: [
            { name: 'Risk 1', value: 20 },
            { name: 'Risk 2', value: 30 },
            { name: 'Risk 3', value: 50 },
          ],
        });
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    // Simulate file upload and processing
    for (let i = 0; i < uploadedFiles.length; i++) {
      setUploadProgress((prev) => {
        const newProgress = [...prev];
        newProgress[i] = 50; // Simulate 50% upload
        return newProgress;
      });
    }

    const mockData = await mockBackendProcessing();

    for (let i = 0; i < uploadedFiles.length; i++) {
      setUploadProgress((prev) => {
        const newProgress = [...prev];
        newProgress[i] = 100; // Simulate 100% upload
        return newProgress;
      });
    }

    setData(mockData);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Header title="Lifestyle Analysis" subtitle="Analyze lifestyle data to predict disease risks and provide personalized treatment recommendations" />
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
              label="Lifestyle Data"
              name="lifestyleData"
              value={form.lifestyleData}
              onChange={handleInputChange}
              helperText="Enter lifestyle details or upload data file"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload Lifestyle Data Files
              <input
                type="file"
                multiple
                hidden
                onChange={handleFileUpload}
              />
            </Button>
          </Grid>
        </Grid>

        {uploadedFiles.length > 0 && (
          <Box sx={{ marginTop: 2 }}>
            {uploadedFiles.map((file, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <Typography sx={{ flex: 1 }}>{file.name}</Typography>
                <Button onClick={() => handleRemoveFile(index)}>Remove</Button>
              </Box>
            ))}
            {uploadProgress.map((progress, index) => (
              <LinearProgress key={index} variant="determinate" value={progress} />
            ))}
          </Box>
        )}

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

export default LifestyleAnalysis;