// src/components/Header.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;