/* eslint no-implicit-coercion: [0] */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');
var pluralize = require('pluralize');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    return this.prompt([{
      type: 'input',
      name: 'container',
      message: 'Please input ' + chalk.yellow('container') + ' name',
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'resources',
      message: 'Please input ' + chalk.yellow('resource') + ' name to require fetching.\nYou can specify multiple resources with comma separated'
    }, {
      type: 'input',
      name: 'components',
      message: 'Please input ' + chalk.yellow('component') + ' name to load from the container.\nYou can specify multiple components with comma separated'
    }]).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var container = this.props.container;
    var resources = this.props.resources.split(',');
    var components = this.props.components.split(',');
    this.fs.copyTpl(
      this.templatePath('container.jsx'),
      this.destinationPath('src/containers/' + _.upperFirst(_.camelCase(container)) + '.jsx'),
      {
        camel: _.camelCase(container),
        capitalize: _.upperFirst(_.camelCase(container)),
        components: components.map(function (component) {
          component = _.upperFirst(_.camelCase(component));
          return 'import ' + component + ' from \'../components/' + component + '\';';
        }).join('\n'),
        renders: components.map(function (component) {
          component = _.upperFirst(_.camelCase(component));
          return '<' + component + ' {...props} />';
        }).join('\n    '),
        propTypes: resources.map(function (resource) {
          return pluralize(resource) + ': PropTypes.array.isRequired';
        }).join(',\n  '),
        states: resources.map(function (resource) {
          return pluralize(resource) + ': state.' + resource + '.items';
        }).join(',\n    '),
        fetchers: resources.map(function (resource) {
          return 'promises.push(fetcher.' + resource + '.load());';
        }).join('\n    ')
      }
    );
  }

});
