import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search a number</label>
            <input 
              type="text" 
              value={this.props.searchValue}
              onChange={(event) => {
                this.props.onSearchValueChange(event.target.value)
              }}
              onKeyUp={(event) => {
                // gives unique code with each code - e.g. code 13 is Enter 
                if(event.keyCode === 13){
                  this.props.onEnter()                    
                }
              }} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
