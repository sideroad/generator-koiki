import React, { PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import config from '../config';

const App = props =>
  <div>
    {props.children}
    <Helmet {...config.app.head} title="<%= description %>" />
  </div>;

App.propTypes = {
  children: PropTypes.element,
};

export default asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    const promises = [];
    console.log(true || dispatch);
    return Promise.all(promises);
  }
}])(App);
