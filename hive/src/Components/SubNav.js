import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Hexagon from "./Hexagon";

class SubNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

  handleClick = (category) => {
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
          left: hexagon.initialLeft,
          top: hexagon.initialTop,
          fill: hexagon.fill,
          stroke: hexagon.stroke
        }}
        enter={[
            {
                opacity: 0,
                left: [hexagon.initialLeft],
                top: [hexagon.initialTop],
                timing: { delay: 0, duration: 0, ease: easePolyOut }
            },
            {
                opacity: [this.props.opacity],
                left: [hexagon.left],
                top: [hexagon.top],
                timing: { delay: hexagon.delay, duration: 1000, ease: easePolyOut }
              }
        ]}
        update={[
            {
                opacity: 0,
                timing: {delay: 0, duration: 0, ease: easePolyOut }
            },
            {
                left: [hexagon.initialLeft],
                top: [hexagon.initialTop],
                timing: { delay: 100, duration: 100, ease: easePolyOut }
            },
            {
                opacity: 1,
                left: [hexagon.left],
                top: [hexagon.top],
                timing: { delay: 200, duration: 1000, ease: easePolyOut }
            }
        ]
        }
        leave={{
          left: [hexagon.left],
          top: [hexagon.top],
          opacity: [0],
          timing: { delay: hexagon.delay, duration: 1000, ease: easePolyOut }
        }}
      >
        {({ opacity, left, top, fill, stroke }) => {
          return (
            <a href={hexagon.link} >
            <Hexagon
            onRest={console.log('animation complete')}
            imageLink={hexagon.imageLink}
            text={hexagon.text}
            fill={fill}
            stroke={stroke}
            boxStyling={{
                transform: `translate(${left}% , ${top}%)`,
                opacity: opacity,
            }}
            onClick={() => this.handleClick(hexagon.category)}
            hexagonRef={this.hexagonRef}
            classNames={this.props.classNames + ' ' + hexagon.category + ' hex-nav-box'}
          ></Hexagon>
          </a>
          );
        }}
      </Animate>
    ));

  render() {
    return (
      <div  style={{
        "position": "relative",
      }} >
        {this.animateNav(this.props.data)}
      </div>
    );
  }
}

export default SubNav;
