import React, { Component } from "react";

class HomeWhoWeHelp extends Component{
    state={
        funadationView: true,
        organizationsView: false,
        localsView: false,
    }


    componentDidMount() {
        changingView()
    }

    changingView = () => {
       fetch(`....`,
                {
                    method: 'GET'
                })
                .then(resp => {
                     return resp.json();
            
                })
            }


    render() {
        return (
            <section>
                <h2>Komy pomagamy?</h2>
                <p className="decoration"></p>
                <div> te trzy do wybierania opcje</div>
                <Fundation funadationView={this.state.funadationView}/>
                <Organization organizationsView={this.state.organizationsView}/>
                <Local  localsView={this.state.localsView}/>
                <div> tutaj przyciski i na onClicku każdego będzie zmieniał false na true</div>
                
            </section>
        )
    }
}
  export default HomeWhoWeHelp;
