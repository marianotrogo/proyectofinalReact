import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
          <Route path=''/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;