import React, { Component } from 'react';

class Info extends Component {

	render () {
		if(this.props.found === 1){
			return (
				<div>
					<br/>
					<br/>
					<div style={{fontSize:50}}> {this.props.info.title}</div>
					<br/>
					<div style={{fontSize:30}}> {this.props.info.weather_state_name}</div>
					<br/>
					<div style={{fontSize:30}}> {this.props.info.the_temp}C</div>
				</div>
			)
		}else if(this.props.found === 2){
			return (
				<div style={{fontSize:50}}>City not found :(</div>
			)
		}
		else{
			return (
				<div style={{fontSize:50}}>Look up cities for weather!</div>
			)	
		}
	}
}


export default Info;