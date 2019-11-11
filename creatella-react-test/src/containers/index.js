import React, { Component } from 'react';
import MenuAppBar from '../components/AppBar'
import ProductsList from './productsList'
import AdContainer from './AdContainer'
import SortMenu from '../components/sortMenu'
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowAd: false,
      prvAdd: [],
      sortOption: 'id',
      showProductsList: true
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
  handleChange = (event) => {
    let val = event.target.value
    if (val !== this.state.sortOption) {
      this.setState({
        showProductsList: false,
        sortOption: val
      }, () => this.setState({ showProductsList: true }))
    }
  }
  render() {
    return (
      < >
        <MenuAppBar />
        <SortMenu {...this.state} handleChange={this.handleChange} />
        {this.state.isShowAd &&
          <AdContainer {...this.state} hideAd={this.hideAd} currentAdRef={this.currentAdRef} />}
        {this.state.showProductsList &&
          <ProductsList {...this.state} showAd={this.showAd} />
        }
      </>
    );
  }
}

export default Products