import React, {createContext, useState, useEffect} from "react"

export const CategoriesContext= createContext()
const CategoriesProvider =(props)=>{
    const [categories, addCategories] = useState([])
    useEffect(()=>{
        const getApi = async() =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const apiUrl = await fetch(url)
            const dataInfo = await apiUrl.json()
            addCategories(dataInfo.drinks)
        }
        getApi()
    },[])
    return(
        <CategoriesContext.Provider
        value={{
            categories
        }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;