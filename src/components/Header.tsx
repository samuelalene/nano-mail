import { Box, Typography, Paper, InputBase, Select, MenuItem, IconButton, Tooltip } from '@mui/material';
import { Search, MoreVert, LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from '../theme/ThemeContext';

const Header = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box className="h-16 flex items-center justify-between px-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md transition-colors duration-300 border-b border-transparent dark:border-gray-700">
      <Box className="flex items-center gap-4">
        <Typography className="font-bold text-xl dark:text-white">nano<span className="text-indigo-600 dark:text-indigo-400">VOLTZ</span></Typography>
        <Select value={1} size="small" variant="standard" disableUnderline className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 px-3 rounded-full">
          <MenuItem value={1}>(Sam Jones) sam.jones@...</MenuItem>
        </Select>
      </Box>
      <Paper elevation={0} className="flex-1 max-w-xl mx-10 flex items-center px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 transition-colors">
        <Search className="text-gray-400 mr-2" fontSize="small" />
        <InputBase placeholder="Global Search" className="w-full text-sm dark:text-gray-200" />
        <MoreVert className="text-gray-400" />
      </Paper>
      <Box className="w-10">
        <Tooltip title={mode === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}>
          <IconButton onClick={toggleTheme} className="text-gray-500 dark:text-gray-400">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Header;