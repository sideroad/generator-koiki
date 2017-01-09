import React, { PropTypes } from 'react';

const styles = require('../css/<%= kebab %>.less');

const <%= capitalize %> = props =>
  <div
    className={styles.<%= camel %>}
  >
    {props.lead}
  </div>;

<%= capitalize %>.propTypes = {
  lead: PropTypes.string.isRequired
};

export default <%= capitalize %>;
