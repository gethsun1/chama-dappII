// src/pages/Home.jsx
import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useAppKit } from '@reown/appkit/react'; // Updated hook name
import Navbar from '../components/Navbar';

const Home = () => {
  const { connect, account } = useAppKit(); // Use useAppKit instead of useReown
  const [connectedAddress, setConnectedAddress] = useState(null);

  const handleConnect = async () => {
    try {
      const wallet = await connect(); // Trigger wallet connection
      if (wallet) {
        setConnectedAddress(wallet.address);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <>
      <Navbar onConnect={handleConnect} connectedAddress={connectedAddress || account?.address} />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Empowering Decentralized Savings
            </Typography>
            <Typography variant="h6" gutterBottom>
              Create or join a Chama and manage your group savings with complete transparency.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="/assets/react.svg" alt="Chama DApp illustration" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
