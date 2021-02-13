import react from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Challenge_1 from './components/Challenge_1';
import Challenge_2 from './components/Challenge_2';
import Challenge_3 from './components/Challenge_3';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <div className='button-container'>
            <Link to='Challenge-1'>
              <button className='tab'>
                Challenge 1
              </button>
            </Link>
            <Link to='Challenge-2'>
              <button className='tab'>
                Challenge 2
              </button>
            </Link>
            <Link to='Challenge-3'>
              <button className='tab'>
                Challenge 3
              </button>
            </Link>

          </div>
        </header>
      </div>
      <Switch>
        <Route path='/challenge-1' component={Challenge_1} />
        <Route path='/challenge-2' component={Challenge_2} />
        <Route path='/challenge-3' component={Challenge_3} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
