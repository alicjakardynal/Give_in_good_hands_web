import React, { Component } from "react";
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';


class Home extends Component{
    render(){
      return( <>
      <HomeHeader/>
      <HomeContent/>
      {/* <HomeThreeColumns/>
      <HomeHowToUseIt/>
      <HomeAboutUs/>
      <HomeWhoWeHelp/>
      <HomeForm/>
      <HomeFooter/> */}
      </>)
    }
  }

  export default Home;