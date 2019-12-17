import React, { Component } from "react";
import organizations from "../database/organizations";


class HomeWhoWeHelp extends Component{
    state={
        currentOrganizationType: 1,
    }


    handleName=(number)=>{
        this.setState({
            currentOrganizationType:number,
        })
    }

   borderedDiv=()=>{

   }

    render() {
        return (
            <section className='who_We_help'>
                <h2>Komu pomagamy?</h2>
                <p className="decoration"></p>
                <div className='three_choices'> 
                    <div onClick={()=>this.handleName(0)} className={this.state.currentOrganizationType ==0 && "border"}>Fundacjom</div>
                    <div onClick={()=>this.handleName(1)} className={this.state.currentOrganizationType ==1 && "border"}>Organizacjom pozarządowym</div>
                    <div onClick={()=>this.handleName(2)} className={this.state.currentOrganizationType ==2 && "border"}>Lokalnym zbiórkom</div>
                </div>
                <p className='description'>{organizations.organizations[this.state.currentOrganizationType].description}</p>
                <ul>
                    {organizations.organizations[this.state.currentOrganizationType].foundations.map((each, index)=>
                    <li key={index}>
                       <div>
                            <h3>{each.name}</h3>
                            <p>{each.mission}</p>
                          
                        </div>
                        <p>{each.things}</p>
                    </li>)}
                </ul>
                
                <div className='which_choosen'> 
                    <p onClick={()=>this.handleName(0)} className={this.state.currentOrganizationType ==0 && 'added_border'}>1</p>
                    <p onClick={()=>this.handleName(1)} className={this.state.currentOrganizationType ==1 && 'added_border'}>2</p>
                    <p onClick={()=>this.handleName(2)} className={this.state.currentOrganizationType ==2 && 'added_border'}>3</p>
                </div>
                
            </section>
        )
    }
}
  export default HomeWhoWeHelp;
