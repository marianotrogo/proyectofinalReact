import { useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, getDoc, doc, query,where } from 'firebase/firestore'




const useFirebase = () => {

  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState(null);
  const [filterProducto, setFilterProducto] = useState([]);




  const getCollection = async () => {
    try {
      const data = collection(db, "productos")
      const col = await getDocs(data)
      const response = col.docs.map(doc => doc = { id: doc.id, ...doc.data() })
      setProductos(response)
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = async ({ id }) => {
    try {
      const document = doc(db, "productos", id)
      const response = await getDoc(document)
      let result = response.data()
      setProducto({ id: response.id, ...result })
    } catch (error) {
      console.log(error)
    }
  };

  const filtroProducto = async (categoria) =>{
    const f = query(collection(db,"productos"), where('categoria', '==', categoria));
    const querySnapshot = await getDocs(f);
    const filtered = [];
    querySnapshot.forEach(async(doc)=>{
      const objeto = {id: doc.id, ...doc.data()};
      filtered.push(objeto);
    });
    setFilterProducto([...filtered]);
  }

  return {
    productos,
    getCollection,
    getProduct,
    filtroProducto,
    filterProducto,
    producto
  }
}

export default useFirebase