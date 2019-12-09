import React from 'react';
import styled from "styled-components";

// const StyledText = styled.text`
//     color:white;
//     fill:white;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering:false,
        };  
      }
    render() {
        const StyledHexagon = styled.polygon`
            fill:${this.props.fill};
            stroke:#fefefe;
            strokeWidth:1;
        `;
        return (

            <svg height={190} width={155}
                style={this.props.SvgAnimationStyle}            
            >
                <g>
                <StyledHexagon
                    points={"0,140 0,50 75,0 150,50 150,140 75,190"}
                    pose={this.state.hovering ? "hovered" : "idle"}
                    onMouseEnter={() => this.setState({ hovering: true })}
                    onMouseLeave={() => this.setState({ hovering: false })}
                    onClick={this.props.onClick}
                    ref={this.props.hexagonRef}
                    className={this.props.classNames}
                />
                <image 
                    onClick={this.props.onClick}
                    className={this.props.classNames} 
                    href={this.props.imageLink} 
                    height="100" 
                    width="100" 
                    x="17%" 
                    y="23%"
                />
                </g>
            </svg>
        )
    }
}

export default Hexagon; 