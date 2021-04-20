import React, { } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ComplexDonut from "./ComplexDonut";

import "./ChartsPanel.css";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chartContainer: {
            color: "black",
            paddingTop: 60
        }
    }),
);

export default function ChartsPanel(props: any) {

    const classes = useStyles();


    return (<div className={classes.chartContainer}>
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Example Charts
                </Typography>
            </CardContent>
            <CardContent>
                <ComplexDonut
                    size={200}
                    radius={80}
                    segments={[
                        {
                            color: '#FF8A80',
                            value: 230
                        },
                        {
                            color: '#FF80AB',
                            value: 308
                        },
                        {
                            color: '#B9F6CA',
                            value: 520
                        },
                        {
                            color: '#B388FF',
                            value: 130
                        },
                        {
                            color: '#8C9EFF',
                            value: 200
                        }
                    ]}
                    thickness={40}
                    startAngle={-90}
                />
            </CardContent>
        </Card>
    </div>)
}



