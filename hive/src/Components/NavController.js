import React, { Component } from "react";
import HexNav from "./HexNav";
import {MainNavData, esportsNavData } from "./Data";

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
    document.addEventListener('click', this.handleOutsideClick, false);
    if(category === 'esports') {
      console.log('category was '+category+' babay!');
      this.setState({
        subNavData: esportsNavData,
        showMainNav: false,
        showSubNav: true,
      });
    } else {
      alert('blow a goat');
    }
  }
  
  handleSubNavClick = () => {
        // attach/remove event handler
    if (!this.state.showSubNav) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showSubNav: !prevState.showSubNav,
    }));
  }

  handleOutsideClick = (e) => {
    console.log('handleOutsideClick' + e.target);
    console.log(this);
    if (this.node.contains(e.target)) {
      return;
    }

    alert('clicked outside of subnav');
    this.handleSubNavClick()
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
          ></HexNav>
          <HexNav
            data={this.state.subNavData}
            // passing instance of function down to component (not calling the function)
            onItemClick={this.handleSubNavClick}
            btnText={'Leave'}
            show={this.state.showSubNav}
            opacity={1}
          ></HexNav>
        </div>
      </div>
    );
  }
}

export default NavController;
