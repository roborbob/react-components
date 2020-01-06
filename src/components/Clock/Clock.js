import React, { Component } from 'react';
import styles from './Clock.module.scss';

class Clock extends Component {

    state = {
        date: new Date()
    };
    
    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
      }
    
    render () {
        return (
            <div className={styles.Clock}>
                <p>Clock</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}


export default Clock;