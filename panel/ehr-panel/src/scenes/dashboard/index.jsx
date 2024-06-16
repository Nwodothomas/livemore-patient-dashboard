// src/scenes/dashboard/index.jsx
import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Avatar, Button, TextField, List, ListItem, ListItemText, Tabs, Tab } from '@mui/material';
import Header from '../../components/Header';
import CustomLineChart from '../../components/CustomLineChart';
import CustomBarChart from '../../components/CustomBarChart';
import CustomPieChart from '../../components/CustomPieChart';

const mockData = {
  healthTrends: [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 },
    { name: 'May', value: 56 },
    { name: 'Jun', value: 55 },
    { name: 'Jul', value: 40 },
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
  patientRecord: {
    diagnosisDate: '02/05/2024',
    cancerType: 'Prostate Cancer, Stage III',
    treatmentHistory: 'Radical prostatectomy followed by androgen deprivation therapy (ADT)',
  },
  chatHistory: [
    { message: 'You\'re welcome! Let me know if you need further assistance.', sender: 'AI' },
    { message: 'Actually, I\'ve also been feeling really anxious lately. Could my lack of sleep be contributing to this?', sender: 'Patient' },
    { message: 'Yes, sleep deprivation can exacerbate feelings of anxiety. It\'s essential to address both issues. Consider incorporating relaxation techniques into your bedtime routine and speaking with a mental health professional for additional support.', sender: 'AI' },
    { message: 'That makes sense. Thanks for the advice!', sender: 'Patient' },
    { message: 'Of course! Remember, taking care of your mental health is just as important as your physical health. Don\'t hesitate to seek help if you need it.', sender: 'AI' },
  ],
};

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState('line');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingRecord, setIsEditingRecord] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ibrahim Hassan',
    gender: 'Male',
    age: '27',
    job: 'Architecture',
    bloodType: 'O-',
    allergies: 'None reported',
  });
  const [recordData, setRecordData] = useState(mockData.patientRecord);

  const handleChartChange = (event, newValue) => {
    setSelectedChart(newValue);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecordChange = (e) => {
    const { name, value } = e.target;
    setRecordData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: 3 }}>
        <Header title="Welcome to Your Dashboard" subtitle="Overview of your health and activities. Interact with AI to diagnose your condition and receive personalized treatment recommendations." />
      </Box>
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" color="textSecondary">Patient Profile</Typography>
              <Button variant="contained" size="small" onClick={() => setIsEditingProfile(!isEditingProfile)}>
                {isEditingProfile ? 'Cancel' : 'Edit'}
              </Button>
            </Box>
            <Avatar alt="Ibrahim Hassan" src="/assets/user.png" sx={{ width: 100, height: 100, marginTop: 2 }} />
            <TextField
              label="Name"
              value={profileData.name}
              onChange={handleProfileChange}
              name="name"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Gender"
              value={profileData.gender}
              onChange={handleProfileChange}
              name="gender"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Age"
              value={profileData.age}
              onChange={handleProfileChange}
              name="age"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Job"
              value={profileData.job}
              onChange={handleProfileChange}
              name="job"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Blood Type"
              value={profileData.bloodType}
              onChange={handleProfileChange}
              name="bloodType"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Allergies"
              value={profileData.allergies}
              onChange={handleProfileChange}
              name="allergies"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingProfile,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            {isEditingProfile && (
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingProfile(false)}>
                Save
              </Button>
            )}
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" color="textSecondary">Patient Record</Typography>
              <Button variant="contained" size="small" onClick={() => setIsEditingRecord(!isEditingRecord)}>
                {isEditingRecord ? 'Cancel' : 'Edit'}
              </Button>
            </Box>
            <TextField
              label="Diagnosis Date"
              value={recordData.diagnosisDate}
              onChange={handleRecordChange}
              name="diagnosisDate"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingRecord,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Cancer Type"
              value={recordData.cancerType}
              onChange={handleRecordChange}
              name="cancerType"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingRecord,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            <TextField
              label="Treatment History"
              value={recordData.treatmentHistory}
              onChange={handleRecordChange}
              name="treatmentHistory"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
              InputProps={{
                readOnly: !isEditingRecord,
                style: { fontWeight: 'bold' },
              }}
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />
            {isEditingRecord && (
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => setIsEditingRecord(false)}>
                Save
              </Button>
            )}
          </Paper>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Tabs
              value={selectedChart}
              onChange={handleChartChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Chat AI" value="chat" />
              <Tab label="Hospitals" value="hospitals" />
              <Tab label="Medical Research" value="research" />
              <Tab label="Settings" value="settings" />
            </Tabs>
          </Box>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant="h6">Interactive Chat</Typography>
            <List sx={{ maxHeight: 300, overflowY: 'auto' }}>
              {mockData.chatHistory.map((chat, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={chat.message}
                    secondary={chat.sender}
                    align={chat.sender === 'AI' ? 'right' : 'left'}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', marginTop: 2 }}>
              <TextField fullWidth placeholder="Ask anything..." />
              <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>Send</Button>
            </Box>
          </Paper>
          <Box sx={{ marginTop: 2 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Tabs
                  value={selectedChart}
                  onChange={handleChartChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="Line Chart" value="line" />
                  <Tab label="Bar Chart" value="bar" />
                  <Tab label="Pie Chart" value="pie" />
                </Tabs>
              </Box>
              {selectedChart === 'line' && <CustomLineChart data={mockData.healthTrends} />}
              {selectedChart === 'bar' && <CustomBarChart data={mockData.barChartData} />}
              {selectedChart === 'pie' && <CustomPieChart data={mockData.pieChartData} />}
            </Paper>
          </Box>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">Predictive Health Analysis</Typography>
            <CustomLineChart data={mockData.healthTrends} />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">Genetic Information Analysis</Typography>
            <CustomPieChart data={mockData.pieChartData} />
          </Paper>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Lifestyle Analysis</Typography>
            <CustomBarChart data={mockData.barChartData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;