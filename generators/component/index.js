/* eslint no-implicit-coercion: [0] */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    return this.prompt([{
      type: 'input',
      name: 'component',
      message: 'Please input ' + chalk.yellow('component') + ' name',
      validate: function (input) {
        return input !== '';
      }
    }]).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var component = this.props.component;
    this.fs.copyTpl(
      this.templatePath('component.jsx'),
      this.destinationPath('src/components/' + _.upperFirst(_.camelCase(component)) + '.jsx'),
      {
        camel: _.camelCase(component),
        capitalize: _.upperFirst(_.camelCase(component))
      }
    );
  }

});
