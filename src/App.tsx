import React, { MouseEvent } from 'react';
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
      backgroundImage: 'url("images/universe-space-sky-stars-night-time-milky-way_117930-55.jpg");',
      paddingBottom: "1px",
      backgroundColor: "black"
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
    },
    hello: {
      width: "50px",
      height: "72px",
      backgroundImage: 'url("images/sprite-steps.png")',
      animation: "moveX 1s steps(10) infinite",
      color: "whitesmoke",
      textAlign: "center",
      fontFamily: "'Bree Serif', Courier, monospaced",
      fontSize: "1.5em",
      position: "absolute",
      margin: "-30px 0 0 68px",
      pointerEvents: "none"
    }


  }),
);


export function ButtonAppTopBar(props: { doLogout: (() => void) | null }) {
  const classes = useStyles();
  const doLogout = (props.doLogout) ? props.doLogout : () => {
    alert("Logged Out");
  };

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  const handleClick = (event: MouseEvent) => {
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
      <GridContainer className="App-header">
        <ButtonAppTopBar doLogout={null} />
        <GridItem xs={12} sm={12} md={12} lg={12} >
          <p>
            <div className="fade-in-text">{process.env.REACT_APP_OPENING_MESSAGE}</div>
          </p>

        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} >
          <div className="wrap">
            <div className="sticker"></div>
            <div className="msg">
              <div className={classes.hello}></div>
            </div>
          </div>
        </GridItem>
      </GridContainer>

    </div>
  );
}

export default App;
