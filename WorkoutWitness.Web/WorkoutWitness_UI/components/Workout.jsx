import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

export default class Workout extends Component{
    render() {
        return (
            <Card style={{width: '350px', margin: '15px'}}>
                <CardTitle
                    title="Arm Day"
                    subtitle="2/28/2017"
                />
                <CardText>Bench Press</CardText>
                <CardText>Overhead Press</CardText>
                <CardText>Skull Crushers</CardText>
                <CardText>Rope Pulldowns</CardText>
                <CardText>Bicep Curls</CardText>
                <CardText>Lat Pulldown</CardText>
                
                <CardActions>
                    <Button label="View" />
                    <Button label="Edit" />
                </CardActions>
            </Card>
        );
    }
}