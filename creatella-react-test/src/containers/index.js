import React, { Component } from 'react';
import MenuAppBar from '../components/AppBar'
import ProductsList from './productsList'
import AdContainer from './AdContainer'
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAd: false,
      prvAdd: []
    };
  }
  showAd = () => {
    if (this.state.isShowAd) {
      this.setState({
        isShowAd: false
      }, () => this.setState({
        isShowAd: true
      }))
    } else {
      this.setState({
        isShowAd: true
      })
    }
  }
  hideAd = () => {
    this.setState({
      isShowAd: false
    })
  }
  currentAdRef = (adref) => {
    let { prvAdd } = this.state
    prvAdd.push(adref)
    this.setState({
      prvAdd
    })
  }

  render() {
    return (
      < >
        <MenuAppBar />
        {this.state.isShowAd &&
          <AdContainer {...this.state} hideAd={this.hideAd} currentAdRef={this.currentAdRef} />}
        <ProductsList showAd={this.showAd} />
      </>
    );
  }
}

export default Products