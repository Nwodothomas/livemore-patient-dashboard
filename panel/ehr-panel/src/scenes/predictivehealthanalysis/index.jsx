import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, LinearProgress, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import Header from '../../components/Header';
import CustomLineChart from '../../components/CustomLineChart';
import CustomBarChart from '../../components/CustomBarChart';
import CustomPieChart from '../../components/CustomPieChart';
import DeleteIcon from '@mui/icons-material/Delete';

const mockData = {
  patientInfo: {
    name: '',
    age: '',
    gender: '',
    medicalHistory: '',
  },
  currentHealthData: {
    symptoms: '',
    vitalSigns: {
      bloodPressure: '',
      heartRate: '',
      temperature: '',
    },
    lifestyleFactors: '',
  },
  diagnosticTests: {
    testResults: [],
    geneticInformation: '',
  },
  predictiveAnalysis: {
    riskAssessment: '',
    earlyDetection: '',
    diagnosis: '',
  },
  treatmentRecommendations: {
    treatmentPlan: '',
    preventiveMeasures: '',
    followUp: '',
  },
  healthTrends: [
    { name: 'Jan', risk: 70 },
    { name: 'Feb', risk: 75 },
    { name: 'Mar', risk: 80 },
    { name: 'Apr', risk: 85 },
    { name: 'May', risk: 90 },
  ],
  barChartData: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ],
  pieChartData: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ],
};

const PredictiveHealthAnalysis = () => {
  const [data, setData] = useState(mockData);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleChange = (e, category, field) => {
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };

  const handleVitalSignsChange = (e, field) => {
    const value = e.target.value;
    setData((prevState) => ({
      ...prevState,
      currentHealthData: {
        ...prevState.currentHealthData,
        vitalSigns: {
          ...prevState.currentHealthData.vitalSigns,
          [field]: value,
        },
      },
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => {
      return {
        file,
        id: Math.random().toString(36).substring(7),
      };
    });
    setUploadedFiles([...uploadedFiles, ...newFiles]);

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.id]: progress,
          }));
        }
      };
      reader.onloadend = () => {
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.id]: 100,
        }));
      };
      reader.readAsDataURL(file.file);
    });
  };

  const handleRemoveFile = (id) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
    setUploadProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[id];
      return newProgress;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to process the form data and uploaded files
    // Here you would typically send the data to your backend service
  };

  useEffect(() => {
    // Here, you would fetch actual data from the backend and update the state.
    // setData(fetchedData);
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Header title="Predictive Health Analysis" subtitle="Detailed predictive analysis and personalized recommendations" />

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Patient Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              value={data.patientInfo.name}
              onChange={(e) => handleChange(e, 'patientInfo', 'name')}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Age"
              value={data.patientInfo.age}
              onChange={(e) => handleChange(e, 'patientInfo', 'age')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Gender"
              value={data.patientInfo.gender}
              onChange={(e) => handleChange(e, 'patientInfo', 'gender')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Medical History"
              value={data.patientInfo.medicalHistory}
              onChange={(e) => handleChange(e, 'patientInfo', 'medicalHistory')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Current Health Data</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Symptoms"
              value={data.currentHealthData.symptoms}
              onChange={(e) => handleChange(e, 'currentHealthData', 'symptoms')}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Blood Pressure"
              value={data.currentHealthData.vitalSigns.bloodPressure}
              onChange={(e) => handleVitalSignsChange(e, 'bloodPressure')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Heart Rate"
              value={data.currentHealthData.vitalSigns.heartRate}
              onChange={(e) => handleVitalSignsChange(e, 'heartRate')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Temperature"
              value={data.currentHealthData.vitalSigns.temperature}
              onChange={(e) => handleVitalSignsChange(e, 'temperature')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <TextField
              fullWidth
              label="Lifestyle Factors"
              value={data.currentHealthData.lifestyleFactors}
              onChange={(e) => handleChange(e, 'currentHealthData', 'lifestyleFactors')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Diagnostic Tests</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Test Results"
              value={data.diagnosticTests.testResults}
              onChange={(e) => handleChange(e, 'diagnosticTests', 'testResults')}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Genetic Information"
              value={data.diagnosticTests.geneticInformation}
              onChange={(e) => handleChange(e, 'diagnosticTests', 'geneticInformation')}
              variant="outlined"
              sx={{ marginTop: 2 }}
            />
            <Button
              variant="contained"
              component="label"
              sx={{ marginTop: 2 }}
            >
              Upload Test Results
              <input
                type="file"
                hidden
                multiple
                onChange={handleFileUpload}
              />
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <List>
              {uploadedFiles.map((file) => (
                <ListItem key={file.id}>
                  <ListItemText primary={file.file.name} />
                  {uploadProgress[file.id] && (
                    <LinearProgress variant="determinate" value={uploadProgress[file.id]} />
                  )}
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => handleRemoveFile(file.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Predictive Analysis</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Risk Assessment:</strong> {data.predictiveAnalysis.riskAssessment}</Typography>
            <Typography variant="body2"><strong>Early Detection:</strong> {data.predictiveAnalysis.earlyDetection}</Typography>
            <Typography variant="body2"><strong>Diagnosis:</strong> {data.predictiveAnalysis.diagnosis}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Personalized Treatment Recommendations</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2"><strong>Treatment Plan:</strong> {data.treatmentRecommendations.treatmentPlan}</Typography>
            <Typography variant="body2"><strong>Preventive Measures:</strong> {data.treatmentRecommendations.preventiveMeasures}</Typography>
            <Typography variant="body2"><strong>Follow-up:</strong> {data.treatmentRecommendations.followUp}</Typography>
          </Grid>
        </Grid>
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
  );
};

export default PredictiveHealthAnalysis;
