import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Category from './category';

import HomePage from './Homepage';
import Id from './id';
import Ingredient from './Ingredient';
import Name from './name';

const Routes = () => {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/id" exact component={Id} />
                <Route path="/category" exact component={Category} />
                <Route path="/name" exact component={Name} />
                <Route path="/ingre" exact component={Ingredient} />
               

            
               
                
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes
