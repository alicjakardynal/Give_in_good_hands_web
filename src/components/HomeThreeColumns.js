import React, { Component } from "react";


class HomeThreeColumns extends Component{
    render(){
        return(
            <section className="three_columns" >
                <div>
                    <h2>10</h2>
                    <p>ODDANYCH WORKÓW</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <h2>5</h2>
                    <p>WSPARTYCH ORGANIZACJI</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div>
                    <h2>7</h2>
                    <p>ZORGANIZOWANYCH ZBIÓREK</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>

        )
    }
}

export default HomeThreeColumns;