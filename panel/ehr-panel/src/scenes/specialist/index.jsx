// src/scenes/specialists/Specialists.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Grid, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Header from '../../components/Header';
import Chat from './chats';
import Topbar2 from '../global/Topbar2';

const mockSpecialists = [
  {
    id: 1,
    name: 'Dr. Emmanuel Chizy',
    specialization: 'Cardiology',
    qualifications: 'MBBS, MD',
    experience: '10 years',
    availability: 'Mon-Fri 9am-5pm',
    email: 'john.doe@generalhospital.com',
    phone: '555-5678',
    profilePicture: '/assets/specialist1.png',
    hospital: 'General Hospital',
    languages: 'English, Spanish'
  },
  {
    id: 2,
    name: 'Dr. Neol Zara',
    specialization: 'Neurology',
    qualifications: 'MBBS, PhD',
    experience: '8 years',
    availability: 'Tue-Thu 10am-4pm',
    email: 'jane.smith@generalhospital.com',
    phone: '555-8765',
    profilePicture: '/assets/specialist2.png',
    hospital: 'General Hospital',
    languages: 'English, French'
  }
];

const Specialists = ({ searchQuery }) => {
  const [specialists, setSpecialists] = useState([]);
  const [filteredSpecialists, setFilteredSpecialists] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: '',
    specialistId: ''
  });

  useEffect(() => {
    // Fetch specialists from backend (using mock data here)
    setSpecialists(mockSpecialists);
    setFilteredSpecialists(mockSpecialists);
  }, []);

  useEffect(() => {
    const filtered = specialists.filter(specialist =>
      specialist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialist.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialist.hospital.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSpecialists(filtered);
  }, [searchQuery, specialists]);

  const handleOpenDialog = (specialist) => {
    setSelectedSpecialist(specialist);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSpecialist(null);
  };

  const handleOpenChat = (specialist) => {
    setSelectedSpecialist(specialist);
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedSpecialist(null);
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
      <Header title="Specialists" subtitle="Find and book appointments with specialists" />
      <Grid container spacing={3}>
        {filteredSpecialists.map((specialist) => (
          <Grid item xs={12} md={6} key={specialist.id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar src={specialist.profilePicture} alt={specialist.name} sx={{ width: 56, height: 56 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">{specialist.name}</Typography>
                  <Typography variant="body2"><strong>Specialization:</strong> {specialist.specialization}</Typography>
                  <Typography variant="body2"><strong>Qualifications:</strong> {specialist.qualifications}</Typography>
                  <Typography variant="body2"><strong>Experience:</strong> {specialist.experience}</Typography>
                  <Typography variant="body2"><strong>Hospital:</strong> {specialist.hospital}</Typography>
                  <Typography variant="body2"><strong>Languages:</strong> {specialist.languages}</Typography>
                  <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => handleOpenDialog(specialist)}>
                    View Availability & Book Appointment
                  </Button>
                  <Button variant="contained" color="secondary" sx={{ marginTop: 2, marginLeft: 2 }} onClick={() => handleOpenChat(specialist)}>
                    Chat
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{selectedSpecialist?.name}</DialogTitle>
        <DialogContent>
          {selectedSpecialist && (
            <>
              <Typography variant="h6">Availability</Typography>
              <Typography variant="body2">{selectedSpecialist.availability}</Typography>
              
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

      <Dialog open={openChat} onClose={handleCloseChat} maxWidth="md" fullWidth>
        <DialogTitle>Chat with {selectedSpecialist?.name}</DialogTitle>
        <DialogContent>
          {selectedSpecialist && <Chat specialistName={selectedSpecialist.name} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChat}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Specialists;