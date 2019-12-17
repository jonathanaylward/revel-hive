import React, { Component } from "react";
import HexNav from "./HexNav";
import SubNav from "./SubNav";
import {MainNavData, partnershipSalesData, marketingData, consultingData, contactData } from "./Data";

class NavController extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMainNav: true,
      showSubNav: false,
      mainNavData: MainNavData,
      subNavData: [],
      previousCategory: null,
    };  
  }
  //TODO: Disable Clicking while animating
  handleMainNavClick = (category) => {
    const  previousCategory = this.state.previousCategory
    console.log('call handleMainNavClick()')
    console.log('current category is' + this.state.previousCategory)
    console.log('Clicked category is' + category);
    if(previousCategory === category) {
      console.log('categories match');
      if(this.state.showSubNav) {
        this.setState(prevState => ({
          showSubNav: false,
        }));
        return;
      }
    }

    // if(category !== 'main') {
    //   if (!this.state.showSubNav) {
    //     console.log('handleMainNavClick Adding Click Event Listener');
    //     document.addEventListener('click', this.handleClick, false);
    //   } else {
    //     console.log('handleMainNavClick Removing Click Event Listener');
    //     document.removeEventListener('click', this.handleClick, false);
    //   }
    // }


    switch(category) {
      case 'partnership-sales':
        this.setState(prevState => ({
          subNavData: partnershipSalesData,
          showMainNav: true,
          showSubNav: true,
        }));
        break;
      case 'marketing':
        this.setState(prevState => ({
          subNavData: marketingData,
          showMainNav: true,
          showSubNav: true,
        }));
        break;
      case 'consulting':
        this.setState(prevState => ({
          subNavData: consultingData,
          showMainNav: true,
          showSubNav: true,
        }));
        break;
      case 'contact':
        this.setState(prevState => ({
          subNavData: contactData,
          showMainNav: true,
          showSubNav: true,
        }));
        break;
      default:
        console.log('blow a goat');
    } 

    // set previousCategory so we can compare on next main nav click
    this.setState(prevState => ({
      previousCategory: category,
    }));
  }

  // handleClick = (e) => {
  //   console.log('call handleClick()');
  //   console.log('--');
  //   console.log('e.target.classList');
  //   console.log(e.target.classList.contains('sub-nav-hex'));
  //   console.log('--');
  //   if(e.target.classList.contains('sub-nav-hex')) {
  //     return;
  //   } else {
  //     console.log('handleClick Removing Click Event Listener');
  //     document.removeEventListener('click', this.handleClick, false);
  //     this.setState(prevState => ({
  //       showMainNav: true,
  //       showSubNav: false,
  //     }));
  //   }
  // }

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
          <HexNav
            data={this.state.mainNavData}
            onItemClick={this.handleMainNavClick}
            btnText={'Leave'}
            show={this.state.showMainNav}
            opacity={1}
            hexagonRef={node => this.node = node}
            classNames={"main-nav-hex"}
          ></HexNav>
          <SubNav
            data={this.state.subNavData}
            // passing instance of function down to component (not calling the function)
            onItemClick={this.handleSubNavClick}
            btnText={'Leave'}
            show={this.state.showSubNav}
            opacity={1}
            hexagonRef={node => this.node = node}
            classNames={"sub-nav-hex"}
          ></SubNav>
        </div>
    );
  }
}

export default NavController;
