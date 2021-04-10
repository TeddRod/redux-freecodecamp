import {connect} from 'react-redux';
import {rotateAction} from './actions/rotateAction';

import logo from './logo.svg';
import './App.css';

const App = (props) => {
  
  console.log(props)

  const {rotating, rotateAction} = props;
  
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className={
            "App-logo" + 
            (rotating ? "":" App-logo-paused")
          } 
          alt="logo" 
          onClick={() => rotateAction(!rotating)}
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
