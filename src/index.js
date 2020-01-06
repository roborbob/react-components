import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Clock from './components/Clock/Clock';
import Switch from './components/Switch/Switch';
import Gradient from './components/Gradient/Gradient';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React Components</h1>
                <Clock/>
                <Switch/>         
                <Gradient/>
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));