import React, {Component} from 'react';


export default class Dashboard extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div style={{display:"flex", justifyContent:"center", margin:"20%", flexDirection:'column'}}>
                <p style={{margin:"5%"}}>Greeting/Time goes here </p>
                <p style={{margin:"5%"}}>Number of fagged formula goes here </p>
                
            </div>
        )
    }
}