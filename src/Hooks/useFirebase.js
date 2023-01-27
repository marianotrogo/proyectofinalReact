import { useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'



const useFirebase = () => {

    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);
    



    const getCollection = async () => {
        try {
          const prodColl = collection(db,"productos")
          const col = await getDocs(prodColl)
          const response = col.docs.map(doc => doc={id:doc.id,...doc.data()})
          setProductos(response)
        } catch (error) {
          console.log(error);
        }
    
      };
      const getProduct =  async ({id}) => {
        try {
            const document = doc(db,"productos",id)
            const response = await getDoc(document)
            let result =response.data()
            setProducto({id:response.id,...result})
    
        } catch (error) {
            console.log(error)
        }
      };

    return {
        productos,
        getCollection,
        getProduct,
        producto
    }
}

export default useFirebase