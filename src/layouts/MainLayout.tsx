import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box } from '@mui/material';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box className="flex h-screen w-screen overflow-hidden bg-[#F8F9FD] dark:bg-gray-900 transition-colors duration-300">
    <Sidebar />
    <Box className="flex-1 flex flex-col">
      <Header />
      <Box className="flex-1 overflow-hidden">{children}</Box>
    </Box>
  </Box>
);