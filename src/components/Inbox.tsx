import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Chip, Divider, InputBase, Paper } from '@mui/material';
import { Search, MailLockOutlined } from '@mui/icons-material';
import { useEmails } from '../hooks/useEmails';

const Inbox = () => {
  const { filteredEmails, filter, setFilter, searchTerm, setSearchTerm, selectedEmail, selectEmail } = useEmails();

  return (
    <Box className="flex h-full w-full bg-white dark:bg-gray-800 rounded-tl-3xl border-l border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
      {/* Email List Sidebar */}
      <Box className="w-1/3 flex flex-col border-r border-gray-100 dark:border-gray-700 min-w-[360px]">
        <Box className="p-5 flex flex-col gap-4">
          <Typography variant="h6" className="font-bold dark:text-gray-100">Inbox ({filteredEmails.length})</Typography>
          <Box className="flex gap-2">
            {(['All', 'Read', 'Today', 'Unread'] as const).map((label) => (
              <Chip
                key={label}
                label={label}
                onClick={() => setFilter(label)}
                variant={filter === label ? 'filled' : 'outlined'}
                className={filter === label
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
                  : 'dark:text-gray-300 dark:border-gray-600'}
              />
            ))}
          </Box>
        </Box>

        <Box className="px-4 py-2">
          <Paper elevation={0} className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors">
            <Search className="text-gray-400 mr-2" />
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm w-full dark:text-gray-200"
            />
          </Paper>
        </Box>

        <List className="flex-1 overflow-y-auto pt-0">
          {filteredEmails.map((email) => (
            <ListItem key={email.id} disablePadding className="border-b border-gray-50 dark:border-gray-700">
              <ListItemButton
                onClick={() => selectEmail(email.id)}
                selected={selectedEmail?.id === email.id}
                className={`px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${selectedEmail?.id === email.id ? '!bg-indigo-50 dark:!bg-indigo-900/20' : ''}`}
              >
                <ListItemAvatar>
                  <Avatar src={`https://i.pravatar.cc/150?u=${email.id}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Box className="flex justify-between font-bold text-sm dark:text-gray-200"><span>{email.sender}</span><span className="text-xs text-gray-400">{email.time}</span></Box>}
                  secondary={<Typography variant="caption" className="line-clamp-1 text-gray-500 dark:text-gray-400">{email.subject}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Email Viewer */}
      <Box className="flex-1 bg-gray-50/30 dark:bg-gray-900/50 flex items-center justify-center p-10 transition-colors">
        {selectedEmail ? (
          <Box className="w-full h-full flex flex-col">
            <Typography variant="h4" className="font-bold mb-4 dark:text-gray-100">{selectedEmail.subject}</Typography>
            <Divider className="mb-6 dark:border-gray-700" />
            <Typography className="whitespace-pre-line text-gray-700 dark:text-gray-300">{selectedEmail.content}</Typography>
          </Box>
        ) : (
          <Box className="text-center opacity-30 dark:opacity-50 dark:text-gray-400">
            <MailLockOutlined sx={{ fontSize: 60 }} />
            <Typography>Select an email to view its contents</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Inbox;