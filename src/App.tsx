import { useState } from 'react';
import { AppThemeProvider } from './theme/ThemeContext';
import { MainLayout } from './layouts/MainLayout';
import Inbox from './components/Inbox';
import Calendar from './components/Calendar';
import Contacts from './components/Contacts';

function App() {
  const [activeView, setActiveView] = useState<'email' | 'calendar' | 'contacts'>('email');

  return (
    <AppThemeProvider>
      <MainLayout activeView={activeView} onViewChange={setActiveView}>
        {activeView === 'email' && <Inbox />}
        {activeView === 'calendar' && <Calendar />}
        {activeView === 'contacts' && <Contacts />}
      </MainLayout>
    </AppThemeProvider>
  );
}

export default App;