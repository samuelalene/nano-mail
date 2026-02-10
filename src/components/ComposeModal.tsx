import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button, TextField, Box, IconButton, Typography } from '@mui/material';
import { Close, Send } from '@mui/icons-material';

interface ComposeModalProps {
    open: boolean;
    onClose: () => void;
}

const ComposeModal: React.FC<ComposeModalProps> = ({ open, onClose }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        // In a real app, this would send the email
        console.log({ to, subject, body });
        onClose();
        setTo('');
        setSubject('');
        setBody('');
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            PaperProps={{
                className: "dark:bg-gray-800 dark:text-gray-100 rounded-2xl"
            }}
        >
            <Box className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <Typography variant="h6" className="font-bold">New Message</Typography>
                <IconButton onClick={onClose} size="small" className="dark:text-gray-400">
                    <Close />
                </IconButton>
            </Box>

            <DialogContent className="flex flex-col gap-4 py-6">
                <TextField
                    label="To"
                    fullWidth
                    variant="standard"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    InputLabelProps={{ className: "dark:text-gray-400" }}
                    InputProps={{ className: "dark:text-gray-100 dark:border-gray-600" }}
                />
                <TextField
                    label="Subject"
                    fullWidth
                    variant="standard"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    InputLabelProps={{ className: "dark:text-gray-400" }}
                    InputProps={{ className: "dark:text-gray-100 dark:border-gray-600" }}
                />
                <TextField
                    multiline
                    rows={12}
                    placeholder="Write your message here..."
                    variant="standard"
                    InputProps={{ disableUnderline: true, className: "dark:text-gray-100" }}
                    className="mt-4"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </DialogContent>

            <DialogActions className="p-4 border-t dark:border-gray-700">
                <Button onClick={onClose} className="text-gray-500 dark:text-gray-400">Discard</Button>
                <Button
                    variant="contained"
                    className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6 capitalize"
                    endIcon={<Send fontSize="small" />}
                    onClick={handleSend}
                >
                    Send
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ComposeModal;
