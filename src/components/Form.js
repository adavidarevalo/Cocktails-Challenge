import React, {useContext, useState} from "react"
import {CategoriesContext} from "../context/categoriesContext"
import {RecipesContext} from "../context/RecipesContext"
import styled from "@emotion/styled"

const FormDiv = styled.div`
text-align: center;
margin-top: 20px;
h2{
  font-size: 1.3rem;
  letter-spacing: 3px;
}
form{
  display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 70%;
margin: 0 auto;
input{
  width: 100%;
  padding: 7px;
  margin-block:10px;
  max-width: 300px;
  margin-inline: 15px;
}
select{
  width: 100%;
  padding: 7px;  
  margin-bottom:10px;
  max-width: 250px;
  margin-inline: 15px;
  outline: none;
}
button{
  padding: 9px 15px;
  border: none;
  border-radius: 3px;
  background: #fd5b1d;
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 25px;
  &:active,
  &:hover{
    background: #e66635;
    box-shadow: 2px 2px 15px 0px rgb(0 0 0 / 20%);
  }
}
}
@media (min-width: 548px){
  form{
    button{
    margin-bottom: 11px;
   }
  }
}
@media (min-width: 898px){
  form{
    select{
      margin-bottom: 0px;
    }
  }
}
@media (min-width: 1088px){
  form{
    button{
    margin-bottom: 0px;
   }
  }
}
`
const ErrorMessage = styled.div`
width: 100%;
p{
background: red;
padding: 10px 25px;
color: white;
border-radius: 4px;
width: 200px;
margin: 0 auto;
}
`

const Form = () =>{
    const [info, addInfo] = useState({
        name:"",
        Ingredients:""
    })
    const [error, addError] = useState(false)
    const {categories} = useContext(CategoriesContext)
    const {addSearch}= useContext(RecipesContext)
    const handleChange = e=>{
        addInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = e =>{
      if(info.name ===""||info.Ingredients===""){
        addError(true)
        return
      }
      addError(false)
      addSearch(info)
    }
    return(
        <FormDiv >
            <h2>Search by Category or Ingredients</h2>
            <form>
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
                onClick={handleClick}>Find Drinks</button>
                {error?(
                  <ErrorMessage>
                  <p>All fields are required</p>
                  </ErrorMessage>
                ): null}
            </form>
        </FormDiv >
    )
}
export default Form