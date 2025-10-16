import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  async function fetchData() {
    const result = await fetch("https://dummyjson.com/recipes");
    const response = await result.json();
    setRecipe(response.recipes);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function addToCart(product) {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.error(`${product.name} is in the cart`);
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} is added to the cart`);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  }

  return (
    <div className="app">
      {/* Cart Button */}
      <button className="cart-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Cart" : `Show Cart (${cart.length})`}
      </button>

      <ToastContainer autoClose={2000} /> 

      
      {show && (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name || "recipe"} />
                <span>{item.name}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
      )}

      
      <h1 className="title">Recipe List</h1>
      <div className="recipe-list">
        {recipe.map((item) => (
          <div key={item.id} className="recipe-card">
            <h2>{item.name}</h2>
            <p>Cuisine: {item.cuisine}</p>
            <p>Ingredients: {item.ingredients?.join(", ")}</p>
            <img src={item.image} alt={item.name || "recipe"} />
            <button className="add-btn" onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App


// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [recipe, setRecipe] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [show, setShow] = useState(false);

//   async function fetchData() {
//     const result = await fetch("https://dummyjson.com/recipes");
//     const response = await result.json();
//     setRecipe(response.recipes);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function addToCart(product) {
//     const exists = cart.find(item => item.id === product.id);
//     if (exists) {
//       toast.error(`${product.name} is in the cart`);
//     } else {
//       setCart([...cart, product]);
//       toast.success(`${product.name} is added to the cart`);
//     }
//   }

//   function removeFromCart(id) {
//     setCart(cart.filter(item => item.id !== id));
//     toast.info("Item removed from cart");
//   }

//   return (
//     <div>
//       {/* Cart Button */}
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide Cart" : `Show Cart (${cart.length})`}
//       </button>

//       <ToastContainer autoClose={2000} /> 

//       {show && (
//         <div>
//           <h2>Your Cart</h2>
//           {cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             cart.map((item) => (
//               <div key={item.id}>
//                 <img src={item.image} alt={item.name || "recipe"} />
//                 <span>{item.name}</span>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             ))
//           )}
//         </div>
//       )}

//       <h1>Recipe List</h1>
//       <div>
//         {recipe.map((item) => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>Cuisine: {item.cuisine}</p>
//             <p>Ingredients: {item.ingredients?.join(", ")}</p>
//             <img src={item.image} alt={item.name || "recipe"} />
//             <button onClick={() => addToCart(item)}>Add to cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'



// function App(){
//     var [recipe,setRecipe] = useState([])
//     var [cart,setCart] = useState([])
//     var [show,setShow]= useState(false)

//     async function fetchData(){
//         var result = await fetch ("https://dummyjson.com/recipes")
//         var response = await result.json()
//        setRecipe(response.recipes)
//     }
//   useEffect(()=>{fetchData()},[])

//   function addtocart(product){
//     var exists = cart.find((item)=>item.id == product.id)
//     if(exists){
//         toast.error(`$(product.name) is in the cart`)
//     }else{
//       setCart(...cart,product)
//       toast.success(`$(product.name) item added`)
//     }
//   }
//     return(
//         <div>
//             <button onClick={()=>setShow(!show)}>add to cart
//                {show ? "Hide Cart" : `Show Cart (${cart.length})`}
//             </button>
//  <ToastContainer autoClose = {2000}/>
            
            


//             {
//               <div>
//                 {
//                   recipe.map(item=>(
//                     <div>
//                       <h1>{item.id}</h1>
//                       <h1>{item.name}</h1>
//                       <p>{item.ingredients?.join(", ")}</p>
//                       <img style={{height: "100px",width : "100px"}} src={item.image} alt="" />
//                       <button onClick={()=>addtocart(item)}>added to cart</button>
//                     </div>
                    
//                   ))
                 
//                 }
//                 {

//                   show &&(
//                     cart.map((item)=>
//                     <div>
//                       <h1>{item.name}</h1>
//                       <img src={item.image} alt="" />
//                     </div>
//                     )
//                   )
//                 }
//               </div>
//             }

         
//         </div>

     

//     )
// }
// export default App



// import React, { useReducer } from 'react'

// function Reducer(state,action){
//   switch(action.type){
//   case "increment" :
//     return {count : state.count+1}
//     case "decrement":
//       return {count : state.count-1}
//       case "Reset" :
//       return{count : state.count = 0}
// }
// }


// function App(){
//   var [state,dispatch] = useReducer(Reducer,{count : 0})
//   return(
//     <div>
//         <h1>{state.count}</h1>
//         <button onClick={()=>{dispatch({type : "increment"})}}>increment</button>
//         <button onClick={()=>{dispatch({type : "decrement"})}}>decrement</button>
//         <button onClick={()=>{dispatch ({type : "Reset"})}}>Reset</button>
//     </div>
//   )
// }
// export default App

// import React, { useReducer } from 'react'
// function Reducer(state,action){
// switch(action.type){
//   case "increment" :
//     return {count : state.count+1}
//     case "decrement" :
//       return {count : state.count-1}
//       case "reset" :
//         return {count : state.count=0}
// }
// }


// function App(){
//   var [state,dispatch] = useReducer(Reducer,{count: 0})

// return(
//   <div>
//     <h2>{state.count}</h2>
//       <button onClick={()=>{dispatch({type : "increment"})}}>increment</button>
//       <button onClick={()=>{dispatch({type : "decrement"})}}>decrement</button>
//       <button onClick={()=>{dispatch({type : "reset"})}}>Reset</button>

//   </div>
// )
// }
// export default App

// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";



// function App(){
//     var [recipe,setRecipe] = useState([])
//     var [cart,setCart] = useState([])
//     var [show,setShow] = useState(false)

//     async function fetchData(){
//         var result = await fetch ("https://dummyjson.com/recipes")
//         var response = await result.json()
//         setRecipe(response.recipes)
//     }
//     useEffect(()=> {fetchData()},[])

//     function addtocart(product){
//         var exists = cart.find(item=>item.id === product.id)
//         if(exists){
//                 toast.error(`${product.name} is in the cart`)
//         }else{
//             toast.success(`${product.name} item added`)
//             setCart([...cart,product])
//         }
//     }
//     return(
//         <div> 
//                {
//             show && (
//                 <div>
//                     <h2>your cartt</h2>
                    
//                         {
//                             cart.map((item)=>(
//                                 <div>
//                                     <h1>{item.name}</h1>
//                                     <img src={item.image} style={{height : "100px"}} alt="" />
//                                     <button></button>
//                                 </div>
//                             ))
//                         }
                    
//                 </div>
//             )
//           }
//             <button onClick={()=> setShow(!show)}>cartsss
//                 {show ? "hide cart" : `show cart (${cart.length})`}
//             </button>
//                 {
//                     recipe.map((item)=>(
//                         <div>
//                             <h1>{item.id}</h1>
//                             <h1>{item.name}</h1>
//                             <img style={{height :"100px"}} src={item.image} alt="" />
//                             <button onClick={()=>addtocart(item)}>add to cart</button>
//                         </div>
                       
//                     ))
             
            
//             }
//           <ToastContainer autoClose = {2000}/>

       
//         </div>
//     )
// }

// export default App