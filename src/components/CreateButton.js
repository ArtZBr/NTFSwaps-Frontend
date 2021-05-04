import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    border: "2px solid #FF7F00",
    borderRadius: "34px",
    color: 'white',
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "6px 12px",
    marginLeft: "40px"
  },
});
export default function CreateButton(props) {
  const classes = useStyles();
  return <Button {...props} startIcon={<PlusIcon />} className={classes.root}>{props.children}</Button>
}
