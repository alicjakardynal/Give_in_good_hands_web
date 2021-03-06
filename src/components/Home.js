import React, { Component } from "react";

import HomeContent from './HomeContent';
import HomeThreeColumns from './HomeThreeColumns';
import HomeHowToUseIt from './HomeHowToUseIt';
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeForm from "./HomeForm";
import HomeFooter from "./HomeFooter";


class Home extends Component{
    render(){
      return( <>
      
      <HomeContent/>
      <HomeThreeColumns/>
      <HomeHowToUseIt/>
      <HomeAboutUs/>
      <HomeWhoWeHelp/>
      <HomeForm/>
      <HomeFooter/>
      </>)
    }
  }

  export default Home;