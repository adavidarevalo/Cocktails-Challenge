
import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import {keyframes } from "@emotion/react"


const animationContainer = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
100% {
    opacity: 1;
    transform: none;
    }
`


const Container = styled.div`
position: fixed;
width: 100%;
text-align: center;
top: 0px;
background: #fd5b1d;
z-index: 1000;
h2{
    margin: 0px;
    padding: 10px;
    color: #fff;
    animation: ${animationContainer} 1s both;
}
`


const HeaderDown = () =>{
    const [showFixed, setShowFixed] = useState(false)
    useEffect(function () {
        const onScroll = e => {
          const newShowFixed = window.scrollY > 150
          showFixed !== newShowFixed && setShowFixed(newShowFixed)

        }

        document.addEventListener('scroll', onScroll)
    
        return () => document.removeEventListener('scroll', onScroll)
      }, [showFixed])
    return(
        <Container>
              {showFixed && <h2>cocktail recipes</h2>}
        </Container>
    )
}

export default HeaderDown