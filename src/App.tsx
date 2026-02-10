import { AppThemeProvider } from './theme/ThemeContext';
import { MainLayout } from './layouts/MainLayout';
import Inbox from './components/Inbox';

function App() {
  return (
    <AppThemeProvider>
      <MainLayout>
        <Inbox />
      </MainLayout>
    </AppThemeProvider>
  );
}

export default App;