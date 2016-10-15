import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

<%- components %>

const <%- capitalize %> = props =>
  <div>
    <%- renders %>
  </div>;

<%- capitalize %>.propTypes = {
  <%- propTypes %>
};

const connected = connect(
  state => ({
    <%- states %>
  }),
  () => ({})
)(<%- capitalize %>);

const asynced = asyncConnect([{
  promise: ({ helpers: { fetcher } }) => {
    const promises = [];
    <%- fetchers %>
    return Promise.all(promises);
  }
}])(connected);

export default asynced;
