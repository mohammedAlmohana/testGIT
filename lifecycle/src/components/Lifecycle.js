import React, { Component } from 'react';

class Lifcycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: "Mohammed"
        }
    }
    componentWillMount(){
        console.log("componentwillmount is loaded")
        
    }
    getData(){
        setTimeout(()=>{
            console.log("Our fake data is getting fetched")
            this.setState({
                data: "SEI 9"
            })

        },2000)
    }
    componentDidMount(){
        this.getData()
    }
    render() { 
        return ( 
            <div>
                {this.state.data}
                {console.log("state data loaded")}
            </div>
         );
    }
}
 
export default Lifcycle;