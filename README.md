# Dutchman
__A Dutch linguistics utility meteor package__

[![Build Status][travis-image]][travis-url]

## Getting started

Add the package to meteor
```
meteor add q42:dutchman
```

## Basic usage

### Create the "object" from the "class"
```javascript
const dutchman = new Meteor.Dutchman("YourGoogleAPIKeyHere");
```

### Generalize
Get generalized english stems from an inserted dutch string. These stems may not always be correct and/or understandable words, but they do represent the right Dutch word though. E.G. when inserting 'Presentatie', 'Presenteren' or 'Gepresenteerd', the returned stem will be 'present'.

```javascript
dutchman.generalize("Ik heb een stukje meteor geprogrammeerd")
    .then(function(string){
      console.log(string);
    }, function(err){
      console.log(err);
    });
```
__Returns:__
```javascript
["slice", "meteor", "program"]
```

### Spelling check
Will check the existence of each individual word in the dutch dictonary [found in NPM module: dictionary-nl](https://www.npmjs.com/package/dictionary-nl). When the word seems incorrect, it suggests alternatives for the faulty word.

```javascript
dutchman.checkSpelling("Ik heb een stukje meteor geprogramaard")
    .then(function(string){
      console.log(string);
    }, function(err){
      console.log(err);
    });
```
__Returns:__
```javascript
{
  {correct: true},
  {correct: true},
  {correct: true},
  {correct: true},
  {correct: true},
  {
    correct: false,
    originalWord: "geprogramaard",
    suggestions: ["geprogrammeerd", "gedeprogrammeerd", "deprogrammeerde", "programakkoord"]
  },
}
```

[travis-url]: https://travis-ci.org/Q42/meteor-dutchman
[travis-image]: http://img.shields.io/travis/Q42/meteor-dutchman.svg
