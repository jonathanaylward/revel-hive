import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Hexagon from "./Hexagon";
import {HiveNavData, esportsNavData } from "./Data";

class SubNav extends Component {
  state = {
    btnText: "Leave",
    rotate: 360,
    show: true,
    opacity: 1,
    subNavData: [],
  };

  handleClick = (category) => {
    // const subNavData = this.state.subNavData.slice();
    if(category === 'esports') {
      this.setState({
        subNavData: esportsNavData,
      });
    } else {
      alert('blow a goat');
    }
  };

  animateSubNav = (data) => 
  data.map((hexagon, i) => (
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
      {({ opacity, left, top, fill, category }) => {
        return (
          <Hexagon
          imageLink="http://www.revelmarketing.co/uploads/1/6/2/6/16262646/revel-marketing-partnership-solutions-2.png"
          fill={fill}
          SvgAnimationStyle={{
              transform: `translate(${left}px , ${top}px)`,
              position: `absolute`,
              opacity
          }}
          onClick={() => this.handleClick(hexagon.category)}
        ></Hexagon>
        );
      }}
    </Animate>
  ));
  handleLeave = () => {
    let opacity = this.state.show ? 0 : 1;
    let btnText = this.state.show ? "Enter" : "Leave";
    this.setState({ btnText, opacity, show: !this.state.show });
  };

  render() {
    return (
      <div>
          {this.animateSubNav(this.props.data)}
      </div>
    );
  }
}

export default SubNav;
