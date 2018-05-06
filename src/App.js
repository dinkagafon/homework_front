import React, { Component } from 'react';
import ProductState from './ProductState';

class App extends Component {
  state = {
    products: "",
    name: "",
    price: ""
  }
  nameChange = event => {this.setState({name: event.target.value})}
  priceChange = event => {this.setState({price: event.target.value})}
  addProduct = () => {
    const add = {
      name: this.state.name,
      price: this.state.price
    }
    fetch('/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(add)
    })
      .then(response => response.json())
      .then(json => this.setState({ products: json }))
    this.setState({name: ""})
    this.setState({price: ""})
  }
  updateData = json => this.setState({ products: json })
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="Товар" onChange={this.nameChange} value={this.state.name}/></td>
              <td><input type="text" placeholder="Цена" onChange={this.priceChange} value={this.state.price}/></td>
              <td><button onClick={this.addProduct}>Добавить</button></td>
            </tr>
            {
              Object.keys(this.state.products)
                .map(product => <ProductState
                    key={this.state.products[product]['id']}
                    id={this.state.products[product]['id']}
                    name={this.state.products[product]['name']}
                    price={this.state.products[product]['price']}
                    updateData={this.updateData}
                  />
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    fetch('/products')
      .then(response => response.json())
      .then(json => this.setState({ products: json }));
  }
  componentDidUpdate() {
    console.log("Обновил");
  }
}

export default App;
