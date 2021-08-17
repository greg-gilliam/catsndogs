import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home.js'
import Header from './Header.js';





class App extends Component {
  render() {
   return (
   <section className="app">
     <BrowserRouter>
     <Header />
     <Switch>
       {/* <Route path="/dogs/:id" component={dogsDetail} />
       <Route path="/cats/:id" component={catsDetail} />
       <Route path="/pets" component={petsContainer} /> */}
       <Route path="/" exact>
         <h2>All the pets!</h2>
       </Route>
       <Route path="/" component={Home} />
     </Switch>
     </BrowserRouter>
   </section>
   );
  }
}

export default App;