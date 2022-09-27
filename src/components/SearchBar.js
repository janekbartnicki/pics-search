import React, {Component} from 'react';

export default class SearchBar extends Component{
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="ui fluid action input">
                    <input type="text" value={this.state.term} placeholder="Image search..." onChange={(event) => this.setState({term: event.target.value})}/>
                    <button className="ui button">Search</button>
                </div>
            </form>
        );
    }
}