import { useState, useMemo } from 'react';
import type { Email, FilterType } from '../types/index';
import messagesData from '../data/messages.json';

export const useEmails = () =>{
  const [emails, setEmails] = useState<Email[]>(messagesData.emails as Email[]);
  const [filter, setFilter] = useState<FilterType>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  // Memoized filtered list for performance
  const filteredEmails = useMemo(() => {
    return emails.filter((email) => {
      const matchesFilter = 
        filter === 'All' ? true :
        filter === 'Read' ? email.read :
        filter === 'Unread' ? !email.read :
        filter === 'Today' ? email.time === 'Now' : true;

      const matchesSearch = 
        email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm, emails]);

  const selectedEmail = useMemo(() => 
    emails.find(e => e.id === selectedEmailId) || null
  , [selectedEmailId, emails]);

  const selectEmail = (id: string) => {
    setSelectedEmailId(id);
    // Mark as read locally
    setEmails(prev => prev.map(e => e.id === id ? { ...e, read: true } : e));
  };

  return {
    filteredEmails,
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    selectedEmail,
    selectEmail
  };
};