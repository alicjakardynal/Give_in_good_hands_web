import React, { Component } from "react";
import organizations from "../database/organizations";


class HomeWhoWeHelp extends Component{
    state={
        currentOrganizationType: 1,
        currentPage:1,
        firstNumberToShow:0,
        lastNUmberToShow:3,
    }


    handleName=(number)=>{
        this.setState({
            currentOrganizationType:number,
        })
    }
handlePage=(number)=>{
    this.setState({
        currentPage:number,
    })
}
    handleNumbers=(number1,number2)=>{
this.setState({
    firstNumberToShow:number1,
    lastNUmberToShow:number2,
})
    if(this.state.currentPage===1){
    this.handlePage(2)
    }
    else{this.handlePage(1)}

    }
   
  

    render() {
        return (
            <section className='who_We_help' id="fundations">
                <h2>Komu pomagamy?</h2>
                <p className="decoration"></p>
                <div className='three_choices'> 
                    <div onClick={()=>this.handleName(0)} className={this.state.currentOrganizationType ==0 && "border"}>Fundacjom</div>
                    <div onClick={()=>this.handleName(1)} className={this.state.currentOrganizationType ==1 && "border"}>Organizacjom pozarządowym</div>
                    <div onClick={()=>this.handleName(2)} className={this.state.currentOrganizationType ==2 && "border"}>Lokalnym zbiórkom</div>
                </div>
                <p className='description'>{organizations.organizations[this.state.currentOrganizationType].description}</p>
                <ul>
                    {organizations.organizations[this.state.currentOrganizationType].foundations.slice
                    (this.state.firstNumberToShow,this.state.lastNUmberToShow).map((each, index)=>
                    <li key={index}>
                       <div>
                            <h3>{each.name}</h3>
                            <p>{each.mission}</p>
                          
                        </div>
                        <p>{each.things}</p>
                    </li>)}
                </ul>
                
                <div className='which_choosen'> 
                    <p onClick={()=>this.handleNumbers(0,3)}  className={this.state.currentPage ==1 && 'added_border'}>1</p>
                    <p onClick={()=>this.handleNumbers(3,5)}  className={this.state.currentPage ==2 && 'added_border'}>2</p>
                   
                </div>
                                
            </section>
        )
    }
}
  export default HomeWhoWeHelp;
