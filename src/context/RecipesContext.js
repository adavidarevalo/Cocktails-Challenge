import React,{createContext, useState, useEffect} from "react"

export const RecipesContext = createContext()
const RecipesProvider = props =>{
    const [info, addInfo] = useState([])
    const [search, addSearch] = useState({
        name:"",
        Ingredients:""
    })

    const [Loading, setLoading] = useState(false)

    useEffect(()=>{
        const {name, Ingredients} = search
        if(name ===""||Ingredients==="")return;
        const getApi = async() =>{
            setLoading(true)
            const apiUrl = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${Ingredients}`)
            const data = await apiUrl.json()
            addInfo(data.drinks)
            setLoading(false)
        }
        getApi();
    },[search])


    return(
        <RecipesContext.Provider
        value={{
            Loading: Loading,
            addSearch,
            info
        }}>
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider