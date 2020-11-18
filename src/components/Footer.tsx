import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//@ts-ignore
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1    
  },
  title: {
    flexGrow: 1,
    fontSize:"smaller",
    textAlign:"center"
  },
  footer:
  {
      top:"auto",
      bottom:0
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.footer}>
        <Toolbar>          
          <Typography className={classes.title}>
            &copy;copyright to Cognizant
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
