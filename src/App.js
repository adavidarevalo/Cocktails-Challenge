import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import RecipesList from "./components/RecipesList"
import Footer from "./components/Footer"

import CategoriesProvider from "./context/categoriesContext"
import RecipesProvider from "./context/RecipesContext"
import ModalProvider from "./context/ModalContext"
import styled from "@emotion/styled"
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #e2dfdf;
`



function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
        <AppContainer>
          <Header/>
          <Form/>
          <RecipesList/>
          <Footer />
          </AppContainer>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
