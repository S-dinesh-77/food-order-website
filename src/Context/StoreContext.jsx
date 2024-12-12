import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

         const [cartItems , setCartItems] = useState(()=>{
            const savedCart = localStorage.getItem("cartItems");
            return savedCart? JSON.parse(savedCart):{};
         });
        
       
         
        
         const addtocart = (itemId)=>{
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
         }

         const removecart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
         }

           
         useEffect(()=>{
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            console.log(cartItems);
            
            },[cartItems]);

    const contextValue={
     food_list,
     cartItems,
     setCartItems,
     addtocart,
     removecart
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider