import React from "react"

class User extends React.Component{

    constructor(props){
        super(props)
        // Initializing State variables
        this.state={
            count : 0,
            count2 :1,
        }
    }
    render(){

        const {name, loc, leet} = this.props
        const {count, count2} = this.state
        return (

            <div className="user-card">
                <h1>count: {count}</h1>
                <h1>count2: {count2}</h1>
                <button onClick={()=>{
                    //Updating state variables
                    this.setState({
                        count2:this.state.count2+1,
                        count:this.state.count+1
                    })
                }}>Increase</button>
                <h2>Name : {name}</h2>
                <h3>Location: {loc}</h3>
                <h3>Leetcode: {leet}</h3>
            </div>
        )
    }
}

export default User;