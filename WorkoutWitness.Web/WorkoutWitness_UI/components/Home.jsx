import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Workout from './Workout';

export default class Home extends Component {
    render() {
        return (
            <div className={'page-content-wrapper'}>
                <Workout/>
                <div
                    className={'addButton'}>
                    <Button
                        icon='add'
                        floating
                    />
                    
                </div>
            </div>
        );
    }
}