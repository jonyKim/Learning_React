 // 2018.12.26
 // Purpose: Learn React Basic
 // Author: jonyKim
 // Reference: Modern React and Redux (Stephen Grider) at https://www.udemy.com
 
 import React, { Component } from 'react';  // use Syntacitc sugar
 // const Component = React.Component;
 
 // This is functional component. It returns JSX format.
 // There are two component in React. Functional Component. Class Component.
 // Class component is used to save internal data.
 
 /*const SearchBar = () => {
     return <input />
 }*/

 // Reactoring functional component to class component like this:
class SearchBar extends Component {
    // We should make render function
    render() {
        return <input />;
    }
};

 export default SearchBar;