import React, { Component } from 'react'

 class IntervalClassCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }

         this.tick = this.tick.bind(this)
     }

     componentDidMount(){
         this.interval = setInterval(this.tick, 1000)
     }

     componentWillMount(){
         clearInterval(this.interval)
     }

     //better practice
    tick(){
         this.setState(prevState =>({
             count: prevState.count + 1
         }))
     }

    //  tick = ()=>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
     
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default IntervalClassCounter
