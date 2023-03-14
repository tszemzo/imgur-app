import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';

import Home from './routes/Home';
// import ErrorPage from './routes/404';

import './App.css';

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
