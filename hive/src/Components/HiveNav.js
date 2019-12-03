import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Hexagon from "./Hexagon";
class HiveNav extends Component {
  state = {
    btnText: "Leave",
    rotate: 360,
    show: true,
    opacity: 1,
    HiveNav: [
      {
        top: 0,
        left: 0,
        delay: 0,
        fill: `black`
      },
      {
        top: -250,
        left: 0,
        delay: 500,
        fill: `blue`
      },
      {
        top: -120,
        left: 140,
        delay: 500,
        fill: "blue"
      },
      {
        top: -120,
        left: -140,
        delay: 500,
        fill: "blue"
      }
    ]
  };

  handleClick = () => {
    alert('hi');
  };

  handleLeave = () => {
    let opacity = this.state.show ? 0 : 1;
    let btnText = this.state.show ? "Enter" : "Leave";
    this.setState({ btnText, opacity, show: !this.state.show });
  };

  animateHiveNav = () =>
    this.state.HiveNav.map((hexagon, i) => (
      <Animate
        key={i}
        show={this.state.show}
        start={{
          opacity: 0,
          left: 0,
          top:0,
          fill: hexagon.fill
        }}
        enter={{
          opacity: [this.state.opacity],
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
            imageLink="http://www.revelmarketing.co/uploads/1/6/2/6/16262646/revel-marketing-partnership-solutions-2.png"
            fill={fill}
            SvgAnimationStyle={{
                transform: `translate(${left}px , ${top}px)`,
                position: `absolute`,
                opacity
            }}
          ></Hexagon>
          );
        }}
      </Animate>
    ));
  render() {
    return (
      <div>
        <div
          style={{
            width: "250px",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "15px"
          }}
        >
        </div>

        <div style={{ position: "relative"}}>
          {this.animateHiveNav()}
        </div>
        <button style={{position:`fixed`, left:`0`,top:`0`}} onClick={this.handleLeave}>
          {this.state.btnText} HiveNav
        </button>
      </div>
    );
  }
}

export default HiveNav;
