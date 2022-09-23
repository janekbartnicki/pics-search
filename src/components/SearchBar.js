import React, {Component} from 'react';

export default class SearchBar extends Component{
    onInputChange(event){
        console.log(event.target.value);
    }

    render() {
        return (
            <form>
                <div className="ui fluid action input">
                    <input type="text" placeholder="Image search..." onChange={this.onInputChange}/>
                    <button className="ui button">Search</button>
                </div>
            </form>
        );
    }
}