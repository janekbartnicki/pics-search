import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends Component {
    state = {
        images: [],
        term: ''
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        
        this.setState({term});
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/><br/>
                Found {this.state.images.length} images.<br/><br/>
                <ImageList images={this.state.images} searchTerm={this.state.term}/>
            </div>
        )
    }  
}