import React, { Component } from 'react';

//create our component generator
/*
const SearchBar = () => {

    return <input />;

};
*/


class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    //create the return and pass it the event handler
    // big arrow is like saying function()
    //Use the setState function to set the state of the component

    render() {
        return (

            <div className ="search-bar">
            <input value = {this.state.term} onChange ={event => this.onInputChange(event.target.value)}/>
             <p> The value is: {this.state.term}</p>
            </div>
    );

    }


    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }



/** all classes need a render method if they extenc component

    //console.log(event.target.value);
    //create an event handler
//the event object describes the event that occured
    onInputChange(event) {
        if(event.type == 'change') {
            console.log(event.target.value);
        }
    }
 **/
}



//export the component for use elsewhere

export default SearchBar;