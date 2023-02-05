// import { useState } from 'react'
// import { db } from '../firebase'
// import { collection, getDocs, getDoc, doc, query,where } from 'firebase/firestore'





// const useFirebase = () => {

//   const [productoos, setproductoos] = useState([]);
//   const [productoo, setproductoo] = useState(null);
//   const [filterproductoo, setFilterproductoo] = useState([]);





//   const getCollection = async () => {
//     try {
//       const data = collection(db, "productoos")
//       const col = await getDocs(data)
//       const response = col.docs.map(doc => doc = { id: doc.id, ...doc.data() })
//       setproductoos(response)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getproductoo = async ({ id }) => {
//     try {
//       const document = doc(db, "productoos", id)
//       const response = await getDoc(document)
//       let result = response.data()
//       setproductoo({ id: response.id, ...result })
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   const filtroCategoria = async (categoria) =>{
//     const f = query(collection(db,'productoos'), where('categoria', '==', categoria));
//     const querySnapshot = await getDocs(f);
//     const filtered = [];
//     querySnapshot.forEach(async(doc)=>{
//       const objeto = {categoria: doc.categoria, ...doc.data()};
//       filtered.push(objeto);
//     });
//     setFilterproductoo([...filtered]);

//   }

//   return {
//     productoos,
//     getCollection,
//     getproductoo,
//     filtroCategoria,
//     filterproductoo,
//     productoo
//   }
// }

// export default useFirebase

// import { useState } from 'react';
// import { db } from '../firebase';
// import {collection,getDocs,getDoc,doc,query,where,addDoc,updateDoc} from 'firebase/firestore';

// const useFirebase = () => {
//   const [catalogo, setCatalogo] = useState([]);
//   const [producto, setProducto] = useState({});
//   const [filtrarCatalogo, setFiltrarCatalogo] = useState([]);

//   const getCatalogo = async () => {
//     try {
//       const data = collection(db, 'productos');
//       const coll = await getDocs(data);
//       const response = coll.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
//       setCatalogo(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getproducto = async (id) => {
//     try {
//       const document = doc(db, 'productos', id);
//       const response = await getDoc(document);
//       let result = response.data();
//       setProducto({ id: response.id, ...result });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const filtercatalogo = async (categoria) => {
//     const c = query(collection(db, 'productos'), where('categoria', '==', categoria));
//     const querySnapshot = await getDocs(c);
//     const filtrado = [];
//     querySnapshot.forEach(async (doc) => {
//       const object = { id: doc.id, ...doc.data() };
//       filtrado.push(object);
//     });
//     setFiltrarCatalogo([...filtrado]);
//   };

//   // const sendOrder = async (buyer, itemsId, total) => {
//   //   const order = {
//   //     buyer: {
//   //       email: buyer.email,
//   //       firstname: buyer.firstname,
//   //       lastname: buyer.lastname,
//   //     },
//   //     itemsId: itemsId,
//   //     total: total,
//   //   };
//   //   await addDoc(collection(db, 'orders'), order);
//   // };

//   // const actProducto = async (id, quantity) => {
//   //   console.log(`id: ${id}, quantity: ${quantity}`);
//   //   const orderDoc = doc(db, 'productos', id);
//   //   try {
//   //     await updateDoc(orderDoc, { quantity: quantity });
//   //     console.log('Updated!');
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return {
//     producto,
//     getproducto,
//     catalogo,
//     getCatalogo,
//     filtercatalogo,
//     filtrarCatalogo,
//     // sendOrder,
//     // actProducto,
//   };
// };

// export default useFirebase;

import { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase';


const useFirebase = () => {

const [catalogo, setCatalogo] = useState([])
const [producto, setProducto] = useState(null)
const [loading , setLoading] = useState(false)

useEffect(() => {
    getProductos()

    return () => {
    }
}, [])

useEffect(() => {

}, [catalogo])


const getProductos = async () => {

    try {
        setLoading(true)
        const prodCol = collection(db,'productos')
        await getDocs(prodCol).then((snapshot) => {
            if(snapshot.size === 0) {
                console.log('Base de datos esta vacio')
            }
            setLoading(false)
            setCatalogo(snapshot.docs.map((doc) =>  {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            }))
        })
    } catch (error) {
        console.log(error)
    }
}

const getProduct =  async (id) => {

    try {
        setLoading(true)
        const document = doc(db,"productos",id)
        const response = await getDoc(document)
        setProducto({id:response.id,...response.data()})
        setLoading(false)
    } catch (error) {
        console.log(error)
    }

};

const getTicket = async({datos}) => {
    try {
        const col = collection(db, "ordenes")
        const order = await addDoc(col, datos)
        return (
            setTimeout(() => {
                alert(order.id)
            }, 2000));
    } catch (error) {
        console.log(error)
    }
}




    return {
        loading,
        catalogo,
        producto,
        getProductos,
        getProduct,
        getTicket
    }
}

export default useFirebase