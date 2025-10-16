import React, { useState } from 'react'

function practice(){
    var [recipe,setRecipe] = useState([])
    var [cart,setCart] = useState([])
    var [show,setShow]= useState([])

    async function fetchData(){
        var result = await fetch ("https://dummyjson.com/recipes")
        var response = await result.json()
       setRecipe(response.recipes)
    }
  fetchData()
    return(
        <div>
            <button o>add to cart</button>
        </div>
    )
}
export default practice