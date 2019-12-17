import React, { Component } from "react";
import organizations from "../database/organizations";


class HomeWhoWeHelp extends Component{
    state={
        currentOrganizationType: 0,
    }


    handleName=(number)=>{
        this.setState({
            currentOrganizationType:number,
        })
    }

   

    render() {
        return (
            <section className='who_We_help'>
                <h2>Komu pomagamy?</h2>
                <p className="decoration"></p>
                <div className='three_choices'> 
                    <div onClick={()=>this.handleName(0)}>Fundacjom</div>
                    <div onClick={()=>this.handleName(1)}>Organizacjom pozarządowym</div>
                    <div onClick={()=>this.handleName(2)}>Lokalnym zbiórkom</div>
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
                    <p className='added_border'>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                
            </section>
        )
    }
}
  export default HomeWhoWeHelp;
