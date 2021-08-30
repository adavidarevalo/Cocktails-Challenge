
import styled from "@emotion/styled"
import {keyframes } from '@emotion/react'

const AnimationContainer = keyframes`
0% {opacity: 0;}
100% {opacity: 1;}
`

export const IMG = styled.img`
animation: ${AnimationContainer} 1.5s both;
`

