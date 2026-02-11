import { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { EmailOutlined, CalendarMonthOutlined, PeopleAltOutlined, SettingsOutlined, CreateOutlined } from '@mui/icons-material';
import ComposeModal from './ComposeModal';
import SettingsDrawer from './SettingsDrawer';

interface SidebarProps {
  activeView: 'email' | 'calendar' | 'contacts';
  onViewChange: (view: 'email' | 'calendar' | 'contacts') => void;
}

const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getIconClass = (view: 'email' | 'calendar' | 'contacts') => {
    const isActive = activeView === view;
    return isActive
      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
      : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";
  };

  return (
    <>
      <Box className="w-20 flex flex-col items-center py-6 justify-between border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
        <Box className="flex flex-col gap-8 items-center">
          <IconButton onClick={() => setIsComposeOpen(true)} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-sm"><CreateOutlined /></IconButton>
          <Box className="flex flex-col gap-4">
            <Tooltip title="Email" placement="right">
              <IconButton
                onClick={() => onViewChange('email')}
                className={`transition-all duration-200 ${getIconClass('email')}`}
              >
                <EmailOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Calendar" placement="right">
              <IconButton
                onClick={() => onViewChange('calendar')}
                className={`transition-all duration-200 ${getIconClass('calendar')}`}
              >
                <CalendarMonthOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Contacts" placement="right">
              <IconButton
                onClick={() => onViewChange('contacts')}
                className={`transition-all duration-200 ${getIconClass('contacts')}`}
              >
                <PeopleAltOutlined />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <IconButton onClick={() => setIsSettingsOpen(true)}><SettingsOutlined className="text-gray-400 dark:text-gray-500 hover:rotate-90 transition-transform duration-500" /></IconButton>
      </Box>

      <ComposeModal open={isComposeOpen} onClose={() => setIsComposeOpen(false)} />
      <SettingsDrawer open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default Sidebar;