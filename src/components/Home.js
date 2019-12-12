import React, { Component } from "react";

import HomeContent from './HomeContent';
import HomeThreeColumns from './HomeThreeColumns';
import HomeHowToUseIt from './HomeHowToUseIt';


class Home extends Component{
    render(){
      return( <>
      
      <HomeContent/>
      <HomeThreeColumns/>
      <HomeHowToUseIt/>
      {/* <HomeAboutUs/>
      <HomeWhoWeHelp/>
      <HomeForm/>
      <HomeFooter/> */}
      </>)
    }
  }

  export default Home;