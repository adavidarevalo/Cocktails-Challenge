import React,{createContext, useState, useEffect} from "react"

export const RecipesContext = createContext()
const RecipesProvider = props =>{
    const [info, addInfo] = useState([])
    const [search, addSearch] = useState({
        name:"",
        Ingredients:""
    })

    useEffect(()=>{
        const {name, Ingredients} = search
        if(name ===""||Ingredients==="")return;
        const getApi = async() =>{
            const apiUrl = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${Ingredients}`)
            const data = await apiUrl.json()
            addInfo(data.drinks)
        }
        getApi();
    },[search])
    return(
        <RecipesContext.Provider
        value={{
            addSearch,
            info
        }}>
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider