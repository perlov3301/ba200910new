import React from 'react';
import { BrowserRouter, Switch , Route, Link} from "react-router-dom";
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

const Routes: React.FC = () => {
   return (
     <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to="/"><strong><b>Home</b></strong></Link>
          </div>
          <div>
            <Link to="/register"><strong>register</strong></Link>
          </div>
          <div>
          <Link to="/login"><b>login</b></Link>
          </div>
        </header>
       <Switch>
         <Route exact path="/" component={Home}  />
         <Route exact path="/register" component={Register}  />
         <Route exact path="/login" component={Login}  />
       </Switch>
     </div>
       
    </BrowserRouter>
   );
}

export default Routes;
