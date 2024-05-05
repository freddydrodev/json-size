# json-size [![Build Status](https://travis-ci.org/bendrucker/json-size.svg?branch=master)](https://travis-ci.org/bendrucker/json-size)

> Find the size (bytes) of a serialized object

## Install

```
$ npm install --save @freddydrodev/json-size
```

## Usage

```js
import jsonSize from "@freddydrodev/json-size";

jsonSize({ foo: "bar" });
//=> 13
```

## API

#### `jsonSize(value)` -> `number`

Returns the number of bytes of the resulting JSON.

##### value

_Required_  
Type: `any`

A value to stringify.

## License

MIT © [Ben Drucker](http://bendrucker.me)
