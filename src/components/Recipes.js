import React, {Fragment, useState} from "react"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
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
            <div>
                <p>Hola Mundo</p>
            </div>
        </Modal>
    </Fragment>
    )
}

export default Recipes;