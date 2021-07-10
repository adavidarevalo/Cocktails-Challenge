import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import RecipesList from "./components/RecipesList"
import Footer from "./components/Footer"


import CategoriesProvider from "./context/categoriesContext"
import RecipesProvider from "./context/RecipesContext"
import ModalProvider from "./context/ModalContext"

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
        <Header/>
        <Form/>
        <RecipesList/>
        <Footer/>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
