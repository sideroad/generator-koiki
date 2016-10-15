/* eslint no-implicit-coercion: [0] */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    return this.prompt([{
      type: 'input',
      name: 'reducer',
      message: 'Please input ' + chalk.yellow('reducer') + ' name',
      validate: function (input) {
        return input !== '';
      }
    }]).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var reducers = this.fs.read(this.destinationPath('src/reducers/index.js'));
    var reducer = this.props.reducer;
    var exporter = /export default \{\n([^}]+)\n\};/m;
    this.fs.write(
      this.destinationPath('src/reducers/index.js'),
      'import ' + reducer + ' from \'./' + reducer + '\';\n' +
      reducers.replace(exporter, 'export default {\n' + reducers.match(exporter)[1] + ',\n  ' + reducer + '\n};')
    );
    this.fs.copyTpl(
      this.templatePath('reducer.js'),
      this.destinationPath('src/reducers/' + reducer + '.js'),
      {
        reducer: this.props.reducer
      }
    );
  }

});
