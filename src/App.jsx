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
