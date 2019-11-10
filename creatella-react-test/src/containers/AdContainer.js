import React, { Component } from 'react'
import { ADS_URL } from '../constants'
import AdMediaCard from '../components/AdCard'



class AdContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adUrl: '',
      maxAds: 100,
      isAd: false,
    };
    this.modalControle = this.modalControle.bind(this)
  }
  componentWillMount() {
    let randomAd = ''
    do {
      randomAd = Math.floor(Math.random() * 1000)
      randomAd = randomAd % this.state.maxAds
    } while (this.compaireMatching(this.props.prvAdd, randomAd))
    // set the value of ad
    this.setState({
      adUrl: ADS_URL + randomAd,
      isAd: true
    })
    if (this.props.currentAdRef) {
      this.props.currentAdRef(randomAd)
    }
  }
  compaireMatching = (prvAdd, randomAd) => {
    if (prvAdd.length) {
      let elm = prvAdd.find(function (element) {
        return element === randomAd;
      })
      if (elm) {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }
  modalControle = () => {
    this.setState({
      isAd: false
    })
    if (this.props.hideAd) {
      this.props.hideAd()
    }
  }
  render() {
    if (this.state.isAd) {
      return <AdMediaCard {...this.state} modalControle={this.modalControle} />
    } else {
      return null
    }
  }
}

export default AdContainer
