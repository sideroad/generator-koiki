/* eslint no-implicit-coercion: [0] */
'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var userinfo = require('userinfo');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(
              '                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                  \n' +
              '                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                 \n' +
              '                MMMM                             MMMM                \n' +
              '               MMMM                               MMMM               \n' +
              '              MMMM  MMMMMMMMMMMMMMMMMMMMMMMMMMMMM  MMMM              \n' +
              '             MMMM   M' + chalk.yellow('   I              I') + 'MMMMMMMMM   MMMM             \n' +
              '            MMMM   M' + chalk.yellow('    I              I') + 'MMMMMMMMMM   MMMM            \n' +
              '           MMMM   M' + chalk.yellow('     I              I') + 'MMMMMMMMMMM   MMMM           \n' +
              '          MMMM   M' + chalk.yellow('      I              I') + 'MMMMMMMMMMMM   MMMM          \n' +
              '         MMMM   M' + chalk.yellow('       I              I') + 'MMMMMMMMMMMMM   MMMM         \n' +
              '        MMMM   M' + chalk.yellow('   I    I    I         I') + 'MMMMMMMMMMMMMM   MMMM        \n' +
              '       MMMM   M' + chalk.yellow('    I    I    I   IIIIIIIIIIIIIIIIIIIIII') + '   MMMM       \n' +
              '      MMMM   M' + chalk.yellow('      I   I   I          I         II   I') + '    MMMM      \n' +
              '     MMMM   M' + chalk.yellow('       I   I   I          I         II    I') + '    MMMM     \n' +
              '    MMMM   M' + chalk.yellow('         I  I  I           I         II     I') + '    MMMM    \n' +
              '   MMMM   M' + chalk.yellow('             I              I         II      I') + '    MMMM   \n' +
              '  MMMM   M' + chalk.yellow('              I              I         II       I') + '    MMMM  \n' +
              ' MMMM   M' + chalk.yellow('               I              I         II        I') + '    MMMM \n' +
              'MMMM   MM' + chalk.yellow('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII         IIIIIIIIIIII') + '    MMMM\n' +
              'MMMM    M               M                                  ' + chalk.yellow('I') + '    MMMM \n' +
              ' MMMM   M               M                  ' + chalk.yellow('II              I') + '   MMMM  \n' +
              '  MMMM   M              M                  ' + chalk.yellow('II             I') + '   MMMM   \n' +
              '   MMMM   M             M                 ' + chalk.yellow('IIII           I') + '   MMMM    \n' +
              '    MMMM   M            M                 ' + chalk.yellow('IIII          I') + '   MMMM     \n' +
              '     MMMM   M        M  M  M            ' + chalk.yellow('IIIIIIII       I') + '   MMMM      \n' +
              '      MMMM   M     M    M   M      ' + chalk.yellow('IIIIIII    IIIIIII I') + '   MMMM       \n' +
              '       MMMM   M   M     M    M     ' + chalk.yellow('IIIIIII    IIIIIII') + 'M   MMMM        \n' +
              '        MMMM   M M      M      M        ' + chalk.yellow('IIIIIIII') + '    M   MMMM         \n' +
              '         MMMM   M       M       M         ' + chalk.yellow('IIII') + '     M   MMMM          \n' +
              '          MMMM   M      M                 ' + chalk.yellow('IIII') + '    M   MMMM           \n' +
              '           MMMM   M     M                 ' + chalk.yellow('IIII') + '   M   MMMM            \n' +
              '            MMMM   M    M                  ' + chalk.yellow('II') + '   M   MMMM             \n' +
              '             MMMM   M   M                  ' + chalk.yellow('II') + '  M   MMMM              \n' +
              '              MMMM   MMMMMMMMMMMMMMMMMMMMMMMMMM   MMMM               \n' +
              '               MMMM                              MMMM                \n' +
              '                MMMM                            MMMM                 \n' +
              '                 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                  \n' +
              '                  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                   \n' +
              '                                                                     \n' +
              '                  K   K    OOOOO    I    K   K    I                  \n' +
              '                  K  K    O     O   I    K  K     I                  \n' +
              '                  KKK     O     O   I    KKK      I                  \n' +
              '                  K  K    O     O   I    K  K     I                  \n' +
              '                  K   K    OOOOO    I    K   K    I                  \n' +
              '\n' +
      'Getting started to create ' + chalk.yellow('koiki') + ' project'
    );
    var appname = _.kebabCase(this.appname);

    return this.prompt([{
      type: 'input',
      name: 'app',
      message: 'Please input ' + chalk.yellow('app') + ' name',
      default: appname,
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'description',
      message: 'Please explain app ' + chalk.yellow('description'),
      default: 'Awesome, cool and app',
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'author',
      message: 'Please input ' + chalk.yellow('author') + ' name',
      default: userinfo.whoami(),
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'globalHost',
      message: 'Please input ' + chalk.yellow('global app host'),
      default: appname + '.herokuapp.com',
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'globalPort',
      message: 'Please input ' + chalk.yellow('global app port'),
      default: 443,
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'apiHost',
      message: 'Please input ' + chalk.yellow('API host'),
      default: 'chaus.herokuapp.com',
      validate: function (input) {
        return input !== '';
      }
    }, {
      type: 'input',
      name: 'apiPort',
      message: 'Please input ' + chalk.yellow('API port'),
      default: 443,
      validate: function (input) {
        return input !== '';
      }
    }]).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.mkdir('app');
    this.fs.copy(this.templatePath('**/*'), this.destinationPath('.'));
    this.fs.copy(this.templatePath('**/.*'), this.destinationPath('.'));
    this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), {
      app: this.props.app,
      description: this.props.description,
      author: this.props.author,
      globalHost: this.props.globalHost,
      globalPort: this.props.globalPort
    });
    this.fs.copyTpl(this.templatePath('src/config.js'), this.destinationPath('src/config.js'), {
      app: this.props.app,
      description: this.props.description,
      author: this.props.author,
      globalHost: this.props.globalHost,
      globalPort: this.props.globalPort,
      apiHost: this.props.apiHost,
      apiPort: this.props.apiPort
    });
    this.fs.copyTpl(this.templatePath('src/containers/App.jsx'), this.destinationPath('src/containers/App.jsx'), {
      description: this.props.description
    });
  },

  install: function () {
    this.installDependencies({
      bower: false,
      npm: true,
      callback: function () {
        console.log('scaffolding app has done!');
      }
    });
  }

});
