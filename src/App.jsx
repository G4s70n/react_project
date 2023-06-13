import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import Pagination from '../src/components/Pagination/Pagination';
import InfiniteScroll from '../src/components/InfiniteScroll/InfiniteScroll';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/filters-sorts' component={Home} />
        <Route path='/Paginado/page/:page?' component={Pagination} />
        <Route exact path='/Infinite-Scroll' component={InfiniteScroll} />
      </Switch>
    </div>
  )
}

export default App
