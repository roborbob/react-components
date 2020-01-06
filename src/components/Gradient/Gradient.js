import React, { Component } from 'react';
import styles from './Gradient.module.scss';
import Button from '../Button/Button';


class Gradient extends Component{

    state = {
        colors: {
            r: 0,
            g: 100,
            b: 255,
            r1: 0,
            g1: 0,
            b1: 0
        }
    }

    randomColorGenerator = () => {
        const newColors = {};
        for (let colorBand in this.state.colors) {
            newColors[colorBand] = Math.floor(255*Math.random());
        }
        this.setState({colors: newColors})
    }

    render(){
        let r = this.state.colors.r;
        let g = this.state.colors.g;
        let b = this.state.colors.b;
        let r1 = this.state.colors.r1;
        let g1 = this.state.colors.g1;
        let b1 = this.state.colors.b1;
        let colorOne = r +','+ g +','+ b;
        let colorTwo = r1 +','+ g1 +','+ b1;
    
        const GradientStyle = {
            background: 'linear-gradient(rgb('+ colorOne +'), rgb('+ colorTwo +'))'
        }
        
        return (
            <div className={styles.RandomColor} 
                 style={GradientStyle}>
                <p>Gradient Generator</p>
                <div>
                    <div>
                        <p>rgb({colorOne})</p>
                        <p>rgb({colorTwo})</p>
                    </div>
                </div>
                <Button clicked={this.randomColorGenerator}>New Gradient</Button>
            </div>
        )
    }
}

export default Gradient;