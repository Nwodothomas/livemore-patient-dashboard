// src/scenes/notes/Notes.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import Topbar2 from '../global/Topbar2';
import Header from '../../components/Header';

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, date: '2024-06-01', content: 'Patient reported feeling better after the new medication.' },
    { id: 2, date: '2024-06-05', content: 'Scheduled follow-up appointment for next month.' },
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const note = {
        id: notes.length + 1,
        date: new Date().toISOString().split('T')[0],
        content: newNote,
      };
      setNotes([...notes, note]);
      setNewNote('');
    }
  };

  return (
    <Box sx={{ paddingTop: 8, paddingLeft: 3, paddingRight: 3 }}>
      <Topbar2 />
      <Header title="Notes" subtitle="Keep track of your health notes and updates" />
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6" gutterBottom>Existing Notes</Typography>
        <List>
          {notes.map((note) => (
            <ListItem key={note.id}>
              <ListItemText
                primary={<Typography variant="body1">{note.content}</Typography>}
                secondary={<Typography variant="body2" color="textSecondary">Date: {note.date}</Typography>}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>Add a New Note</Typography>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Add a new note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleAddNote}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Notes;