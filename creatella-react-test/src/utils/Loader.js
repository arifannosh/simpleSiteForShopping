import React, { Component } from 'react';

export default class Loader extends Component {
	render() {
		const style = {
			pageLoader : {
				height: '12vh',
				//background: "rgba(255,255,255,0.8)",
				textAlign: "center",
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column'
			},
			defaultPageLoader : {
				//background: "rgba(255,255,255,0.8)",
				
			},
			p : {

				fontSize: 36,
				fontFamily: "'Open Sans', sans-serif"
			}
		}
		return (
			<div className="page-loader"  style={style.pageLoader} >
				<p><img src="/images/loader.gif" alt="Loading" /></p>
			</div>
		)
	}
}
