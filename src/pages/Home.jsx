// src/pages/Home.jsx
import React, { useState } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { useConnect, useAccount } from 'wagmi';
import Navbar from '../components/Navbar';

const Home = () => {
  const { connectAsync, connectors } = useConnect();
  const { address } = useAccount();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      console.log('Available connectors:', connectors);
      // Prefer MetaMask; if not available, try WalletConnect.
      let connector = connectors.find((conn) => conn.name === 'MetaMask');
      if (!connector) {
        connector = connectors.find((conn) => conn.id === 'walletConnect');
      }
      if (!connector) {
        console.error('No connector available');
        return;
      }
      const wallet = await connectAsync({ connector });
      console.log('Connected wallet:', wallet);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <>
      <Navbar 
        onConnect={handleConnect} 
        connectedAddress={address} 
        isConnecting={isConnecting}
      />
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
