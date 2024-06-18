// src/scenes/research/Research.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import Header from '../../components/Header';
import Topbar2 from '../global/Topbar2';

// Mock function to simulate fetching research results from an AI model
const fetchResearchResults = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Comprehensive Guide to Cardiovascular Diseases',
          type: 'Book',
          thumbnail: '/assets/book1.png',
          description: 'An in-depth look into the causes, treatments, and prevention of cardiovascular diseases.'
        },
        {
          id: 2,
          title: 'Cancer Research and Findings',
          type: 'Research Paper',
          thumbnail: '/assets/paper1.png',
          description: 'Latest findings in the field of cancer research, including new treatment methodologies.'
        },
        {
          id: 3,
          title: 'Stroke: Symptoms and Prevention',
          type: 'Diagram',
          thumbnail: '/assets/diagram1.png',
          description: 'A detailed diagram showing the symptoms and preventive measures for strokes.'
        }
      ]);
    }, 1000);
  });
};

const Research = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetchResearchResults(searchQuery).then((data) => {
        setResults(data);
      });
    }
  }, [searchQuery]);

  const handleSearch = () => {
    fetchResearchResults(searchQuery).then((data) => {
      setResults(data);
    });
  };

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (uploadedFile) {
      // Handle file upload logic here, for example, send the file to the server or AI model for training
      alert('File uploaded successfully');
    } else {
      alert('Please select a file to upload');
    }
  };

  return (
    <Box sx={{ padding: 6 }}>
      <Topbar2 />
      <Header title="Research" subtitle="Conduct your medical research with AI-powered assistance" />
      <Box sx={{ marginBottom: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search Medical Topics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <List>
        <Grid container spacing={3}>
          {results.map((result) => (
            <Grid item xs={12} md={6} key={result.id}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={result.thumbnail} alt={result.title} sx={{ width: 56, height: 56 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="h6">{result.title}</Typography>}
                    secondary={
                      <>
                        <Typography variant="body2"><strong>Type:</strong> {result.type}</Typography>
                        <Typography variant="body2"><strong>Description:</strong> {result.description}</Typography>
                      </>
                    }
                  />
                </ListItem>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </List>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Upload Training Material</Typography>
        <input type="file" accept="application/pdf,image/*" onChange={handleFileUpload} />
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleUpload}>
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default Research;