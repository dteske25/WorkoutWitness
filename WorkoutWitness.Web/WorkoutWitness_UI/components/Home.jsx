import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Navbar from './Navbar';
import Settings from './Settings';
import About from './About';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Button
                    label="Default"
                    raised
                    primary
                />
            </div>
        );
    }
}