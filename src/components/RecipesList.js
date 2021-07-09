import React, {useContext} from "react"
import {RecipesContext} from "../context/RecipesContext"
import {ModalContext} from "../context/ModalContext"
import Recipes from "./Recipes.js"


const RecipesList = () =>{
    const {info} = useContext(RecipesContext)
    const {addID} = useContext(ModalContext)
    return(
        <div>
            {info.map(drinks=>(
                <div key={drinks.idDrink}>
                    <Recipes drinks={drinks} addID={addID}/>
                </div>
            ))}
        </div>
    )
}

export default RecipesList;