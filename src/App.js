import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Error404 from './Components/404/Error404';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <Router>
       
       <Navbar/>
       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/Category/:id' element={<ItemListContainer/>}/> 
          <Route path='/item/detail/:id' element={<ItemDetailContainer/>}/>   
          <Route path='*' element={<Error404/>}/>
       </Routes>
    </Router>
  );
}

export default App;
