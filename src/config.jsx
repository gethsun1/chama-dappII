// src/config.jsx
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { mainnet, arbitrum } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import React from 'react';

// Create a Query Client for react-query
const queryClient = new QueryClient();

// Your Reown Cloud Project ID (replace with your actual project ID)
const projectId = '3268c03bffd8e52c1b26452048d2ce4c';

// Optional metadata for branding and verification
const metadata = {
  name: 'Chama Dapp',
  description: 'Decentralised Table Banking Dapp',
  url: 'https://mydapp.com',
  icons: ['https://mydapp.com/icon.png'],
};

// Define supported networks
const networks = [mainnet, arbitrum];

// Create the Wagmi adapter (you can swap this with EthersAdapter if required)
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true, // set to false if not using SSR
});

// Initialize AppKit with the adapter, networks, project ID, metadata, etc.
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

// Export a custom provider component to wrap your app
export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
