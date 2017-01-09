# generator-koiki [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Even faster react/redux development

## Installation

First, install [Yeoman](http://yeoman.io) and generator-koiki using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-koiki
```

### Generate your new project

```bash
yo koiki
```

### Generate container

```bash
yo koiki:container
```

### Generate component

```bash
yo koiki:component
```

### Generate reducer

```bash
yo koiki:reducer
```


## Contribution

### How to test to create app
There is a directory to test generator.
You can create test app for it.

```bash
npm link
cd test-app
yo koiki
cd ..
npm unlink
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [sideroad](sideroad.secret.jp)


[npm-image]: https://badge.fury.io/js/generator-koiki.svg
[npm-url]: https://npmjs.org/package/generator-koiki
[travis-image]: https://travis-ci.org/sideroad/generator-koiki.svg?branch=master
[travis-url]: https://travis-ci.org/sideroad/generator-koiki
[daviddm-image]: https://david-dm.org/sideroad/generator-koiki.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/sideroad/generator-koiki
[coveralls-image]: https://coveralls.io/repos/sideroad/generator-koiki/badge.svg
[coveralls-url]: https://coveralls.io/r/sideroad/generator-koiki
