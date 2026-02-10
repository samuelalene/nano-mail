import { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { EmailOutlined, CalendarMonthOutlined, PeopleAltOutlined, SettingsOutlined, CreateOutlined } from '@mui/icons-material';
import ComposeModal from './ComposeModal';
import SettingsDrawer from './SettingsDrawer';

const Sidebar = () => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <Box className="w-20 flex flex-col items-center py-6 justify-between border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
        <Box className="flex flex-col gap-8 items-center">
          <IconButton onClick={() => setIsComposeOpen(true)} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-sm"><CreateOutlined /></IconButton>
          <Box className="flex flex-col gap-6">
            <Tooltip title="Email" placement="right"><IconButton className="text-indigo-600 dark:text-indigo-400"><EmailOutlined /></IconButton></Tooltip>
            <Tooltip title="Calendar" placement="right"><IconButton className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><CalendarMonthOutlined /></IconButton></Tooltip>
            <Tooltip title="Contacts" placement="right"><IconButton className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"><PeopleAltOutlined /></IconButton></Tooltip>
          </Box>
        </Box>
        <IconButton onClick={() => setIsSettingsOpen(true)}><SettingsOutlined className="text-gray-400 dark:text-gray-500" /></IconButton>
      </Box>

      <ComposeModal open={isComposeOpen} onClose={() => setIsComposeOpen(false)} />
      <SettingsDrawer open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default Sidebar;