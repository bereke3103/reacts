import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './components/AppRouter';

import Navbar from './components/UI/Navbar/Navbar';
import './Styles/App.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
