import React from 'react';
import Product from './Product'
import Settings from './Settings'
class ProductState extends React.Component {
  state = {
    setting: false
  }
  changeState = () => {
    this.setState({setting: !this.state.setting})
  }
  render() {
    return (
      <React.Fragment>
        {this.state.setting ? <Settings {...this.props} changeState={this.changeState}/> : <Product {...this.props} changeState={this.changeState}/>}
      </React.Fragment>
    );
  }
}

export default ProductState;
