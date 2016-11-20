import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=> {
            return(
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });

    };




    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>

        );
    };

};


function mapStateToProps(state){
    //whatever is returned will show up as props inside booklist

    return{
      books: state.books
    };

};



//anything returned from this function will end up as props
//on the BookList Container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to
    //all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);

}




//connect takes a function and component and produces a container
//a container is a component that is aware of state contained by redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
