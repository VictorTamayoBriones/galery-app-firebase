import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Login from '../views/Login';
import Galery from '../views/Galeria';
import Error404 from '../views/404';

const Routes = () => {
    return (  
        <Switch>
            <PrivateRoute path="/" exact={true}> <Galery/> </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route component={Error404} />
        </Switch>
    );
}
 
export default Routes;