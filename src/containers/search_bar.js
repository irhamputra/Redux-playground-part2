import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    onInputChange(e){
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e){
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    placeholder="Search City"
                    className="form-control"
                    value={this.state.term}
                    ref="city"
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);