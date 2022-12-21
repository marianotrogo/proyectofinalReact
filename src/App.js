import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Chekout/Checkout';
import Error404 from './Components/404/Error404';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <Router>
       
       <Navbar/>
       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Category/:id' element={<ItemListContainer/>}/> 
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/item/detail/:id' element={<ItemDetailContainer/>}/> 
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
       </Routes>
    </Router>
  );
}

export default App;
