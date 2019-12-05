import React, { Component } from "react";
import HexNav from "./HexNav";
import {MainNavData, esportsNavData, eventsNavData, regularSports } from "./Data";

class NavController extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMainNav: true,
      showSubNav: false,
      mainNavData: MainNavData,
      subNavData: [],
    };  
  }

  handleMainNavClick = (category) => {
    console.log('call handleMainNavClick()')
    if(category !== 'main') {
      if (!this.state.showSubNav) {
        console.log('handleMainNavClick Adding Click Event Listener');
        document.addEventListener('click', this.handleClick, false);
      } else {
        console.log('handleMainNavClick Removing Click Event Listener');
        document.removeEventListener('click', this.handleClick, false);
      }
    }


    switch(category) {
      case 'esports':
        console.log('category was '+category+' babay!');
        this.setState(prevState => ({
          subNavData: esportsNavData,
          showMainNav: false,
          showSubNav: true,
        }));
        break;
      case 'regularSports':
        console.log('category was '+category+' babay!');
        this.setState(prevState => ({
          subNavData: regularSports,
          showMainNav: false,
          showSubNav: true,
        }));
        break;
      case 'events':
        console.log('category was '+category+' babay!');
        this.setState(prevState => ({
          subNavData: eventsNavData,
          showMainNav: false,
          showSubNav: true,
        }));
        break;
      default:
        console.log('blow a goat');
    } 
  }
  
  handleClick = (e) => {
    console.log('call handleClick()');
    console.log('--');
    console.log('e.target.classList');
    console.log(e.target.classList.contains('sub-nav-hex'));
    console.log('--');
    if(e.target.classList.contains('sub-nav-hex')) {
      return;
    } else {
      console.log('handleClick Removing Click Event Listener');
      document.removeEventListener('click', this.handleClick, false);
      this.setState(prevState => ({
        showMainNav: true,
        showSubNav: false,
      }));
    }

    // debugger;
  }

  handleSubNavClick = () => {
    console.log('subnav item clicked, doing nothing');
  }

  handleLeave = () => {
    let opacity = this.state.show ? 0 : 1;
    let btnText = this.state.show ? "Enter" : "Leave";
    this.setState({ btnText, opacity, show: !this.state.show });
  };

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
          <HexNav
            data={this.state.mainNavData}
            onItemClick={this.handleMainNavClick}
            btnText={'Leave'}
            show={this.state.showMainNav}
            opacity={1}
            hexagonRef={node => this.node = node}
            classNames={"main-nav-hex "}
          ></HexNav>
          <HexNav
            data={this.state.subNavData}
            // passing instance of function down to component (not calling the function)
            onItemClick={this.handleSubNavClick}
            btnText={'Leave'}
            show={this.state.showSubNav}
            opacity={1}
            hexagonRef={node => this.node = node}
            classNames={"sub-nav-hex"}
          ></HexNav>
        </div>
      </div>
    );
  }
}

export default NavController;
