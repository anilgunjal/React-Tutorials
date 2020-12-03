import React, { Component } from 'react'

export default class Images extends Component {
    
    componentWillUnmount(){
        console.log("Images will unmount")
    }
    
    // This means when the <Images /> componet gets removed while clocking on the toggle button then componentWillMount gets called

    render() {
        return (
            <img src="https://images.unsplash.com/photo-1604423203943-54721eff418a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" />
        )
    }
}
