import {connect} from 'react-redux';
import {startRotate} from './actions/startAction';
import {stopRotate} from './actions/stopAction';

import logo from './logo.svg';
import './App.css';

function App({state, startRotate, stopRotate}) {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className={
            "App-logo" + 
            (state.rotating ? "":" App-logo-paused")
          } 
          alt="logo" 
          onClick={
            state.rotating ? 
              stopRotate : startRotate
          }
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  startRotate: () => dispatch(startRotate),
  stopRotate: () => dispatch(stopRotate)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
