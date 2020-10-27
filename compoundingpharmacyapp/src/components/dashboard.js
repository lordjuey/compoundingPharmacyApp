import React, {Component} from 'react';


export default class Dashboard extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div style={{display:"flex", justifyContent:"center", margin:"20%", flexDirection:'column'}}>
                <p style={{margin:"5%"}}>Lets get some work done </p>
                <p style={{margin:"5%"}}>HellowPharmacist </p>
            </div>
        )
    }
}