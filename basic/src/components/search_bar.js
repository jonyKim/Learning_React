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
    // Every Java script class has a special function, a constructor
    // It is automatically executed whenever class is created.
    constructor(props) {
        super(props);

        // define and initialize state
        this.state = { term: 'Starting Value'}

        // this.state is changed using this.setState function.
        // Do not like this : this.state.term = 5 !!
    }

    // We should make render function
    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }

    // Declare event handler to get action of input component
    // If you use arrow function, you can call it directly at onChange property.
    onInputChange(event) {
        console.log(event.target.value);
    }
};

 export default SearchBar;