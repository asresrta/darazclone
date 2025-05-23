"use client"
import React, { createContext, useReducer } from "react";

export const CartContext=createContext();

export let reducer=(state,action)=>{
    switch(action.type){
        case 'add':return{cart:[...state.cart,action.payload]}
    }
}

const ContextProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,{cart:[]});

 return(
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
 )
}

export default ContextProvider