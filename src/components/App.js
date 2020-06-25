import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Number from './Number';

class App extends React.Component {
  
  state = {
    inputValue: "",
    triviaValue: ""
  }

  async getTriviaValue() {
    const response = await axios.get(`http://numbersapi.com/${this.state.inputValue}`)
    const numberTriviaData = response.data
    this.setState({triviaValue: numberTriviaData})
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar 
          searchValue={this.state.inputValue} 
          onSearchValueChange={(newValue) => {
            this.setState({inputValue: newValue})
          }}
          onEnter={() => {
            if(this.state.inputValue){
              this.getTriviaValue()
            }
          }}
        />
        <Number 
          triviaOutput={this.state.triviaValue}
        />
      </div>
    );
  }
}

export default App;
