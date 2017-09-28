// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state=[], action) {
  // whenever you click likes - running all reducers
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log('Incrementing Likes!');
    const i = action.index;
      return[
        //object spreads
        ...state.slice(0,i), // before the one we are updating
        //make copy of object
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
      //break;
    // return the updated state
    default:
      return state;
  }
  // console.log('the post will change');
  // console.log(state, action);
  // return state;
}

export default posts;
