import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { functionalityList } from "./utils/constants";
import AppDrawer from './components/AppDrawer'
import CWT from './routes/CWT';
import Home from './routes/Home';
import JWT from "./routes/JWT";
import Encryption from "./routes/Encryptions";
import Decryption from "./routes/Decryption";
import KeyGeneration from "./routes/KeyGeneration";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const componentsList = [<CWT />, <JWT />, <Encryption />, <Decryption />, <KeyGeneration />];

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <AppDrawer />
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              {functionalityList.map((functionality, index) => (
                <Route path={functionality} element={componentsList[index]} />
              ))}
            </Routes>
          </header>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
