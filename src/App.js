import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/account'
          />
        </Routes>
    </>
  );
}

export default App;