// import { createContext, useEffect, useState } from "react";


// export const CartContext = createContext()

// const Provider = (props) => {
//     const [cart, setCart] = useState([])
//     const [suma, setSuma] = useState(0)

//     const totalCart = () => {
//         let  suma = 0
//         cart.forEach(item => suma += (item.precio * item.stock));
//         setSuma(suma)
//     }

//     useEffect(() => {
//         console.log(cart)
//         totalCart()
//     }, [cart])

//     const addToCart = (item, cantidad) => {
//         if (isInCart(item.id)) {
//             cart.map(product => {
//                 if(product.id === item.id){
//                     product.cantidad = cantidad
//                     console.log('cart', cart)
//                     setCart(cart)
//                 }
//             })
            
//         } else {
//             setCart([...cart, { ...item, cantidad }]);
//         }
//     }

//     const isInCart = (id) => {
//         return cart.some((item) => item.id === id);
//     };

//     const deleteOne = (id) => {
//         const productosFiltrados = cart.filter((prod) => prod.id !== id);
//         setCart(productosFiltrados);
//     }

//     const deleteAll = () => {
//         setCart([])
//     }

//     return (
//          <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, suma }}>
//             {props.children}
//         </CartContext.Provider>
//     )
// }

// export default Provider
import React, {createContext, useState} from 'react'



export const CartContext = createContext('');

const CarritoContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    //Limpiar carrito
    const limpiarCarrito = () => setCarrito([])

    //Verificar si el producto ya esta en el carrito
    const isInCarrito = (id) => {
        return carrito.find((producto)=> producto.item.id === id) ? true : false;
    }

    //Borrar carrito
    const borrarProducto = (id) => {
        let bProducto = carrito.filter((item) => item.item.id !== id)
        setCarrito(bProducto)
    }

    //Agregar al carrito
    const onAddProducto = (item, quantity) => {
        if (isInCarrito(item.item.id)) {
            setCarrito(carrito.map((producto) => {
                return producto.id === item.id ? {...producto, quantity: producto.quantity + quantity} : producto
            }));
        }else{
            setCarrito([...carrito, {...item, quantity}])
        }
        // toast(`Agregaste ${quantity} unidades al carrito`, {
		// 	position: "bottom-right",
		// 	autoClose: 2000,
		// 	hideProgressBar: false,
		// 	draggable: true,
		// 	theme: "dark",
		// 	});
    }

    //Validar que este completo el formulario
    // const validarFormulario = (campos) => {
    //     return campos.some((campo) => campo === "")
    // }

    //Total Compra
    const totalCompra = () => {
        return carrito.reduce((acumulador, producto) =>  acumulador + producto.item.precio * producto.quantity, 0)
    }
    

    //Total de productos
    const totalProductos = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return (
        <CartContext.Provider value={{
            totalCompra,
            totalProductos,
            // validarFormulario,
            onAddProducto,
            limpiarCarrito, 
            isInCarrito, 
            borrarProducto,
            carrito}}> 
            {children}    
        </CartContext.Provider>
    )
}

export default CarritoContextProvider