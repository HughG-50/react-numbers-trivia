import React from 'react';

class Number extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return <div>{this.props.triviaOutput}</div>;
  }
}

export default Number;
