// src/scenes/hospitals/Hospitals.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Header from '../../components/Header';
import Topbar2 from '../global/Topbar2';

const mockHospitals = [
  {
    id: 1,
    name: 'General Hospital',
    address: '123 Main St, Victorial, Lagos, 12345, NG',
    phone: '555-1234',
    email: 'info@generalhospital.com',
    website: 'http://www.generalhospital.com',
    ehr: 'Epic Systems',
    services: ['Oncology', 'Cardiology', 'Neurology', 'Orthopedics'],
    specialists: [
      { id: 1, name: 'Dr. Emmanuel Chizy', specialization: 'Cardiology', availability: 'Mon-Fri 9am-5pm', email: 'john.doe@generalhospital.com', phone: '555-5678', profilePicture: '/assets/specialist1.png' },
      { id: 2, name: 'Dr. Neol Zara', specialization: 'Neurology', availability: 'Tue-Thu 10am-4pm', email: 'jane.smith@generalhospital.com', phone: '555-8765', profilePicture: '/assets/specialist2.png' }
    ],
    patients: [
      {
        id: 1,
        name: 'John Doe',
        medicalHistory: ['Hypertension', 'Diabetes'],
        medications: ['Amlodipine', 'Metformin'],
        notes: 'Regular follow-ups required for blood sugar levels.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        medicalHistory: ['Asthma'],
        medications: ['Albuterol'],
        notes: 'Monitor respiratory function and adjust medication as needed.'
      }
    ]
  },
  {
    id: 2,
    name: 'City Hospital',
    address: '456 Elm St, Victoria Island, Lagos, 12346, NG',
    phone: '555-4321',
    email: 'info@cityhospital.com',
    website: 'http://www.cityhospital.com',
    ehr: 'Cerner',
    services: ['Oncology', 'Cardiology', 'Neurology', 'Orthopedics'],
    specialists: [
      { id: 3, name: 'Dr. Sarah Connor', specialization: 'Oncology', availability: 'Mon-Wed 10am-4pm', email: 'sarah.connor@cityhospital.com', phone: '555-8765', profilePicture: '/assets/specialist3.png' },
      { id: 4, name: 'Dr. Mike Ross', specialization: 'Orthopedics', availability: 'Fri 8am-2pm', email: 'mike.ross@cityhospital.com', phone: '555-5678', profilePicture: '/assets/specialist4.png' }
    ],
    patients: [
      {
        id: 3,
        name: 'Alice Johnson',
        medicalHistory: ['Breast Cancer'],
        medications: ['Tamoxifen'],
        notes: 'Continue with current medication and regular screening.'
      },
      {
        id: 4,
        name: 'Robert Brown',
        medicalHistory: ['Knee Injury'],
        medications: ['Ibuprofen'],
        notes: 'Physical therapy sessions required twice a week.'
      }
    ]
  }
  // Add more hospitals as needed
];

const Hospitals = ({ searchQuery }) => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: '',
    specialistId: ''
  });
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    // Fetch hospitals from backend (using mock data here)
    setHospitals(mockHospitals);
    setFilteredHospitals(mockHospitals.slice(0, limit));
  }, [limit]);

  useEffect(() => {
    const filtered = hospitals.filter(hospital =>
      hospital.services && hospital.services.some(service =>
        service.toLowerCase().includes(searchQuery?.toLowerCase() || '')
      )
    );
    setFilteredHospitals(filtered.slice(0, limit));
  }, [searchQuery, hospitals, limit]);

  const handleLoadMore = () => {
    setLimit(prevLimit => prevLimit + 6);
  };

  const handleOpenDialog = (hospital) => {
    setSelectedHospital(hospital);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedHospital(null);
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
    <Box sx={{ padding: 8 }}>
      <Topbar2 />
      <Header title="Hospitals" subtitle="Find and book appointments with hospitals and specialists" />
      <Grid container spacing={3}>
        {filteredHospitals.map((hospital) => (
          <Grid item xs={12} md={6} key={hospital.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{hospital.name}</Typography>
              <Typography variant="body2">{hospital.address}</Typography>
              <Typography variant="body2"><strong>Phone:</strong> {hospital.phone}</Typography>
              <Typography variant="body2"><strong>Email:</strong> {hospital.email}</Typography>
              <Typography variant="body2"><strong>Website:</strong> <a href={hospital.website} target="_blank" rel="noopener noreferrer">{hospital.website}</a></Typography>
              <Typography variant="body2"><strong>Services:</strong> {hospital.services.join(', ')}</Typography>
              <Typography variant="body2"><strong>EHR:</strong> {hospital.ehr}</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => handleOpenDialog(hospital)}>
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {filteredHospitals.length < hospitals.length && (
        <Button variant="contained" color="primary" sx={{ marginTop: 3 }} onClick={handleLoadMore}>
          Load More
        </Button>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{selectedHospital?.name}</DialogTitle>
        <DialogContent>
          {selectedHospital && (
            <>
              <Typography variant="h6">Specialists</Typography>
              <List>
                {selectedHospital.specialists.map((specialist) => (
                  <ListItem key={specialist.id}>
                    <ListItemAvatar>
                      <Avatar src={specialist.profilePicture} alt={specialist.name} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={specialist.name}
                      secondary={`${specialist.specialization} - ${specialist.availability}`}
                    />
                    <Button variant="outlined" sx={{ ml: 2 }} onClick={() => setAppointmentForm({ ...appointmentForm, specialistId: specialist.id })}>
                      Select & Chat
                    </Button>
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" sx={{ marginTop: 2 }}>Book Appointment</Typography>
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
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Reason for Appointment"
                      name="reason"
                      value={appointmentForm.reason}
                      onChange={handleAppointmentChange}
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Book Appointment
                </Button>
              </form>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Hospitals;