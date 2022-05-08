import './App.css';
import AppDrawer from './components/AppDrawer'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <AppDrawer />
      <header className="App-header">
        Samsung PRISM
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;







