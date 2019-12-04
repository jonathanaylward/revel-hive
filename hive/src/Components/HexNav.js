import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Hexagon from "./Hexagon";

class HexNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  handleClick = (category) => {
    console.log('clicked' + category);
    this.props.onItemClick(category);
  };

  handleLeave = () => {
    let opacity = this.props.show ? 0 : 1;
    let btnText = this.props.show ? "Enter" : "Leave";
    this.setState({ btnText, opacity, show: !this.props.show });
  };

  animateNav = (data) =>
    data.map((hexagon, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          opacity: 0,
          left: 0,
          top:0,
          fill: hexagon.fill
        }}
        enter={{
          opacity: [this.props.opacity],
          left: [hexagon.left],
          top: [hexagon.top],
          timing: { delay: hexagon.delay, duration: 1000, ease: easePolyOut }
        }}
        update={{
          timing: { delay: hexagon.delay, duration: 1000, ease: easePolyOut }
        }}
        leave={{
          opacity: [0],
          timing: { delay: hexagon.delay, duration: 1000, ease: easePolyOut }
        }}
      >
        {({ opacity, left, top, fill }) => {
          return (
            <Hexagon
            imageLink={"http://www.revelmarketing.co/uploads/1/6/2/6/16262646/revel-marketing-partnership-solutions-2.png"}
            fill={fill}
            SvgAnimationStyle={{
                transform: `translate(${left}px , ${top}px)`,
                position: `absolute`,
                opacity: opacity,
            }}
            onClick={() => this.handleClick(hexagon.category)}
          ></Hexagon>
          );
        }}
      </Animate>
    ));

  render() {
    return (
      <div>
        {this.animateNav(this.props.data)}
      </div>
    );
  }
}

export default HexNav;