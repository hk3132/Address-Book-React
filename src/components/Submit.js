import React, { Component } from 'react'

let list = [];

class Submit extends Component {
  state = {
    input: "",
    record: "",
  }

  change = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
   
  }

  submit = () => {
    this.setState({
      record: this.state.input,
      input: ""
    });
    list.push(this.state.input);
  }

  click = async ()  => {
    await this.submit();
  }

  render() {
    console.log(list);
    return (
      <div>
        <input type="text" className="input" onChange={this.change} value={this.state.input} />
        <button onClick={this.click} className="button">Submit</button>
        <div className="record">
        {list.map((name, index) => {
            return <p>{list[index]}</p>})}
        </div>
      </div>

    )
  }
}

export default Submit

