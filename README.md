# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alyshajoy/lotide`

**Require it:**

`const _ = require('@alyshajoy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head(...)`: return the first value of an array
  * `tail(...)`: return every value of an array except for the first one
  * `middle(...)`: return the values in the middle of an array
  * `assertArraysEqual(...)`: console log a message that tells you whether or not two arrays are equal
  * `assertEqual(...)`: console log a message that tells you whether or not two values are equal
  * `assertObjectsEqual(...)`: console log a message that tells you whether or not two objects are equal
  * `countLetters(...)`: returns an object with each letter contained in a string as keys, and how often that letter is found in the string as values
  * `countOnly(...)`: counts how often specific values are found in an array
  * `eqArrays(...)`: returns true if two arrays are identical
  * `eqObjects(...)`: returns true if two objects are identical
  * `findKey(...)`: returns the first key within an object that contains the specified value when the values are objects
  * `findKeyByValue(...)`: returns the first key within an object that contains the specified value when value is primitive
  * `flatten(...)`: take an array with nested arrays and return an array with the same values, but without any nesting
  * `letterPositions(...)`: returns an object containing each letter of the given string, as well as each letter's position in the string
  * `map(...)`: applies given function to each value within an array
  * `takeUntil(...)`: return each value of an array until it reaches a specified value
  * `without(...)`: when given two arrays, it returns the first array but with the values of the second array removed
