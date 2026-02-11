import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
  activeView: 'email' | 'calendar' | 'contacts';
  onViewChange: (view: 'email' | 'calendar' | 'contacts') => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, activeView, onViewChange }) => (
  <Box className="flex h-screen w-screen overflow-hidden bg-[#F8F9FD] dark:bg-gray-900 transition-colors duration-300">
    <Sidebar activeView={activeView} onViewChange={onViewChange} />
    <Box className="flex-1 flex flex-col">
      <Header />
      <Box className="flex-1 overflow-hidden">{children}</Box>
    </Box>
  </Box>
);