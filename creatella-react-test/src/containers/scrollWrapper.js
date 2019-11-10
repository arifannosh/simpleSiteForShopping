import { Component } from 'react';

export default class ScrollWrapper extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll(event) {
        if (this.props.onWindowScroll) this.props.onWindowScroll(event);
    }

    render() {
        return this.props.children
    }
}