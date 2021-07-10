import React, {Fragment, useState, useContext} from "react"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {ModalContext} from "../context/ModalContext"

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
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
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
        <img src={drinks.strDrinkThumb} alt={drinks.strDrink}/>
        <h2>{drinks.strDrink}</h2>
        <button
        onClick={()=>{
            addID(drinks.idDrink)
            handleOpen();
            }}
        >See Recipe</button>
        <Modal
        open={open}
        onClose={()=>{
            addID(null)
            handleClose();
        }}>
            <div style={modalStyle} className={classes.paper}>
                <h2>{drinksContain.strDrink}</h2>
                <h3>Instruction</h3>
                <p>{drinksContain.strInstructions}</p>
                <img src={drinksContain.strDrinkThumb} alt={drinksContain.strDrink}/>
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