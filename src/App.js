import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './Components/Navbar/Navbar';
import Error404 from './Components/Error404/Error404';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} / >
        <Route path='/item/detail/:id/:name/:img/:detalle/:precio' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Error404/>} / > 
      </Routes>
    </Router>
  );
}

export default App;