import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { FETCH_LIMIT, API_URL, PRODUCTS_ENTITY } from '../constants'
import SimpleCard from '../components/Card'
import ScrollWrapper from './scrollWrapper'
import Loader from '../utils/Loader'

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dt_list: [],
            lastPageLoaded: 1,
            preFetched: [],
            loadingState: true,
            isFatch: true,
            isFetchFristTime: false,
            sortOption:''
        };
        this.myRef = React.createRef()
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillMount() {
        this.loadMoreItems()
    }

    loadMoreItems = () => {
        let { lastPageLoaded } = this.state
        // fetch the API and convert the response to json
        fetch(`${API_URL}/${PRODUCTS_ENTITY}?_page=${lastPageLoaded}&_limit=${FETCH_LIMIT}&_sort=${this.props.sortOption}`)
            .then(response => response.json().then(products => {
                if (lastPageLoaded === 1) {
                    this.setState({
                        dt_list: products,
                        lastPageLoaded: lastPageLoaded + 1,
                        isFetchFristTime: true,
                    })
                } else {
                    this.setState({
                        preFetched: products,
                        lastPageLoaded: lastPageLoaded + 1,
                        isFatch: true,
                        isFetchFristTime: false
                    })
                }

                // if data received is below the limit
                if (products.length < FETCH_LIMIT) {
                    this.setState({
                        loadingState: false,
                        isFatch: false
                    })
                }
            })
            )

    }
    handleScroll = () => {
        if (this.state.isFatch &&
            window.pageYOffset + window.innerHeight >=
            document.body.offsetHeight -72) {
            if (this.props.showAd) {
                this.props.showAd()
            }
            this.setState({
                isFatch: false,
                dt_list: this.state.dt_list.concat(this.state.preFetched),
            }, () => this.loadMoreItems())
        }
    }
   
    render() {
        let { dt_list, isFetchFristTime } = this.state
        if (isFetchFristTime) {
            this.loadMoreItems()
        }
        let data = ''
        if (dt_list.length) {
            data = dt_list.map(item =>
                <ListRows key={item.id + Math.floor(Math.random())} data={item} {...this.props}
                />
            );
            return (
                <ScrollWrapper onWindowScroll={this.handleScroll}>
                    < div style={{ paddingTop: 130, paddingBottom: 100 }} >
                        <Grid container spacing={0} >
                            {data}
                        </Grid>
                        {this.state.loadingState ?
                        <Loader/>:
                        <h3 style={{textAlign: 'center'}}>~ end of catalogue ~</h3>}
                    </div>
                </ScrollWrapper>
            )
        }
        else {
            return null
        }
    }
}

export default ProductsList

export class ListRows extends Component {
    render() {
        return (
            <Grid item xs={6} sm={3} >
                <SimpleCard {...this.props.data} />
            </Grid>
        )
    }
}
