function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }

function myMap(collection, callback) {
    let keys = Object.keys(collection);
    let newArray = [];
  
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = collection[key];
      let newValue = callback(value);
      newArray.push(newValue);
    }
  
    return newArray;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let startIndex = acc === undefined ? 1 : 0;
    let accumulator = acc === undefined ? collection[keys[0]] : acc;
  
    for (let i = startIndex; i < keys.length; i++) {
      let key = keys[i];
      let value = collection[key];
      accumulator = callback(accumulator, value, collection);
    }
  
    return accumulator;
}

function myFind(collection, predicate) {
    let keys = Object.keys(collection);
  
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = collection[key];
      if (predicate(value)) {
        return value;
      }
    }
  
    return undefined;
}

function myFilter(collection, predicate) {
    let keys = Object.keys(collection);
    let filteredArray = [];
  
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = collection[key];
      if (predicate(value, key, collection)) {
        filteredArray.push(value);
      }
    }
  
    return filteredArray;
}

function mySize(collection) {
    let keys = Object.keys(collection);
    return keys.length;
}

function myFirst(array, n=1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
}

function myLast(array, n=1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
}

function myKeys(object) {
    let keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
}

function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
}