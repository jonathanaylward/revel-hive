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
            <div
                pose={this.state.hovering ? "hovered" : "idle"}
                onMouseEnter={() => this.setState({ hovering: true })}
                onMouseLeave={() => this.setState({ hovering: false })}
                onClick={this.props.onClick}
                ref={this.props.hexagonRef}
                className={this.props.classNames}
                style={this.props.SvgAnimationStyle}  
            > 
            {this.props.text}
            </div>
        )
    }
}

export default Hexagon; 