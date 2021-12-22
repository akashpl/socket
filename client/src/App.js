import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
// import Post from './components/Post';
 import Register from './components/Register';
 import Login from './components/Login';
import Room from './Room'

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} /> 
          <Route path="/Room" element={<Room />} /> 
        
         
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
