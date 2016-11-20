

//state argument is no the application state, it is only the state
// this reducer is responsible for
//
//ES6 Magic: if state is undefined set it to null

export default function(state = null, action){

    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }


    return state;

}