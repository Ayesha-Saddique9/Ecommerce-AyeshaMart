import React, { createContext, useState } from 'react'

export const Context = createContext();
function CartContext ({children}) {
const [cart,setCart] = useState([]);
function addToCart(product){
 const existingItem = cart.find((item)=> item.id === product.id);
 if(existingItem){
  increaseQuantity(product.id)
 }
 else{
  setCart([...cart,{...product,quantity:1}]);
 }
}
function increaseQuantity(id){
  setCart(
  cart.map((item)=>{
    if(item.id === id){
      return {...item,quantity:item.quantity+1}
     }
     else{
      return item;
     }
  }))
}
function decreaseQuantity(id){
  setCart(
  cart.map((item)=>{
    if(item.id === id && item.quantity>1){
      return {...item,quantity:item.quantity-1};
     }
     else{
      return item;
     }
  }))
}
function removeFromCart(id){
 const newCart = cart.filter((item)=>item.id !== id);
 setCart(newCart)
}

function clearCart(){
  setCart([]);
}
  return (
    <div>
      <Context.Provider value={{cart,addToCart,increaseQuantity,decreaseQuantity,removeFromCart,clearCart}}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default CartContext
