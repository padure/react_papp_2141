import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
//Components
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
//Styles
import './index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
)
