import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TodoDetail from './components/TodoDetail';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
