export interface Email {  // Must have 'export'
  id: string;
  sender: string;
  senderEmail: string;
  subject: string;
  content: string;
  preview: string;
  time: string;
  read: boolean;
}

export type FilterType = 'All' | 'Read' | 'Today' | 'Unread'; // Must have 'export'