// src/scenes/logout/index.jsx
import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here (e.g., clearing user data, tokens)
    // localStorage.clear(); // Example: clearing local storage
    // After logout logic, redirect to the login page or home page
    navigate('/login');
  }, [navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        You have been logged out.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Thank you for using our service. We hope to see you again soon!
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/login')}>
        Go to Login Page
      </Button>
    </Box>
  );
};

export default Logout;