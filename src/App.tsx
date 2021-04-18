import React, {MouseEvent} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";

import MenuIcon from '@material-ui/icons/Menu';


import './App.css';
import { JsxElement } from 'typescript';


const style = {
 
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundSize: "cover",
     backgroundImage: 'url("images/universe-space-sky-stars-night-time-milky-way_117930-55.jpg");'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    }
  }),
);


export function ButtonAppTopBar(props:{ doLogout: (()=>void)|null })  {
  const classes = useStyles();
  const doLogout = (props.doLogout) ?  props.doLogout : ()=>{
    alert("Logged Out");
  };

  const [anchorEl, setAnchorEl] = React.useState<Element|null>(null);

  const handleClick = (event:MouseEvent ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.appBar}>
      <AppBar position="fixed">
        <Toolbar>

          <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                handleClose();
                //loginStore.doLogout();
                doLogout();
              }}>Logout</MenuItem>
            </Menu>
          </div>
          <Typography variant="h6" className={classes.title}>
            Petes World Play Ground 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridContainer>
          <ButtonAppTopBar doLogout={null}/>

      </GridContainer>
      <header className="App-header">

        <h4 className="fade-in-text">{process.env.REACT_APP_OPENING_MESSAGE}</h4>
       
      </header>
    </div>
  );
}

export default App;
