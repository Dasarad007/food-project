import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";



function index(){
    var [recipe,setRecipe] = useState([])
    var [cart,setCart] = useState([])
    var [show,setShow] = useState(false)

    function fetchData(){
        var result = ""
        var response = result.json()
        setRecipe(response.recipes)
    }
    useEffect(()=> fetchData(),[])
    return(
        <div>
            {
                recipe.map((item)=>
                <div>
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>
                </div>
                )
            }
        </div>
    )
}

export default index