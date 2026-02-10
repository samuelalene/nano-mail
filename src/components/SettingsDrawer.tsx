import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Divider, IconButton } from '@mui/material';
import { Close, DarkMode, Settings, Notifications, Security } from '@mui/icons-material';
import { useThemeContext } from '../theme/ThemeContext';

interface SettingsDrawerProps {
    open: boolean;
    onClose: () => void;
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ open, onClose }) => {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            PaperProps={{
                className: "w-80 dark:bg-gray-800 dark:text-gray-100"
            }}
        >
            <Box className="h-full flex flex-col">
                <Box className="p-5 flex items-center justify-between border-b dark:border-gray-700">
                    <Typography variant="h6" className="font-bold flex items-center gap-2">
                        <Settings className="text-indigo-600 dark:text-indigo-400" /> Settings
                    </Typography>
                    <IconButton onClick={onClose} className="dark:text-gray-400"><Close /></IconButton>
                </Box>

                <List className="flex-1 py-4">
                    <ListItem>
                        <ListItemIcon><DarkMode className="dark:text-gray-400" /></ListItemIcon>
                        <ListItemText primary="Dark Mode" secondary="Easier on the eyes"
                            secondaryTypographyProps={{ className: "dark:text-gray-500" }}
                        />
                        <Switch
                            checked={mode === 'dark'}
                            onChange={toggleTheme}
                            color="primary"
                        />
                    </ListItem>
                    <Divider className="my-2 dark:border-gray-700" />

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><Notifications className="dark:text-gray-400" /></ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><Security className="dark:text-gray-400" /></ListItemIcon>
                            <ListItemText primary="Privacy & Security" />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Box className="p-4 text-center text-xs text-gray-400 dark:text-gray-600">
                    nanoVOLTZ v1.2.0
                </Box>
            </Box>
        </Drawer>
    );
};

export default SettingsDrawer;
