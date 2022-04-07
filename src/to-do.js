import React from 'react'

class TODO extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: ''
        }
        //binding the handleChange function 
        // do this whenever you create a function in a react component
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e){
        //this sets the value of text to the value entered in field
        this.setState({text: e.target.value})
    }
    render(){
        return(
        <div>
            <h1> TODO Application</h1>
            <form>
                <label htmlFor="id"> Input Item</label>  
                <br/> 
                 
                <label>{this.state.text}</label> <br/>
                <input id="id" onChange={this.handleChange} value={this.state.text}/>
                <button> Add </button>
            </form>
        </div>
        )
    }
}

export default TODO;