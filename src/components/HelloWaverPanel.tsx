import React, {  } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import GridContainer from "./GridContainer";
import GridItem from "./GridItem";

import './HelloWaverPanel.css';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  }),
);


export default function HelloWaverPanel(props:any) {
    const classes = useStyles();
    
    return (<div style={{ padding: 100}}><GridContainer>

    <GridItem xs={12} sm={12} md={12} lg={12} >
      <div className="wrap">
        <div className="sticker"></div>
        <div className="msg">
          <div className="hello"></div>
        </div>
      </div>
    </GridItem>
    </GridContainer></div>);
}


