import React, {Component} from "react";

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    onInputChange(e){
        this.setState({ term: e.target.value })
    }

    onFormSubmit(e){
        e.preventDefault();


    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
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