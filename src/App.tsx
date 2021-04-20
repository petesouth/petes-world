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

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import MenuIcon from '@material-ui/icons/Menu';
import { Reacteroids } from "./asteroids/Reacteroids";

import './App.css';
import { JsxElement } from 'typescript';


const style = {

}


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



function AppCoverPagePanel(props:any) {
  const classes = useStyles();

  return  (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12} lg={12} >
      <p>
        <div className="fade-in-text">{process.env.REACT_APP_OPENING_MESSAGE}</div>
      </p>

    </GridItem>

    <GridContainer>

    <GridItem xs={6} sm={6} md={6} lg={6} >
      <div className="wrap">
        <div className="sticker"></div>
        <div className="msg">
          <div className="hello"></div>
        </div>
      </div>
    </GridItem>

   
    <GridItem xs={6} sm={6} md={6} lg={6}>
        <Reacteroids innerWidth={600} innerHeight={600} />
    </GridItem>

    </GridContainer>
   

    <GridItem xs={12} sm={12} md={12} lg={12} >
        <br/>
    </GridItem>
    <GridItem xs={12} sm={12} md={12} lg={12} >
        <br/>
    </GridItem>

  </GridContainer>);

}

function App() {

  return (
    <AppCoverPagePanel />
  );
}

export default App;
