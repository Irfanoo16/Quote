import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './components/profileCard/ProfileCard';
import Likelist from './pages/likelist/Likelist';
import Quote from './pages/quoteStore/Quote';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Quote/:uniqueId' element={<Quote />} />
        <Route path='/' element={<Login />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Likelist' element={<Likelist />} />
      </Routes>
    </>
  );
}

export default App;
