import React from 'react'

export default class ClassExample extends React.Component {

  constructor(props){
    super(props);
    this.state={
      foo : 'bar',
      count : 3
    }
    console.log('props', props)
    // this.incrementCounter = this.incrementCounter.bind(this);
  }

  //lifeCycle methods
  componentWillMount(){
    console.log('componentWillMount')

  }

  componentDidMount(){
    console.log('componentDidMount')
    console.log('this.state', this.state)
    this.logResult()

  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentWillReceiveProps(){
console.log('this.props', this.props)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log('this.state :componentDidUpdate', this.state)

  }

  incrementCounter(){
    this.setState((state, props) =>{
      return {
        count: state.count + 1
      };
    });
  }
  logResult(){
    console.log('this.state', this.state)

  }

  render() {
    return (
      <div>
     my count is:  {this.state.count}
     <button onClick={() => this.incrementCounter()}> incrementCounter</button>
      </div>
    )
  }
}
