import React from 'react';
import ValuePicker from './shared/ValuePicker/index.jsx';

import './App.scss';

class App extends React.Component {
    render() {
        return (<div>
            <h1>Hello World</h1>
            <ValuePicker type={'number'} placeholder={'Weight'} incrementBy={5}/>
        </div>);
    }
}

export default App;
