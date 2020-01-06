import React, { Component } from 'react';
import styles from './Switch.module.scss';

class Switch extends Component {
    constructor() {
    super();
        this.state = {
            transformed: true
        }
    this.clickHandler = this.clickHandler.bind(this);
    }

   clickHandler() {
        this.setState(prevState => ({
            transformed: ! prevState.transformed
          }));
   }

    render() {
        return (
            <div className={styles.Switch}>
                <p>Switch</p>
                <div 
                    className={styles.powerBox} 
                    onClick={this.clickHandler}
                    style={{backgroundColor: this.state.transformed ?
                            "red" : "green"}}>
                    <span 
                        className={styles.slider} 
                        style={{transform: this.state.transformed ? 
                                "translateX(0)" : "translateX(38px)" }}>     
                        </span>
                </div>
            </div>
        )
    };
}

export default Switch;