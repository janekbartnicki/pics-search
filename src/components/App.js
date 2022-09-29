import React, {Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            
            headers: {
                Authorization: 'Client-ID Zho4rglU8-6nRm_CJduROto1eQ_aukSz24KJpe7-bPY',
            }
        });
        
        console.log(response.data.results);
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '2%'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }  
}