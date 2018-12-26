import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const  API_KEY = 'AIzaSyAuKi8_QC70oJ7pH74KT3ZEHp8zNrw6y78';

// Create a new component
// This component should produce some HTML
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />,  document.querySelector('.container'));