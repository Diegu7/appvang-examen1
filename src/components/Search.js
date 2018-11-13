import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			loc: ''
		}
	}

	handleSubmit = event =>{
		event.preventDefault() 
		
		let url = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.state.loc}`;
		axios
			.get(url)
			.then( resp => {
				console.log('Searching');
				let url2 = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${resp.data[0].woeid}`;
				axios
					.get(url2)
					.then( resp2 => {
						this.props.submit({
							title: resp2.data.title,
							weather_state_name: resp2.data.consolidated_weather[0].weather_state_name,
							the_temp: resp2.data.consolidated_weather[0].the_temp,
						}, 1);
						this.setState({loc: ''});	
					})
					.catch(err => {
						this.props.submit([], 2);
				      	console.log(url);
				      	console.log(err.response);
			      	})
				
			})
			.catch(err => {
				this.props.submit([], 2);
		      	console.log(url);
		      	console.log(err.response);
	      	})
	    
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					<input type="text" value={this.state.loc} onChange={event => this.setState({loc: event.target.value})}/>
				</label>
				<br/>
				<br/>
				<input type="submit" value="Search" />
			</form>
		)
	}
}

export default Search;