// src/components/Navbar.jsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = ({ onConnect, connectedAddress, isConnecting }) => {
  const [internalConnecting, setInternalConnecting] = useState(false);

  const handleConnectClick = async () => {
    if (!onConnect || internalConnecting) return;
    setInternalConnecting(true);
    try {
      await onConnect();
    } catch (error) {
      console.error('Connection failed:', error);
    } finally {
      setInternalConnecting(false);
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chama DApp
        </Typography>
        {connectedAddress ? (
          <Typography
            variant="body1"
            sx={{ fontFamily: 'monospace', backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px' }}
          >
            {connectedAddress.slice(0, 6)}...{connectedAddress.slice(-4)}
          </Typography>
        ) : (
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleConnectClick} 
            disabled={isConnecting || internalConnecting}
          >
            {isConnecting || internalConnecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
