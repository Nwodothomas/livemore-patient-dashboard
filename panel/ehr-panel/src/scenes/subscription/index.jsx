// src/scenes/subscription/index.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Card, CardContent, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const Subscription = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [billingHistory] = useState([
    { date: '2023-12-01', amount: '$50', status: 'Paid' },
    { date: '2023-11-01', amount: '$50', status: 'Paid' },
    { date: '2023-10-01', amount: '$50', status: 'Paid' },
  ]);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <Box p={3} sx={{ backgroundColor: colors.primary[400], minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        Subscription
      </Typography>

      {/* Current Plan */}
      <Box mt={2} mb={4}>
        <Typography variant="h6">Current Plan</Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Plan: Basic Plan</Typography>
            <Typography variant="body1">Expiry Date: 2024-12-31</Typography>
            <Typography variant="body1">Benefits:</Typography>
            <ul>
              <li>Access to all features</li>
              <li>Priority customer support</li>
              <li>Free updates</li>
            </ul>
          </CardContent>
        </Card>
      </Box>

      {/* Available Plans */}
      <Box mt={4} mb={4}>
        <Typography variant="h6">Available Plans</Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Card sx={{ width: '30%' }}>
            <CardContent>
              <Typography variant="h6">Basic Plan</Typography>
              <Typography variant="body1">$50/month</Typography>
              <Typography variant="body2">Basic features and support</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Select Plan
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ width: '30%' }}>
            <CardContent>
              <Typography variant="h6">Standard Plan</Typography>
              <Typography variant="body1">$100/month</Typography>
              <Typography variant="body2">Standard features and support</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Select Plan
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ width: '30%' }}>
            <CardContent>
              <Typography variant="h6">Premium Plan</Typography>
              <Typography variant="body1">$150/month</Typography>
              <Typography variant="body2">All features and premium support</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Select Plan
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Billing Information */}
      <Box mt={4} mb={4}>
        <Typography variant="h6">Billing Information</Typography>
        <Box mt={2}>
          <Typography variant="body1">Payment Method</Typography>
          <TextField
            fullWidth
            label="Card Number"
            margin="normal"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Update Payment Method
          </Button>
        </Box>
      </Box>

      {/* Billing History */}
      <Box mt={4} mb={4}>
        <Typography variant="h6">Billing History</Typography>
        <Box mt={2}>
          {billingHistory.map((bill, index) => (
            <Box key={index} display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="body2">{bill.date}</Typography>
              <Typography variant="body2">{bill.amount}</Typography>
              <Typography variant="body2">{bill.status}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Actions */}
      <Box mt={4}>
        <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
          Cancel Subscription
        </Button>
        <Button variant="contained" color="primary">
          Renew Subscription
        </Button>
      </Box>
    </Box>
  );
};

export default Subscription;