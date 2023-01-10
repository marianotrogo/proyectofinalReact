import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';





function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path='/ItemListContainer' element={<ItemListContainer/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;