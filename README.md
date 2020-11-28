# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fatima/lotide`

**Require it:**

`const _ = require('@fatima/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: check if two strings are equal.
* `assertArraysEqual(...)`: check if two arrays have the same elements.
* `countlettres(...)`: return the number of lettres in a sentance.
* `eqArrays(...)`: check if two arrays are equal.
* `eqObjects(...)`: check if two objects are equal.
* `findKey(...)`: find key in un object
* `findkeyByValue (...)`: find key in un object giving it value.
* `head(...)`: return the first element in an array.
* `letterPositions(...)`: return un object of letters and their positions
* `map(...)`: return an array of the first lettre of each word giving.
* `tail(...)`: return tail of an array.
* `takeUntil(...)`: return an array of items until a condition is true.
* `without(...)`: return an array without some items to remove.
* `middle(...)`: return the middle of an array.


