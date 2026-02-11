import { Box, Typography, Paper } from '@mui/material';
import { CalendarMonthOutlined } from '@mui/icons-material';

const Calendar = () => {
  return (
    <Box className="flex h-full w-full bg-white dark:bg-gray-800 rounded-tl-3xl border-l border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300 p-8">
      <Box className="w-full h-full flex flex-col items-center justify-center text-center opacity-50">
        <Paper 
          elevation={0} 
          className="p-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 mb-4"
        >
          <CalendarMonthOutlined className="text-indigo-500 dark:text-indigo-400 text-6xl" sx={{ fontSize: 64 }} />
        </Paper>
        <Typography variant="h5" className="font-bold text-gray-700 dark:text-gray-200 mb-2">
          Calendar
        </Typography>
        <Typography className="text-gray-500 dark:text-gray-400 max-w-sm">
          Your schedule and events will appear here. This feature is coming soon.
        </Typography>
      </Box>
    </Box>
  );
};

export default Calendar;
