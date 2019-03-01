import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DropDown from './pages/components/dropdown';
import Card from './pages/components/cards/cards';
import Tags from './pages/components/Tags/tags';
import Modal from './pages/components/Modal/modal';
import Pagination from './pages/components/Pagination/pagination';
import SearchBox from './pages/components/search';
class EliteRoute extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={DropDown} />
        <Route exact path="/cards" component={Card} />
        <Route exact path="/tags" component={Tags} />
        <Route exact path="/modal" component={Modal} />
        <Route exact path="/pagination" component={Pagination} />
        <Route exact path="/search" component={SearchBox} />
      </Switch>
    );
  }



}
export default EliteRoute;
