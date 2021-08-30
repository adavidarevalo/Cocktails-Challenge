import React from 'react'
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'

const ldsEllepsis1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const ldsEllepsis2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`
const ldsEllepsis3 = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const Container = styled.div`
display: inline-block;
position: relative;
width: 80px;
height: 80px;
div{
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fd5b1d;
    animation-timing-function: cubic-bezier(0, 1, 1, 0); 
}
div:nth-of-type(1){
    left: 8px;
    animation: ${ldsEllepsis1} 0.6s infinite; 
}
div:nth-of-type(2){
    left: 8px;
    animation: ${ldsEllepsis2} 0.6s infinite;
}
div:nth-of-type(3) {
    left: 32px;
    animation: ${ldsEllepsis2} 0.6s infinite;
}
div:nth-of-type(4) {
    left: 56px;
    animation: ${ldsEllepsis3} 0.6s infinite;
}
`




const Spinner = () =>{
    return(
        <Container>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    )
}

export default Spinner