import React from "react"
import styled from "@emotion/styled"
const HeaderDiv = styled.header`
background: #ff4600db;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
color: white;
min-height: 150px;
`

const Header = () =>{
    return(
      <HeaderDiv>
        <h2>cocktail recipes</h2>
      </HeaderDiv>
    )
}
export default Header