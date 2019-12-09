import React from 'react';

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering:false,
        };  
      }
    render() {
        const hFill = this.props.fill;
        const hStroke = this.props.stroke;
        console.log(this.props.fill);
        return (

            <svg height={200} width={200}
                style={this.props.SvgAnimationStyle}            
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="90%" style={{
                            stopColor:`${hFill}`, 
                            stopOpacity:"1",
                        }} />
                        <stop offset="100%" style={{
                            stopColor:`${hStroke}`,
                            stopOpacity:"1",
                        }} />
                    </linearGradient>
                </defs>
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
                        fill:"url(#grad1)",
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