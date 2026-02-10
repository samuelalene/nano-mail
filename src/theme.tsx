import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#5e5adb' },
        background: {
            default: '#F8F9FD',
            paper: '#ffffff',
        },
        text: {
            primary: '#1f2937', // gray-800
            secondary: '#6b7280', // gray-500
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#818cf8' }, // Indigo-400 for better contrast on dark
        background: {
            default: '#111827', // gray-900
            paper: '#1f2937', // gray-800
        },
        text: {
            primary: '#f3f4f6', // gray-100
            secondary: '#9ca3af', // gray-400
        },
    },
});
