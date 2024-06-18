// src/scenes/dashboard/index.jsx
import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button, TextField, List, ListItem, ListItemText, Tabs, Tab } from '@mui/material';
import CustomLineChart from '../../components/CustomLineChart';
import CustomBarChart from '../../components/CustomBarChart';
import CustomPieChart from '../../components/CustomPieChart';
import PatientInformation from './PatientInformation';
import Topbar from '../global/Topbar';
import Topbar2 from '../global/Topbar2';

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

  const handleChartChange = (event, newValue) => {
    setSelectedChart(newValue);
  };

  return (
    <Box sx={{ paddingTop: 0, paddingLeft: 3, paddingRight: 3 }}>
      <Topbar />
      <Topbar2 />
      <Grid container spacing={3} sx={{ marginTop: 0 }}>
        {/* First Column */}
        <Grid item xs={12} md={3}>
          <PatientInformation />
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