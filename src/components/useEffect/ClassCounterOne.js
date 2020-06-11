import React, { Component } from 'react'

//set effect with class comonent
class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             name : ''
        }
        this.countHandler = this.countHandler.bind(this)
        this.nameHandler = this.nameHandler.bind(this)
    }

    countHandler(){
        this.setState({
            count:this.state.count +1 
        })
    }

    nameHandler(e){
        this.setState({
            name : e.target.value
        })
    }
    
    componentWillMount(){
        document.title =  `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        
        if(prevState.count !==this.state.count){
            console.log('updating document title')
            document.title = `clicked ${this.state.count} times`
        }
        
    }
    
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.name} onChange = {this.nameHandler} ></input>
                <button onClick = {this.countHandler}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounterOne
