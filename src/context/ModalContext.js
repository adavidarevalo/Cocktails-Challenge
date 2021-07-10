import React, {useState, createContext, useEffect} from "react"

export const ModalContext = createContext()

const ModalProvider = props =>{
    const [ID, addID] = useState(null)
    const [drinksContain, addDrinks] = useState([])
    useEffect(()=>{
        if(ID === null) return;
        const getApi = async()=>{
            const apiUrl = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${ID}`)
            const data = await apiUrl.json()
            addDrinks(data.drinks[0])
        }
        getApi();
    },[ID])
    return(
        <ModalContext.Provider
        value={{
            addID,
            drinksContain,
            addDrinks
        }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider