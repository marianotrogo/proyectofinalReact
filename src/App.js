import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Provider from './Context/CartContext';
import Cart from './Components/Cart/Cart';


function App() {

  return (
    <Provider>
    <BrowserRouter>
      <Navbar/>      
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="Item/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    );
}

export default App;