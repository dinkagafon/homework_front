import React from 'react';

class Settings extends React.Component {
  state = {
    name: "",
    price: ""
  }
  componentDidMount() {
    this.setState({name: this.props.name})
    this.setState({price: this.props.price})
  }
  nameChange = event => {this.setState({name: event.target.value})}
  priceChange = event => {this.setState({price: event.target.value})}
  done = () =>{
    const edit = {
      id: this.props.id,
      name: this.state.name,
      price: this.state.price
    }
    fetch('/edit', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(edit)
    })
      .then(response => response.json())
      .then(json => {
        this.props.updateData(json)
        this.props.changeState()
      });

  }
  render() {
    return (
        <tr>
            <td>{this.props.id}</td>
            <td>
              <input
                type="text"
                value={this.state.name}
                onChange={this.nameChange}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.price}
                onChange={this.priceChange}
              />
            </td>
            <td><button onClick={this.done}>Готово</button></td>
        </tr>
    );
  }
}

export default Settings;
