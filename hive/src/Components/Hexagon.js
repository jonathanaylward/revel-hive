import React from 'react';

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering:false,
        };  
      }
    render() {
        return (

            <svg height={200} width={200}
                style={this.props.SvgAnimationStyle}            
            >
                <g>
                <polygon
                    points={"0,90 50,0 150,0 200,90 150,180 50,180"}
                    pose={this.state.hovering ? "hovered" : "idle"}
                    onMouseEnter={() => this.setState({ hovering: true })}
                    onMouseLeave={() => this.setState({ hovering: false })}
                    onClick={this.props.onClick}
                    ref={this.props.hexagonRef}
                    className={this.props.classNames}
                    style={{
                        fill:this.props.fill,
                        stroke:`${this.props.stroke}`,
                        strokeWidth:5
                    }}
                ></polygon>
                <text
                    style={{
                        "fill":"white"
                    }}
                    x="20%"
                    y="50%"
                >
                    {this.props.text}
                </text>
                <image 
                    onClick={this.props.onClick}
                    className={this.props.classNames} 
                    href={this.props.imageLink} 
                    height="100" 
                    width="100" 
                    x="25%" 
                    y="20%"
                />
                </g>
            </svg>
        )
    }
}

export default Hexagon; 