import React, {  } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";


import MenuIcon from '@material-ui/icons/Menu';
import { Reacteroids } from "./asteroids/Reacteroids";
import DraggingWaterEffect from "./components/DraggingWaterEffect";
import HelloWaverPanel from "./components/HelloWaverPanel";
import ChartsPanel from "./components/ChartsPanel";

//import Utils from "./services/utils";
import './App.css';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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



function AppCoverPagePanel(props: any) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showItem, setShowItem] = React.useState<string>("asteroids");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShowAsteroids = () => {
    setAnchorEl(null);
    setShowItem("asteroids");
  };


  const handleShowHello = () => {
    setAnchorEl(null);
    setShowItem("hello");
  };

  const handleShowSparkly = () => {
    setAnchorEl(null);
    setShowItem("sparkly");
  }

  const handleShowCharts = () => {
    setAnchorEl(null);
    setShowItem("charts");
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (<div style={{ minWidth: "800" }}>
    <GridContainer>

      <GridItem xs={12} sm={12} md={12} lg={12} >
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(event) => {
              handleClick(event)
            }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={(handleClose)}
            >
              <MenuItem onClick={handleShowAsteroids}>Asteroids</MenuItem>
              <MenuItem onClick={handleShowHello}>Say Hello SVG Animation</MenuItem>
              <MenuItem onClick={handleShowSparkly}>Sparkle Chase</MenuItem>
              <MenuItem onClick={handleShowCharts}>Charts</MenuItem>

            </Menu>
            <Typography variant="h6" className={classes.title}>
              <div className="fade-in-text">{process.env.REACT_APP_OPENING_MESSAGE}</div>
            </Typography>

          </Toolbar>
        </AppBar>
      </GridItem>

      <GridItem xs={12} sm={12} md={12} lg={12} >
        {(() => {
          if (showItem === "asteroids") {
            return <Reacteroids innerWidth={800} innerHeight={800} />;
          } else if (showItem === "hello") {
            return <HelloWaverPanel />;
          } else if (showItem === "sparkly") {
            return <DraggingWaterEffect innerWidth={"100%"} innerHeight={"100%"} />;
          } else if ( showItem === "charts") {
            return <ChartsPanel />;
          }
        })()
        }
      </GridItem>



    </GridContainer>
  </div>);

}

function App() {

  return (
    <AppCoverPagePanel />
  );
}

export default App;
