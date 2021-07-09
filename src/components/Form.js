import React, {useContext, useState} from "react"
import {CategoriesContext} from "../context/categoriesContext"
import {RecipesContext} from "../context/RecipesContext"

const Form = () =>{
    const [info, addInfo] = useState({
        name:"",
        Ingredients:""
    })
    const {categories} = useContext(CategoriesContext)
    const {addSearch}= useContext(RecipesContext)
    const handleChange = e=>{
        addInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <legend>Search by Category or Ingredients</legend>
            <div>
                <input 
                placeholder="Search by Ingredients"
                name="name"
                onChange={handleChange}></input>
                <select
                name="Ingredients"
                onChange={handleChange}>
                    <option>--Select a Category--</option>
                    {categories.map(categorie=>(
                        <option 
                        key={categorie.strCategory}
                        value={categorie.strCategory}>
                            {categorie.strCategory}
                        </option>
                    ))}
                </select>
                <button
                type="button"
                onClick={e=>addSearch(info)}>Find Drinks</button>
            </div>
        </div>
    )
}
export default Form