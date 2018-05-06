import React from 'react';

class Product extends React.Component {

  deleteProduct = () => {
    const deleteId = {id: this.props.id};
    fetch('/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteId)
    })
    .then(response => response.json())
    .then(json => this.props.updateData(json));
  }

  render() {
    return (
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td><button onClick={() => this.props.changeState()}>Редактировать</button></td>
            <td><button onClick={this.deleteProduct}>Удалить</button></td>
        </tr>
    );
  }
}

export default Product;
