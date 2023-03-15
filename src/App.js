import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';

import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Details from './routes/Details';
import ErrorPage from "./routes/404";

import './App.css';

function App() {
  return (
    <CssBaseline>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CssBaseline>
  );
}

export default App;
