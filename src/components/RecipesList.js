import React, {useContext} from "react"
import {RecipesContext} from "../context/RecipesContext"
import {ModalContext} from "../context/ModalContext"
import Recipes from "./Recipes.js"
import styled from "@emotion/styled"
import Spinner from './Spinner'
const RecipesListDiv = styled.div`
padding-bottom: 150px;
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 10000px;
`


const RecipesList = () =>{
    const {info, Loading} = useContext(RecipesContext)
    const {addID} = useContext(ModalContext)

    
    return(
        <RecipesListDiv>
            {Loading?
            <Spinner />
            :
            info.map(drinks=>(
                <div key={drinks.idDrink}>
                    <Recipes drinks={drinks} addID={addID}/>
                </div>
            ))
            }
        </RecipesListDiv>
    )
}

export default RecipesList;