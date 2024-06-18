// src/scenes/testresults/TestResults.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid, Button, Select, MenuItem, FormControl, InputLabel, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Header from '../../components/Header';
import Topbar2 from '../global/Topbar2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Mock function to simulate fetching test results from an API
const fetchTestResults = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          type: 'Blood Test',
          status: 'Completed',
          result: 'Normal',
          date: '2024-06-01'
        },
        {
          id: 2,
          type: 'Urine Test',
          status: 'In Progress',
          result: null,
          date: '2024-06-10'
        }
      ]);
    }, 1000);
  });
};

// Mock function to simulate fetching lab centers from an API
const fetchLabCenters = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Central Lab', address: '123 Lab St', phone: '555-1234' },
        { id: 2, name: 'East Side Lab', address: '456 Lab Ave', phone: '555-5678' }
      ]);
    }, 1000);
  });
};

// Mock function to simulate analyzing test images
const analyzeTestImage = (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        analysis: 'This is a simulated analysis result.',
        prediction: 'High risk of Prostate Cancer',
        detection: 'Early stage detection of abnormalities',
        diagnosis: 'Recommended diagnosis: Follow-up with MRI',
        treatment: 'Suggested treatment: Hormone therapy, Surgery'
      });
    }, 2000);
  });
};

const TestResults = () => {
  const [testResults, setTestResults] = useState([]);
  const [labCenters, setLabCenters] = useState([]);
  const [selectedTestType, setSelectedTestType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    date: '',
    time: '',
    labCenterId: ''
  });
  const analysisResultRef = useRef(null);

  useEffect(() => {
    fetchTestResults().then((data) => {
      setTestResults(data);
    });
    fetchLabCenters().then((data) => {
      setLabCenters(data);
    });
  }, []);

  const handleTestTypeChange = (event) => {
    setSelectedTestType(event.target.value);
  };

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleAnalyze = () => {
    if (uploadedFile) {
      analyzeTestImage(uploadedFile).then((result) => {
        setAnalysisResult(result);
      });
    }
  };

  const handleDownload = (format) => {
    const input = analysisResultRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      if (format === 'pdf') {
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save('analysisResult.pdf');
      } else {
        const link = document.createElement('a');
        link.href = imgData;
        link.download = `analysisResult.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({ ...appointmentForm, [name]: value });
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking logic here
    handleCloseDialog();
  };

  return (
    <Box sx={{ padding: 6 }}>
      <Topbar2 />
      <Header title="Test Results" subtitle="View and analyze your test results" />
      <Box sx={{ marginBottom: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="test-type-select-label">Test Type</InputLabel>
          <Select
            labelId="test-type-select-label"
            id="test-type-select"
            value={selectedTestType}
            label="Test Type"
            onChange={handleTestTypeChange}
          >
            <MenuItem value="Blood Test">Blood Test</MenuItem>
            <MenuItem value="Urine Test">Urine Test</MenuItem>
            <MenuItem value="CT Scan">CT Scan</MenuItem>
            <MenuItem value="X-ray">X-ray</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {testResults.map((test) => (
          <Grid item xs={12} md={6} key={test.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{test.type}</Typography>
              <Typography variant="body2"><strong>Status:</strong> {test.status}</Typography>
              <Typography variant="body2"><strong>Date:</strong> {test.date}</Typography>
              <Typography variant="body2"><strong>Result:</strong> {test.result || 'Pending'}</Typography>
              <Button variant="outlined" sx={{ marginTop: 2 }}>View Details</Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Lab Centers</Typography>
        <Grid container spacing={3}>
          {labCenters.map((lab) => (
            <Grid item xs={12} md={6} key={lab.id}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6">{lab.name}</Typography>
                <Typography variant="body2"><strong>Address:</strong> {lab.address}</Typography>
                <Typography variant="body2"><strong>Phone:</strong> {lab.phone}</Typography>
                <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleOpenDialog}>
                  Book Appointment
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Upload Test Image</Typography>
        <input type="file" accept="image/*" onChange={handleFileUpload} />
        <Button variant="contained" color="primary" onClick={handleAnalyze} sx={{ marginTop: 2 }}>
          Analyze
        </Button>
      </Box>
      {analysisResult && (
        <Box sx={{ marginTop: 3 }} ref={analysisResultRef}>
          <Typography variant="h6">Analysis Result</Typography>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="body2"><strong>Analysis:</strong> {analysisResult.analysis}</Typography>
            <Typography variant="body2"><strong>Prediction:</strong> {analysisResult.prediction}</Typography>
            <Typography variant="body2"><strong>Detection:</strong> {analysisResult.detection}</Typography>
            <Typography variant="body2"><strong>Diagnosis:</strong> {analysisResult.diagnosis}</Typography>
            <Typography variant="body2"><strong>Treatment:</strong> {analysisResult.treatment}</Typography>
            <Button variant="contained" color="secondary" onClick={() => handleDownload('pdf')} sx={{ marginTop: 2 }}>
              Download as PDF
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDownload('jpeg')} sx={{ marginTop: 2, marginLeft: 2 }}>
              Download as JPEG
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDownload('png')} sx={{ marginTop: 2, marginLeft: 2 }}>
              Download as PNG
            </Button>
          </Paper>
        </Box>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAppointmentSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Patient Name"
                  name="patientName"
                  value={appointmentForm.patientName}
                  onChange={handleAppointmentChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Date"
                  type="date"
                  name="date"
                  InputLabelProps={{ shrink: true }}
                  value={appointmentForm.date}
                  onChange={handleAppointmentChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Time"
                  type="time"
                  name="time"
                  InputLabelProps={{ shrink: true }}
                  value={appointmentForm.time}
                  onChange={handleAppointmentChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="lab-center-select-label">Lab Center</InputLabel>
                  <Select
                    labelId="lab-center-select-label"
                    id="lab-center-select"
                    name="labCenterId"
                    value={appointmentForm.labCenterId}
                    label="Lab Center"
                    onChange={handleAppointmentChange}
                  >
                    {labCenters.map((lab) => (
                      <MenuItem key={lab.id} value={lab.id}>
                        {lab.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Book Appointment
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TestResults;