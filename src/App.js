import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from './routes/Home';
// import ErrorPage from './routes/404';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
