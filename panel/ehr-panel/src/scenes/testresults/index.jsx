// src/scenes/testresults/TestResults.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Header from '../../components/Header';
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
  const [selectedTestType, setSelectedTestType] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const analysisResultRef = useRef(null);

  useEffect(() => {
    fetchTestResults().then((data) => {
      setTestResults(data);
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

  return (
    <Box sx={{ padding: 3 }}>
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
    </Box>
  );
};

export default TestResults;