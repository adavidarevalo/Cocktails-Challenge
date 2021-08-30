import React, {Fragment, useState, useContext} from "react"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {ModalContext} from "../context/ModalContext"
import styled from "@emotion/styled"
import {IMG} from '../styles/PhotoAnimation'

const RecipesDiv = styled.div`
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 400px;
min-width: 295px;
margin: 25px auto;
border-radius: 5px;
min-width: 285px;
h2{
  text-align: center;
}
img{
  width: 90%;
  min-height: 255px;
}
button{
  padding: 9px 15px;
  border: none;
  border-radius: 3px;
  background: #fd5b1d;
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-block: 25px;
  &:active,
  &:hover{
    background: #e66635;
    box-shadow: 2px 2px 15px 0px rgb(0 0 0 / 20%);
  }
}
`

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: `75%`,
      maxWidth: "350px",
      overflow: "auto",
      height: "80%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    image:{
      width: "100%"
    },
    title:{
      textAlign: "center",
    }
}));


const Recipes = ({drinks, addID}) =>{
    const {drinksContain, addDrinks} = useContext(ModalContext)
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        addDrinks([])
    }
    const Ingredients = (drinksContain) =>{
        let IngredientsInfo = []
        for (let i = 1; i < 16; i++) {
            if(drinksContain[`strIngredient${i}`]){
                IngredientsInfo.push(
                    <li key={drinksContain[`strIngredient${i}`]}>{drinksContain[`strIngredient${i}`]} {drinksContain[`strMeasure${i}`]}</li>
                )
            }
        }
        return(IngredientsInfo)
    } 
    return(
    <Fragment>
      <RecipesDiv>
        <h2>{drinks.strDrink}</h2>
        <IMG src={drinks.strDrinkThumb} alt={drinks.strDrink}/>
        <button
        onClick={()=>{
            addID(drinks.idDrink)
            handleOpen();
            }}
        >See Recipe</button>
        </RecipesDiv>
        <Modal
        open={open}
        onClose={()=>{
            addID(null)
            handleClose();
        }}>
            <div style={modalStyle} className={classes.paper}>
                <h2 className={classes.title}>{drinksContain.strDrink}</h2>
                <h3>Instruction</h3>
                <p>{drinksContain.strInstructions}</p>
                <IMG className={classes.image} src={drinksContain.strDrinkThumb} alt={drinksContain.strDrink}/>
                <h3>Ingredients</h3>
                <ul>
                    {Ingredients(drinksContain)}
                </ul>
            </div>
        </Modal>
    </Fragment>
    )
}

export default Recipes;