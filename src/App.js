import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    backgroundColor: '#ffffff',
    textBeefColor: '#000000'
  }

  handleKeyUp = (event) => {
    let reggie = /^[0-9a-f]+$/

    if (event.target.value.length===6 && reggie.test(event.target.value)){
      console.log(event.target.value)
      this.setState({
        backgroundColor: `#` + event.target.value,
        textBeefColor: this.invertColor(event.target.value)
      })
    }
  }

  invertColor(color) {
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color#35970186
    var r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  render() {
    return (
      <main
        style={{
          backgroundColor: this.state.backgroundColor /* Your code here */
        }}
      >
        <input
          onKeyUp={this.handleKeyUp}
          placeholder="000000"
          style={{ color: this.state.textBeefColor /* Your code here */ }}
          maxLength = '6'
        />
      </main>
    );
  }
}

export default App;
