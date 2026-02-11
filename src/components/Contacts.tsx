import { Box, Typography, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';
import { PeopleAltOutlined, Search } from '@mui/icons-material';

const Contacts = () => {
    // Mock data for contacts
    const contacts = [
        { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Product Designer' },
        { id: 2, name: 'Sarah Wilson', email: 'sarah.w@example.com', role: 'Engineering Manager' },
        { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', role: 'Frontend Developer' },
        { id: 4, name: 'Emily Davis', email: 'emily.d@example.com', role: 'Product Manager' },
        { id: 5, name: 'David Kim', email: 'd.kim@example.com', role: 'Backend Developer' },
    ];

    return (
        <Box className="flex h-full w-full bg-white dark:bg-gray-800 rounded-tl-3xl border-l border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
            <Box className="w-full p-8 flex flex-col">
                <Box className="flex items-center justify-between mb-8">
                    <Box className="flex items-center gap-4">
                        <Box className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20">
                            <PeopleAltOutlined className="text-indigo-600 dark:text-indigo-400" />
                        </Box>
                        <Box>
                            <Typography variant="h5" className="font-bold text-gray-800 dark:text-gray-100">
                                Contacts
                            </Typography>
                            <Typography variant="body2" className="text-gray-500 dark:text-gray-400">
                                {contacts.length} active contacts
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Paper elevation={0} className="mb-6 flex items-center px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 transition-colors">
                    <Search className="text-gray-400 mr-3" />
                    <Typography className="text-gray-400 text-sm">Search contacts...</Typography>
                </Paper>

                <Box className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex-1">
                    <List className="p-0">
                        {contacts.map((contact, index) => (
                            <div key={contact.id}>
                                <ListItem className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors py-4 px-6 cursor-pointer">
                                    <ListItemAvatar>
                                        <Avatar
                                            src={`https://i.pravatar.cc/150?u=${contact.email}`}
                                            className="bg-indigo-100 text-indigo-600"
                                        >
                                            {contact.name[0]}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography className="font-semibold text-gray-700 dark:text-gray-200">{contact.name}</Typography>}
                                        secondary={<Typography variant="body2" className="text-gray-500 dark:text-gray-400">{contact.email}</Typography>}
                                    />
                                    <Box className="hidden sm:block">
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                                            {contact.role}
                                        </span>
                                    </Box>
                                </ListItem>
                                {index < contacts.length - 1 && <Divider component="li" className="dark:border-gray-700" />}
                            </div>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Contacts;
