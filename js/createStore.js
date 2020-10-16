// We are placing the declared variable state in a function so that it is no longet global and easliy overwritten.
function createStore(){
let state;
 function dispatch(action){
  state = reducer(state, action);
  render();
 }
 return {dispatch} // since the function dispatch is now private we make it accesable by having create store return it in a object.

};
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};



function render() {
  let container = document.getElementById('container');
  container.textContent = state.count;
};
// In order to access the dispatch method we call createStore ans save it in a variable called store
let store = createStore();
//Then, we can use the variable store to access the dispatch method. store.dispatch({type: '@@INIT'})
store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', function() {
    dispatch({ type: 'INCREASE_COUNT' });
})
