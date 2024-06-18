// src/scenes/chatai/ChatAI.jsx
import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Grid } from '@mui/material';
import Header from '../../components/Header';
import Topbar2 from '../global/Topbar2';

// Mock function to simulate AI responses
const getAIResponse = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (message.toLowerCase().includes('risk')) {
        resolve("Based on your health data, there is a moderate risk of cardiovascular disease. Please consider regular exercise and a balanced diet.");
      } else if (message.toLowerCase().includes('treatment')) {
        resolve("The suggested treatment is a combination of medication and physical therapy. Please consult with your specialist for approval.");
      } else {
        resolve("I'm here to help you with any health-related queries. How can I assist you today?");
      }
    }, 1000);
  });
};

const ChatAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const userMessage = { sender: 'patient', text: input };
      setMessages([...messages, userMessage]);
      setInput('');

      const aiResponse = await getAIResponse(input);
      const aiMessage = { sender: 'ai', text: aiResponse };
      setMessages([...messages, userMessage, aiMessage]);
    }
  };

  return (
    <Box sx={{ paddingTop: 8, paddingLeft: 3, paddingRight: 3 }}>
      <Topbar2 />
      <Header title="Chat AI" subtitle="Interact with our AI for health-related queries" />
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2, height: '60vh', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.sender === 'patient' ? 'flex-end' : 'flex-start',
              mb: 1
            }}
          >
            <Paper
              sx={{
                padding: 1,
                backgroundColor: message.sender === 'patient' ? '#d1e7dd' : '#f8d7da',
                maxWidth: '70%'
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
            </Paper>
          </Box>
        ))}
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatAI;