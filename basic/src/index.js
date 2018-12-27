import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const  API_KEY = 'AIzaSyAuKi8_QC70oJ7pH74KT3ZEHp8zNrw6y78';

// Create a new component
// This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; // list of video objecs

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState( { videos });
         });
        
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />,  document.querySelector('.container'));